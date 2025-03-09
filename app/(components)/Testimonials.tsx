"use client";
import React, { useState, ChangeEvent } from 'react';

interface FormDataState {
  name: string;
  email: string;
  designation: string;
  company: string;
  feedback: string;
}

const Testimonials: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState<'review' | 'recommendation'>('review');
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    designation: '',
    company: '',
    feedback: ''
  });

  const openModal = (type: 'review' | 'recommendation') => {
    setFormType(type);
    setIsOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">

      <div className="text-center">
        <p className="text-lg font-medium text-gray-600 font-pj">
          Over 2,157 professionals have endorsed the quality of my services.
        </p>
        <h2 className="mt-4 text-5xl font-bold text-gray-900 sm:text-5xl xl:text-4xl font-pj">
          Recommendations by Trusted by Clients Worldwide
        </h2>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative mt-10 md:mt-24 md:order-2">
            <div
              className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6"
            >
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="mt-4">
                      <p className="text-lg font-medium text-gray-900">
                        <q>I was totally captivated by his work, and for someone so young, it’s an incredible
                          quality. He has a fantastic future ahead. Highly recommend!</q>
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-base font-bold text-gray-900">
                          Muaaz Khalid
                        </p>
                        {/* <p className="text-sm font-medium text-gray-500">
                          CEO, Company XYZ
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="mt-4">
                      <p className="text-lg font-medium text-gray-900">
                        <q>Ali is a rare expert in both coding and cloud automation—truly outstanding! He
                          consistently delivers exceptional solutions with expertise and precision. Super!</q>
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-base font-bold text-gray-900">
                          Faizan Nawazish
                        </p>
                        {/* <p className="text-sm font-medium text-gray-500">
                          CEO, Company XYZ
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="mt-4">
                      <p className="text-lg font-medium text-gray-900">
                        <q>
                          Always fast delivery, high quality work, attention to detail. I would hire him again. 100% recommended!
                        </q>
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-base font-bold text-gray-900">
                          Faizan Ahmad
                        </p>
                        {/* <p className="text-sm font-medium text-gray-500">
                          CEO, Company XYZ
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center md:mt-16 md:order-3">
          <a
            href="/recommendations"
            className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
          >
            Check all 37 recommendations!
          </a>
          <br />
        </div>

        <div className="mt-2 text-center">
          <button
            className="mt-7 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => openModal('review')}
          >
            Existing Client? Write me a Review!
          </button>
          <br />
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => openModal('recommendation')}
          >
            Existing Client? Want to Write a Recommendation!
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              {formType === 'review' ? 'Write a Review' : 'Write a Recommendation'}
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="designation"
              placeholder="Your Designation"
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              className="w-full p-2 border rounded mb-2"
              onChange={handleChange}
            />
            <textarea
              name="feedback"
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Write your feedback here..."
              onChange={handleChange}
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Testimonials;