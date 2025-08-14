"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@headlessui/react";
import AdminLayout from "../AdminLayout";

interface Recommendation {
  id: number;
  title: string;
  author: string;
  active: boolean;
}

export default function ToggleRecommendationsPage() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    { id: 1, title: "Great Developer", author: "John Doe", active: true },
    { id: 2, title: "Very Professional", author: "Jane Smith", active: false },
    { id: 3, title: "Creative Thinker", author: "Mike Ross", active: true },
  ]);

  const handleToggle = (id: number) => {
    setRecommendations((prev) =>
      prev.map((rec) => (rec.id === id ? { ...rec, active: !rec.active } : rec))
    );
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Recommendations</h1>
      <p className="text-gray-500 mb-6">
        Enable or disable recommendations for display.
      </p>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Author</th>
              <th className="px-6 py-3">Active</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {recommendations.map((rec) => (
                <motion.tr
                  key={rec.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="border-b last:border-none"
                >
                  <td className="px-6 py-4">{rec.title}</td>
                  <td className="px-6 py-4">{rec.author}</td>
                  <td className="px-6 py-4">
                    {rec.active ? "Enabled" : "Disabled"}
                  </td>
                  <td className="px-6 py-4">
                    <Switch
                      checked={rec.active}
                      onChange={() => handleToggle(rec.id)}
                      className={`${
                        rec.active ? "bg-green-500" : "bg-gray-300"
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                    >
                      <span
                        className={`${
                          rec.active ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </Switch>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
