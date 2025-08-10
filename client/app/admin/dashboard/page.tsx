"use client";

import AdminLayout from "../AdminLayout";

export default function AdminDashboard() {
  const handleReviewStatusUpdate = () => {
    alert("Navigating to review status update...");
  };

  const handleToggleReviews = () => {
    alert("Toggling reviews");
  };

  const handleToggleRecommendations = () => {
    alert("Toggling recommendations");
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl mt-8 font-bold mb-6">
        Welcome to Admin Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        Manage reviews, recommendations, and statuses from here.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          onClick={handleReviewStatusUpdate}
          className="cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold mb-2">Update Review Status</h2>
          <p className="text-gray-500">Modify the status of pending reviews.</p>
        </div>

        <div
          onClick={handleToggleReviews}
          className="cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold mb-2">Enable/Disable Reviews</h2>
          <p className="text-gray-500">Control user review functionality.</p>
        </div>

        <div
          onClick={handleToggleRecommendations}
          className="cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold mb-2">Enable/Disable Recommendations</h2>
          <p className="text-gray-500">Manage recommendations feature.</p>
        </div>
      </div>
    </AdminLayout>
  );
}
