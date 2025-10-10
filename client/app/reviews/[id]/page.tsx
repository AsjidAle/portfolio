// app/reviews/[id]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "../../api";

export default function ReviewDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [review, setReview] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/review/${id}`);
        setReview(res.data.review);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  if (!review) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold">{review.name}</h1>
      <p className="text-sm text-gray-500">
        {review.designation} at {review.company}
      </p>
      {review.projectTitle && (
        <p className="mt-2 text-blue-600">
          Project: {review.projectTitle}{" "}
          {review.projectLink && (
            <a href={review.projectLink} target="_blank">
              View
            </a>
          )}
        </p>
      )}
      <div className="mt-4 text-gray-800">{review.feedback}</div>

      {review.media && review.media.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {review.media.map((m: any, i: number) => (
            <div key={i} className="border rounded p-2">
              {m.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.url}
                  alt={`media-${i}`}
                  className="w-full h-auto rounded"
                />
              ) : (
                <video controls src={m.url} className="w-full h-auto rounded" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-400">
        Posted: {new Date(review.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
