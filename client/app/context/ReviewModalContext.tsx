// contexts/ReviewModalContext.tsx
"use client";
import React, { createContext, useState, useContext } from "react";
import api from "../api.js";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewData {
  _id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  projectTitle?: string;
  projectLink?: string;
  createdAt?: string;
  media?: string[]; // <— added
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
      const { data } = await api.get(`/review/${id}`);
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

      <AnimatePresence>
        {isOpen && review && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={close}></div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-lg sm:p-8"
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {review.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {review.designation} at {review.company}
              </p>

              {review.projectTitle && (
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  Project: {review.projectTitle}{" "}
                  {review.projectLink && (
                    <a
                      href={review.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      View
                    </a>
                  )}
                </p>
              )}

              {/* Media gallery (images/videos) */}
              {Array.isArray(review.media) && review.media.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {review.media.map((m, i) =>
                    /\.(mp4|webm)$/i.test(m) ? (
                      <video
                        key={i}
                        src={m}
                        controls
                        className="w-full rounded-lg"
                      />
                    ) : (
                      <img
                        key={i}
                        src={`http://localhost:1000${m}`}
                        alt={`media-${i}`}
                        className="w-full rounded-lg object-cover"
                      />
                    )
                  )}
                </div>
              )}

              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {review.feedback}
              </p>

              {review.createdAt && (
                <p className="text-xs text-gray-400 mt-3">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={close}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                           text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReviewModalContext.Provider>
  );
};
