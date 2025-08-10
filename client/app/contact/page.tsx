"use client";

import React, { useState } from "react";
import { useTransition } from "react";
// import { Spotlight } from "../(components)/ui/Spotlight";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import api from "../api";
export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const [isPending, startTransition] = useTransition();
  // const [status, setStatus] = useState("");

  const validateField = (name: string, value: string): boolean => {
    if (name === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value.trim() !== "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: !validateField("firstName", formData.firstName),
      lastName: !validateField("lastName", formData.lastName),
      email: !validateField("email", formData.email),
      message: !validateField("message", formData.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    // setStatus("Sending...");

    const formEncodedData = new URLSearchParams();
    Object.keys(formData).forEach((key) => {
      formEncodedData.append(key, formData[key as keyof typeof formData]);
    });

    startTransition(async () => {
      // const res = await fetch("https://formsubmit.co/asjidale@gmail.com", {
      const res = await api.post("http://localhost:1000/contact", {
        formEncodedData,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      if (res.status === 201 || res.status === 200) {
        toast.success("Message sent successfull1");
      } else {
        toast.error("Failed to send message.");
      }
    });
  };

  return (
    <div className="flex items-center relative overflow-hidden min-h-screen bg-black justify-center px-4 ">
      {/* Your contact form or content here */}

      {/* <Spotlight
        className="-top-40 left-6 md:-top-20 md:left-60"
        fill="black"
      /> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" backdrop-blur-md relative z-10 p-12 rounded-2xl shadow-2xl max-w-4xl w-full border border-white/10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
        >
          Contact Us
        </motion.h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["firstName", "lastName"] as Array<keyof typeof formData>).map(
              (field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: field === "firstName" ? 0.4 : 0.5 }}
                >
                  <label className="block text-white mb-2">
                    {field === "firstName" ? "First Name" : "Last Name"}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-0 border-b-2 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 py-2 ${
                      errors[field] ? "border-red-500" : ""
                    }`}
                    placeholder={field === "firstName" ? "John" : "Doe"}
                    required
                  />
                </motion.div>
              )
            )}
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-white mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-transparent border-0 border-b-2 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 py-2 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="john@example.com"
              required
            />
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-white mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-transparent border-0 border-b-2 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 py-2 ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={4}
              placeholder="Type your message..."
              required
            ></textarea>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white px-8 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Submit"}
            </button>
          </motion.div>
        </form>

        {status && (
          <motion.p
            className="text-center mt-6 text-white text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";

// interface ContactFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }

// export default function ContactPage() {
//   const [form, setForm] = useState<ContactFormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [resMsg, setResMsg] = useState("");

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResMsg("");

//     try {
//       const res = await fetch("http://localhost:1000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || "Something went wrong");

//       setResMsg("✅ Message sent successfully!");
//       setForm({ firstName: "", lastName: "", email: "", message: "" });
//     } catch (err: any) {
//       setResMsg("❌ " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="firstName"
//           placeholder="First Name"
//           value={form.firstName}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
//         />
//         <input
//           name="lastName"
//           placeholder="Last Name"
//           value={form.lastName}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows={4}
//           value={form.message}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//         {resMsg && <p className="text-center mt-2">{resMsg}</p>}
//       </form>
//     </div>
//   );
// }
