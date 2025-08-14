"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import api from "../api";

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

interface ReviewFormData {
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
  projectTitle: string;
  projectLink: string;
}

const Reviews: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewData[]>([]);
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
    const fetchReviews = async () => {
      try {
        const res = await api.get("/review/getreviews");
        setReviews(res.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const openModal = () => setIsOpen(true);
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

  const handleSubmit = async () => {
    try {
      const res = await api.post("/review", formData);
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
          Client Reviews
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No reviews yet.</p>
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

        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
            onClick={openModal}
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              Write a Review
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

export default Reviews;
