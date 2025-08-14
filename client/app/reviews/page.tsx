// app/reviews/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import api from "../api"; // adjust path if needed
import Link from "next/link";

export default function AllReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  async function load(p = 1) {
    try {
      setLoading(true);
      const res = await api.get("/getreviews", {
        params: { page: p, limit, excludePinned: true },
      });
      const { reviews: data, total } = res.data;
      if (p === 1) setReviews(data);
      else setReviews((s) => [...s, ...data]);
      const fetched = (p - 1) * limit + data.length;
      setHasMore(fetched < total);
      setPage(p + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(1);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">All Reviews</h1>
      <div className="space-y-4">
        {reviews.map((r) => (
          <article key={r._id} className="p-4 border rounded">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">{r.name}</h3>
                <p className="text-sm text-gray-500">
                  {r.designation} — {r.company}
                </p>
              </div>
              <div>
                <Link href={`/reviews/${r._id}`} className="text-blue-600">
                  Read
                </Link>
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              {r.feedback.length > 200
                ? r.feedback.slice(0, 200) + "..."
                : r.feedback}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        {hasMore ? (
          <button
            onClick={() => load(page)}
            className="px-4 py-2 border rounded"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        ) : (
          <div className="text-gray-500">No more reviews</div>
        )}
      </div>
    </div>
  );
}
