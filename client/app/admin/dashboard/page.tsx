"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3 } from "lucide-react"; // Modern icon
import AdminLayout from "../AdminLayout";
import api from "@/app/api";

export default function AdminDashboard() {
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    const fetchTotalReviews = async () => {
      try {
        const res = await api.get("/totalreviews");
        setTotalReviews(res.data.totalReviews);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalReviews();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl mt-8 font-bold mb-6 tracking-tight">
        Welcome to Admin Dashboard
      </h1>
      <p className="text-gray-500 mb-8">
        Manage reviews, recommendations, and statuses from here.
      </p>

      {/* Modern Stat Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm hover:shadow-lg p-6 w-full max-w-sm"
      >
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <BarChart3 className="text-gray-700 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Reviews</p>
            <AnimatePresence mode="wait">
              <motion.h3
                key={totalReviews}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-gray-900 tracking-tight"
              >
                {totalReviews}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
}
