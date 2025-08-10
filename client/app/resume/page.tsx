"use client";
// components/ResumePage.jsx
import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Asjid Ali</h1>
          <p className="text-lg text-gray-600">Software Engineer | Full Stack Developer</p>
          <p className="text-sm text-gray-500">
            Pakpattan District, Punjab, Pakistan | asjidali.com | linkedin.com/in/asjidali
          </p>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-3">Summary</h2>
          <p className="text-gray-700">
            Software Engineer with 5+ years of experience delivering 180+ projects with a 99.23% client satisfaction rate. Expertise in full-stack development (React.js, Next.js, Laravel), DevOps (Docker, Kubernetes, Jenkins), and building scalable, high-performance web solutions.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-3">Professional Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Senior Software Engineer</h3>
              <p className="text-gray-600">Stack System Technologies | Jul 2024 - Present | Remote</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Designed innovative systems using React.js and Next.js.</li>
                <li>Upgraded solutions for enhanced performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Software Engineer</h3>
              <p className="text-gray-600">Stack System Technologies | Jan 2023 - Jun 2024 | Remote</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Developed full-stack solutions with Laravel and React, improving response time by 30%.</li>
                <li>Managed production deployments and optimized APIs.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">DevOps Engineer</h3>
              <p className="text-gray-600">FastDev Labs | Aug 2021 - Mar 2024 | Remote</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Implemented CI/CD pipelines with Jenkins, reducing deployment times by 40%.</li>
                <li>Migrated applications to Kubernetes, cutting costs by 25%.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Freelance Full Stack Developer</h3>
              <p className="text-gray-600">Upwork | Apr 2024 - Present | Remote</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Built RESTful APIs and full-stack solutions for diverse clients.</li>
                <li>Integrated AWS and Kubernetes for scalable deployments.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Teacher Assistant</h3>
              <p className="text-gray-600">University of Management and Technology - UMT | May 2024 - Nov 2024 | Remote</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Improved student performance by 15% through innovative teaching methods.</li>
                <li>Implemented a digital feedback system for better communication.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-3">Education</h2>
          <p className="text-gray-700">
            Bachelor of Science in Computer Science<br />
            Government College University, Faisalabad | Feb 2021 - Feb 2025
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-3">Skills</h2>
          <p className="text-gray-700">
            React.js, Next.js, Laravel, Node.js, DevOps, Docker, Kubernetes, Jenkins, AWS, Terraform, Full-Stack Development, REST APIs, GraphQL, Python
          </p>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;