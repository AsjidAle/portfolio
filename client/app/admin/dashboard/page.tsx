"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3 } from "lucide-react";
import AdminLayout from "../AdminLayout";
import api from "@/app/api";

export default function AdminDashboard() {
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalRecommendations, setTotalRecommendations] = useState(0);

  // reviews
  useEffect(() => {
    const fetchTotalReviews = async () => {
      try {
        const res = await api.get("/totalreviews");
        console.log(res);
        setTotalReviews(res.data.totalReviews);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalReviews();
  }, []);

  // recommendations
  useEffect(() => {
    const fetchTotalRecommendations = async () => {
      try {
        const res = await api.get("/totalrecommendations");
        console.log(res);
        setTotalRecommendations(res.data?.count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalRecommendations();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl mt-8 font-bold mb-6 tracking-tight">
        Welcome to Admin Dashboard
      </h1>
      <p className="text-gray-500 mb-8">
        Manage reviews, recommendations, and statuses from here.
      </p>

      {/* Modern Stat Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Reviews */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <BarChart3 className="text-indigo-600 w-6 h-6" />
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

        {/* Recommendations */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <BarChart3 className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Total Recommendations
              </p>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={totalRecommendations}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold text-gray-900 tracking-tight"
                >
                  {totalRecommendations}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
