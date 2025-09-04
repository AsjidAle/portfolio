"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileImage, Loader2, Tag, Type, AlignLeft } from "lucide-react";
import AdminLayout from "../AdminLayout";

const AdminWriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("✅ Blog Published Successfully");
    }, 1500);
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center items-start w-full mt-8"
      >
        <div className="w-full max-w-3xl">
          {/* Page Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ✍️ Write a New Blog
            </h1>
            <p className="text-gray-500 mt-2">
              Share your thoughts, showcase projects, or publish updates
              directly on your portfolio.
            </p>
          </div>

          {/* Blog Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-8 space-y-8"
          >
            {/* Title */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Type className="w-4 h-4 text-indigo-500" />
                Blog Title
              </label>
              <input
                type="text"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <AlignLeft className="w-4 h-4 text-indigo-500" />
                Blog Content
              </label>
              <textarea
                placeholder="Write your blog content here..."
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                required
              />
            </div>

            {/* Tags */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Tag className="w-4 h-4 text-indigo-500" />
                Tags (comma separated)
              </label>
              <input
                type="text"
                placeholder="e.g. React, Next.js, Tailwind"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <FileImage className="w-4 h-4 text-indigo-500" />
                Featured Image
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100 transition">
                  <FileImage className="w-5 h-5 mr-2 text-indigo-600" />
                  <span className="text-sm text-indigo-700">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      setImage(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </label>
                {image && (
                  <span className="text-sm text-gray-700">{image.name}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 font-semibold transition"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "🚀 Publish Blog"
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminWriteBlog;
