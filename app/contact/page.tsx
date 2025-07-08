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

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
    });

    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState("");

    const validateField = (name: string, value: string): boolean => {
        if (name === "email") {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        return value.trim() !== "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        if (Object.values(newErrors).some(error => error)) return;

        setStatus("Sending...");

        const formEncodedData = new URLSearchParams();
        Object.keys(formData).forEach(key => {
            formEncodedData.append(key, formData[key as keyof typeof formData]);
        });

        startTransition(async () => {
            const res = await fetch("https://formsubmit.co/asjidale@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formEncodedData.toString(),
            });

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
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-8">
                        {(['firstName', 'lastName'] as Array<keyof typeof formData>).map((field) => (
                            <div key={field}>
                                <label className="block text-gray-700">
                                    {field === "firstName" ? "First Name" : "Last Name"} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className={`w-full p-4 border rounded-lg focus:outline-none text-gray-700 hover:border-blue-600 ${errors[field] ? "border-red-500" : "border-blue-600"}`}
                                    placeholder={field === "firstName" ? "John" : "Doe"}
                                    required
                                />
                            </div>
                        ))}
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
                            className={`w-full p-4 border rounded-lg text-gray-700 focus:outline-none hover:border-blue-600 ${errors.email ? "border-red-500" : "border-blue-600"}`}
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
                            className={`w-full p-4 border rounded-lg text-gray-700 focus:outline-none hover:border-blue-600 ${errors.message ? "border-red-500" : "border-blue-600"}`}
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
