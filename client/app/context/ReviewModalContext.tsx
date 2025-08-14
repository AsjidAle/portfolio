// contexts/ReviewModalContext.tsx
"use client";
import React, { createContext, useState, useContext } from "react";
import api from "../api.js"; // your axios instance

interface ReviewData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  projectTitle?: string;
  projectLink?: string;
  createdAt?: string;
}

interface ReviewModalContextType {
  open: (id: string) => void;
  close: () => void;
}

const ReviewModalContext = createContext<ReviewModalContextType | null>(null);

export const useReviewModal = () => {
  const ctx = useContext(ReviewModalContext);
  if (!ctx)
    throw new Error("useReviewModal must be used inside ReviewModalProvider");
  return ctx;
};

export const ReviewModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState<ReviewData | null>(null);

  const open = async (id: string) => {
    try {
      const { data } = await api.get(`/review/${id}`); // uses getReviewById
      setReview(data);
      setIsOpen(true);
    } catch (err) {
      console.error("Failed to fetch review:", err);
    }
  };

  const close = () => {
    setIsOpen(false);
    setReview(null);
  };

  return (
    <ReviewModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && review && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {review.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {review.designation} at {review.company}
            </p>
            {review.projectTitle && (
              <p className="text-sm text-blue-600 mb-2">
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
            <p className="text-gray-700 whitespace-pre-line">
              {review.feedback}
            </p>
            {review.createdAt && (
              <p className="text-xs text-gray-400 mt-3">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                onClick={close}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </ReviewModalContext.Provider>
  );
};
