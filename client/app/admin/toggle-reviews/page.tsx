// app/admin/reviews/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, PinOff, Trash2, Loader2 } from "lucide-react";
import AdminLayout from "../AdminLayout";
import api from "../../api";

interface Review {
  _id: string;
  name: string;
  email: string;
  feedback: string;
  enabled: boolean;
  pinned: boolean;
  isVerified: boolean;
}

export default function ToggleReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [toggleLoading, setToggleLoading] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await api.get("/getreviews");
      const data = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.reviews)
        ? res.data.reviews
        : [];
      setReviews(data);
    } catch (err) {
      console.error("Fetch Reviews Error:", err);
      setReviews([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const togglePin = async (id: string) => {
    setActionLoading(id);
    try {
      await api.patch(`/review/${id}/pin`);
      setReviews((prev) =>
        prev.map((r) => (r._id === id ? { ...r, pinned: !r.pinned } : r))
      );
    } catch (err) {
      console.error("Pin Error:", err);
    }
    setActionLoading(null);
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    setActionLoading(id);
    try {
      await api.delete(`/review/${id}`);
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
    }
    setActionLoading(null);
  };

  // Toggle all reviews (enable/disable)
  const toggleAllReviews = async () => {
    setToggleLoading(true);
    try {
      const res = await api.patch("/toggle-all"); // Backend route
      const newStatus = res.data.enabled;
      setReviews((prev) => prev.map((r) => ({ ...r, enabled: newStatus })));
    } catch (err) {
      console.error("Toggle All Reviews Error:", err);
    }
    setToggleLoading(false);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Reviews</h1>
          <p className="text-gray-500">
            Pin, delete, or enable/disable all reviews from here.
          </p>
        </div>
        <button
          onClick={toggleAllReviews}
          disabled={toggleLoading}
          className={`px-4 py-2 rounded text-white ${
            toggleLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {toggleLoading ? "Toggling..." : "Toggle All Reviews"}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin text-gray-500" size={28} />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Feedback</th>
                <th className="px-6 py-3">Verified</th>
                <th className="px-6 py-3">Enabled</th>
                <th className="px-6 py-3">Pinned</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {reviews.map((review) => (
                  <motion.tr
                    key={review._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border-b last:border-none"
                  >
                    <td className="px-6 py-4">{review.name}</td>
                    <td className="px-6 py-4">{review.email}</td>
                    <td className="px-6 py-4">{review.feedback}</td>
                    <td className="px-6 py-4">
                      {review.isVerified ? "✅" : "❌"}
                    </td>
                    <td className="px-6 py-4">
                      {review.enabled ? "✅" : "❌"}
                    </td>
                    <td className="px-6 py-4">
                      {review.pinned ? (
                        <Pin className="text-yellow-500" size={20} />
                      ) : (
                        <PinOff className="text-gray-400" size={20} />
                      )}
                    </td>
                    <td className="px-6 py-4 flex gap-3">
                      <button
                        onClick={() => togglePin(review._id)}
                        className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        disabled={actionLoading === review._id}
                      >
                        {review.pinned ? "Unpin" : "Pin"}
                      </button>
                      <button
                        onClick={() => deleteReview(review._id)}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        disabled={actionLoading === review._id}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
