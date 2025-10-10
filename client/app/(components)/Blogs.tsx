"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, X } from "lucide-react";

type Blog = {
  _id: string;
  title: string;
  content: string;
  image?: string | null;
  createdAt: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:1000";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visible, setVisible] = useState<number>(6); // initial items
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [selected, setSelected] = useState<Blog | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(`${API_BASE}/get-admin-blog`)
      .then((r) => {
        if (!r.ok) throw new Error(`Server ${r.status}`);
        return r.json();
      })
      .then((data: Blog[]) => {
        if (!mounted) return;
        setBlogs(data || []);
      })
      .catch((e) => {
        console.error(e);
        setErr("Unable to fetch blogs. Check your backend or network.");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return blogs;
    const q = query.trim().toLowerCase();
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(q) || b.content.toLowerCase().includes(q)
    );
  }, [blogs, query]);

  const showMore = () => setVisible((v) => v + 6);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-blue-500 bg-clip-text text-transparent">
            Insights & Stories
          </h1>
          <p className="text-gray-500 mt-3">
            Deep dives, tutorials and notes from the portfolio — updated
            regularly.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or content..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
                aria-label="Search blogs"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-2xl shadow-md p-4 h-72"
              >
                <div className="bg-gray-200 h-36 rounded-md mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        )}

        {err && <div className="text-center text-red-600 py-8">{err}</div>}

        {!loading && !err && filtered.length === 0 && (
          <div className="text-center text-gray-500 py-16">
            No posts found. Check back later ✍️
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, visible).map((blog, index) => (
              <motion.article
                key={blog._id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col hover:shadow-2xl transform hover:-translate-y-1 transition"
                onClick={() => setSelected(blog)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelected(blog);
                }}
              >
                <div className="h-48 w-full bg-gray-100 overflow-hidden">
                  {blog.image ? (
                    // image from backend usually stored like /uploads/xxx.jpg
                    // ensure your backend allows serving the path
                    <img
                      src={`${API_BASE}${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg
                        width="120"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-60"
                      >
                        <rect width="24" height="24" rx="4" fill="#EDEEF2" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-indigo-600 font-medium">Read →</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load more */}
        {filtered.length > visible && (
          <div className="mt-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={showMore}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
            >
              Load more
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal for selected blog */}
      <AnimatePresence>
        {selected && (
          <motion.dialog
            open
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              layout
              className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {selected.image && (
                <img
                  src={`${API_BASE}${selected.image}`}
                  alt={selected.title}
                  className="w-full max-h-80 object-cover"
                />
              )}

              <div className="p-6 md:p-8 max-h-[75vh] overflow-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {selected.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                  <Calendar size={16} />
                  <span>{new Date(selected.createdAt).toLocaleString()}</span>
                </div>

                <div className="prose max-w-none text-gray-700">
                  {/* content raw HTML or markdown? plain text for now */}
                  {selected.content.split("\n").map((p, i) => (
                    <p key={i} className="mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
