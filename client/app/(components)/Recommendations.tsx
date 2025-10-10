"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import api from "../api";

interface RecommendationData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  createdAt: string;
}

interface RecommendationFormData {
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
}

const Recommendations: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationData[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const initialFormData: RecommendationFormData = {
    name: "",
    email: "",
    designation: "",
    company: "",
    feedback: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await api.get("/recommendation/getrecommendations");
        setRecommendations(res.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
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
      const res = await api.post("/recommendation", formData);
      if (res.status === 201 || res.status === 200) {
        alert(
          "Please check your email to verify before your recommendation appears."
        );
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
          Client Recommendations
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">
            Loading recommendations...
          </p>
        ) : recommendations.length === 0 ? (
          <p className="text-gray-500 text-center">No recommendations yet.</p>
        ) : (
          <div className="space-y-5">
            {recommendations.map((rec) => (
              <div
                key={rec._id}
                className="bg-white shadow-lg hover:shadow-xl transition p-5 rounded-xl border border-green-100"
              >
                <h4 className="text-lg font-bold text-gray-800">{rec.name}</h4>
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

        <div className="mt-8 flex justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow"
            onClick={openModal}
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
              Write a Recommendation
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
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
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

export default Recommendations;
