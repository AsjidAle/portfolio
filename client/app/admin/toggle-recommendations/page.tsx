"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, PinOff, Trash2, Loader2 } from "lucide-react";
import AdminLayout from "../AdminLayout";
import api from "../../api.js";

interface Recommendation {
  _id: string;
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
  status: string; // "pending" | "verified"
  pinned: boolean;
}

export default function ManageRecommendationsPage() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const res = await api.get("/totalrecommendations");
      const data = Array.isArray(res.data?.recommendations)
        ? res.data.recommendations
        : [];
      setRecommendations(data);
    } catch (err) {
      console.error("Fetch Recommendations Error:", err);
      setRecommendations([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const togglePin = async (id: string) => {
    setActionLoading(id);
    try {
      await api.put(`/recommendation/pin/${id}`);
      setRecommendations((prev) =>
        prev.map((r) => (r._id === id ? { ...r, pinned: !r.pinned } : r))
      );
    } catch (err) {
      console.error("Pin Error:", err);
    }
    setActionLoading(null);
  };

  const deleteRecommendation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this recommendation?"))
      return;
    setActionLoading(id);
    try {
      await api.delete(`/recommendation/${id}`);
      setRecommendations((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
    }
    setActionLoading(null);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Recommendations</h1>
          <p className="text-gray-500">
            View, pin, or delete user-submitted recommendations.
          </p>
        </div>
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
                <th className="px-6 py-3">Designation</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Feedback</th>
                <th className="px-6 py-3">Verified</th>
                <th className="px-6 py-3">Pinned</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {recommendations.map((rec) => (
                  <motion.tr
                    key={rec._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border-b last:border-none"
                  >
                    <td className="px-6 py-4">{rec.name}</td>
                    <td className="px-6 py-4">{rec.email}</td>
                    <td className="px-6 py-4">{rec.designation}</td>
                    <td className="px-6 py-4">{rec.company}</td>
                    <td className="px-6 py-4">{rec.feedback}</td>
                    <td className="px-6 py-4">
                      {rec.status === "verified" ? "✅" : "❌"}
                    </td>
                    <td className="px-6 py-4">
                      {rec.pinned ? (
                        <Pin className="text-yellow-500" size={20} />
                      ) : (
                        <PinOff className="text-gray-400" size={20} />
                      )}
                    </td>
                    <td className="px-6 py-4 flex gap-3">
                      <button
                        onClick={() => togglePin(rec._id)}
                        className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        disabled={actionLoading === rec._id}
                      >
                        {rec.pinned ? "Unpin" : "Pin"}
                      </button>
                      <button
                        onClick={() => deleteRecommendation(rec._id)}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        disabled={actionLoading === rec._id}
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
