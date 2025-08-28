// components/Testimonials.tsx
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import Marquee from "react-fast-marquee";
import api from "../api";
import { useReviewModal } from "../context/ReviewModalContext";
import { useRouter } from "next/navigation";

interface ReviewFormData {
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
  projectTitle?: string;
  projectLink?: string;
}

type FormType = "review" | "recommendation";

interface ReviewData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  projectTitle?: string;
  projectLink?: string;
  createdAt: string;
  enabled: boolean;
  media?: string[]; // <— show in popup
}

interface RecommendationData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  createdAt: string;
}

const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "video/mp4",
  "video/webm",
];

const Testimonials: React.FC = () => {
  const router = useRouter();
  const { open } = useReviewModal();
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>("review");

  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [recommendations, setRecommendations] = useState<RecommendationData[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [reviewsEnabled, setReviewsEnabled] = useState(true);

  const initialFormData: ReviewFormData = {
    name: "",
    email: "",
    designation: "",
    company: "",
    feedback: "",
    projectTitle: "",
    projectLink: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // media selection state (for review form)
  const [selectedMedia, setSelectedMedia] = useState<File[]>([]);
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stateRes, recsRes] = await Promise.all([
          api.get("/getreviews-status"),
          api.get("/getrecommendations"),
        ]);

        const enabledResp =
          typeof stateRes.data?.enabled === "boolean"
            ? stateRes.data.enabled
            : true;

        setReviewsEnabled(enabledResp);
        setReviews(
          Array.isArray(stateRes.data?.reviews) ? stateRes.data.reviews : []
        );
        setRecommendations(Array.isArray(recsRes.data) ? recsRes.data : []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openModal = (type: FormType) => {
    setFormType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData(initialFormData);
    // reset media selection
    setSelectedMedia([]);
    mediaPreviews.forEach((url) => URL.revokeObjectURL(url));
    setMediaPreviews([]);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // file input change
  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (files.length > MAX_FILES) {
      alert(`You can upload up to ${MAX_FILES} files.`);
      return;
    }

    const valid: File[] = [];
    const previews: string[] = [];

    for (const f of files) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        alert(`${f.name} is not an allowed type.`);
        continue;
      }
      if (f.size > MAX_SIZE) {
        alert(`${f.name} is larger than 10MB.`);
        continue;
      }
      valid.push(f);
      previews.push(URL.createObjectURL(f));
    }

    setSelectedMedia(valid);
    // clear previous previews
    mediaPreviews.forEach((url) => URL.revokeObjectURL(url));
    setMediaPreviews(previews);
  };

  const handleSubmit = async () => {
    try {
      const endpoint = formType === "review" ? "/review" : "/recommendation";

      if (formType === "review") {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);
        fd.append("designation", formData.designation);
        fd.append("company", formData.company);
        fd.append("feedback", formData.feedback);
        if (formData.projectTitle)
          fd.append("projectTitle", String(formData.projectTitle));
        if (formData.projectLink)
          fd.append("projectLink", String(formData.projectLink));
        selectedMedia.forEach((file) => fd.append("media", file));

        const res = await api.post(endpoint, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.status === 201 || res.status === 200) {
          alert(
            "Please check your email to verify before your review appears."
          );
          closeModal();
        }
      } else {
        // recommendations remain JSON submit
        const payload = {
          name: formData.name,
          email: formData.email,
          designation: formData.designation,
          company: formData.company,
          feedback: formData.feedback,
        };
        const res = await api.post(endpoint, payload);
        if (res.status === 201 || res.status === 200) {
          alert("Thank you! Your recommendation has been received.");
          closeModal();
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit.");
    }
  };

  const handelClick = () => {
    router.push("/reviews");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Clients Say
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading testimonials...</p>
        ) : (
          <>
            {/* Reviews Section — only if globally enabled */}
            {reviewsEnabled && (
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Client Reviews
                </h3>
                {reviews.length === 0 ? (
                  <p className="text-gray-500">No reviews yet.</p>
                ) : (
                  <Marquee
                    pauseOnHover
                    direction="right"
                    gradient={false}
                    speed={50}
                  >
                    {reviews.map((review) => (
                      <div
                        key={review._id}
                        onClick={() => open(review._id)}
                        className="bg-white shadow-lg hover:shadow-xl transition p-5 rounded-xl border border-blue-100 mx-3 w-80 cursor-pointer"
                      >
                        <h4 className="text-lg font-bold text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {review.designation} at {review.company}
                        </p>
                        {review.projectTitle && (
                          <p className="text-sm mt-1 text-blue-600">
                            Project: {review.projectTitle}{" "}
                            {review.projectLink && (
                              <a
                                href={review.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View
                              </a>
                            )}
                          </p>
                        )}
                        <p className="mt-3 text-gray-700">
                          {review.feedback.slice(0, 30)}...
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={handelClick}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    See More Reviews
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded shadow"
                    onClick={() => openModal("review")}
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            )}

            {/* Recommendations Section */}
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Client Recommendations
              </h3>
              {recommendations.length === 0 ? (
                <p className="text-gray-500">No recommendations yet.</p>
              ) : (
                <Marquee
                  pauseOnHover
                  direction="left"
                  gradient={false}
                  speed={50}
                >
                  {recommendations.map((rec) => (
                    <div
                      key={rec._id}
                      className="bg-white shadow-lg hover:shadow-xl transition p-5 rounded-xl border border-green-100 mx-3 w-80"
                    >
                      <h4 className="text-lg font-bold text-gray-800">
                        {rec.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {rec.designation} at {rec.company}
                      </p>
                      <p className="mt-3 text-gray-700">{rec.feedback}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(rec.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </Marquee>
              )}
              <div className="mt-4 flex gap-4">
                <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                  See More Recommendations
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded"
                  onClick={() => openModal("recommendation")}
                >
                  Write a Recommendation
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              {formType === "review"
                ? "Write a Review"
                : "Write a Recommendation"}
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="designation"
              placeholder="Your Designation"
              value={formData.designation}
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />

            {formType === "review" && (
              <>
                <input
                  type="text"
                  name="projectTitle"
                  placeholder="Project Title (optional)"
                  value={formData.projectTitle}
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="projectLink"
                  placeholder="Project Link (optional)"
                  value={formData.projectLink}
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />

                {/* Media input */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Images/Videos (up to 5, max 10MB each)
                  </label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept=".jpg,.jpeg,.png,.webp,.mp4,.webm"
                    onChange={handleMediaChange}
                    className="w-full"
                  />
                  {/* Previews */}
                  {mediaPreviews.length > 0 && (
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {mediaPreviews.map((src, i) =>
                        selectedMedia[i]?.type.startsWith("video") ? (
                          <video
                            key={i}
                            src={src}
                            controls
                            className="w-full h-24 object-cover rounded"
                          />
                        ) : (
                          <img
                            key={i}
                            src={src}
                            className="w-full h-24 object-cover rounded"
                            alt={`media-${i}`}
                          />
                        )
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            <textarea
              name="feedback"
              className="w-full p-2 border rounded mb-4"
              rows={4}
              placeholder="Write your feedback here..."
              value={formData.feedback}
              onChange={handleChange}
            ></textarea>

            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
