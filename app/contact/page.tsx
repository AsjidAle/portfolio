"use client";

import React, { useState } from "react";
import { useTransition } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setStatus("Sending...");

    //     startTransition(async () => {
    //         const res = await fetch("https://formsubmit.co/asjidale@gmail.com", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formData),
    //         });

    //         const data = await res.json();
    //         setStatus(data.success ? "Email sent successfully!" : "Failed to send email.");
    //     });
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
    
        const formEncodedData = new URLSearchParams();
        formEncodedData.append("firstName", formData.firstName);
        formEncodedData.append("lastName", formData.lastName);
        formEncodedData.append("email", formData.email);
        formEncodedData.append("message", formData.message);
    
        startTransition(async () => {
            const res = await fetch("https://formsubmit.co/asjidale@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formEncodedData.toString(),
            });
    
            const text = await res.text(); // Get response as text
            console.log(text); // Log response for debugging
    
            if (res.ok) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Failed to send message.");
            }
        });
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-12 rounded-lg shadow-sm max-w-4xl w-full">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block text-gray-700">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700] hover:border-[#FFD700]"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700] hover:border-[#FFD700]"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700] hover:border-[#FFD700]"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700] hover:border-[#FFD700]"
                            rows={5}
                            placeholder="Type your message..."
                            required
                        ></textarea>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-10 py-4 rounded-lg hover:bg-blue-600"
                            disabled={isPending}
                        >
                            {isPending ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </form>
                {status && <p className="text-center mt-4 text-lg font-semibold">{status}</p>}
            </div>
        </div>
    );
}