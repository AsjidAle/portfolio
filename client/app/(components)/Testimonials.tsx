"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import api from "../api"; // axios instance

interface BaseFormData {
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
}

interface ReviewFormData extends BaseFormData {
  projectTitle: string;
  projectLink: string;
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
}
interface RecommendationData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  createdAt: string;
}

const Testimonials: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>("review");
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [recommendations, setRecommendations] = useState<RecommendationData[]>(
    []
  );
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsRes, recsRes] = await Promise.all([
          api.get("/review/getreviews"),
          api.get("/recommendation/getrecommendations"),
        ]);
        setReviews(reviewsRes.data);
        setRecommendations(recsRes.data);
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
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async () => {
  //   try {
  //     const endpoint = formType === "review" ? "/review" : "/recommendation";
  //     const payload =
  //       formType === "review"
  //         ? formData
  //         : {
  //             name: formData.name,
  //             email: formData.email,
  //             designation: formData.designation,
  //             company: formData.company,
  //             feedback: formData.feedback,
  //           };

  //     const res = await api.post(endpoint, payload);
  //     // console.log(res.data);

  //     if (res.status === 201 || res.status === 200) {
  //       alert(
  //         `${
  //           formType === "review" ? "Review" : "Recommendation"
  //         } submitted successfully!`
  //       );
  //       if (formType === "review") {
  //         setReviews((prev) => [res.data.review, ...prev]);
  //       } else {
  //         setRecommendations((prev) => [res.data.recommendation, ...prev]);
  //       }
  //       closeModal();
  //     }
  //   } catch (error) {
  //     console.error("Submission Error:", error);
  //     alert("Failed to submit.");
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const endpoint = formType === "review" ? "/review" : "/recommendation";
      const payload =
        formType === "review"
          ? formData
          : {
              name: formData.name,
              email: formData.email,
              designation: formData.designation,
              company: formData.company,
              feedback: formData.feedback,
            };

      const res = await api.post(endpoint, payload);

      if (res.status === 201 || res.status === 200) {
        alert("Please check your email to verify before your review appears.");
        closeModal();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit.");
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reviews */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Client Reviews
              </h3>
              {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
              ) : (
                <div className="space-y-5">
                  {reviews.map((review) => (
                    <div
                      key={review._id}
                      className="bg-white shadow-lg hover:shadow-xl transition p-5 rounded-xl border border-blue-100"
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
                            >
                              View
                            </a>
                          )}
                        </p>
                      )}
                      <p className="mt-3 text-gray-700">{review.feedback}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Client Recommendations
              </h3>
              {recommendations.length === 0 ? (
                <p className="text-gray-500">No recommendations yet.</p>
              ) : (
                <div className="space-y-5">
                  {recommendations.map((rec) => (
                    <div
                      key={rec._id}
                      className="bg-white shadow-lg hover:shadow-xl transition p-5 rounded-xl border border-green-100"
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
                </div>
              )}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow"
            onClick={() => openModal("review")}
          >
            Write a Review
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow"
            onClick={() => openModal("recommendation")}
          >
            Write a Recommendation
          </button>
        </div>
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
                  placeholder="Project Title"
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
