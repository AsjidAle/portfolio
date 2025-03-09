"use client";
// components/CVPage.jsx
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const CVPage = () => {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: 'Asjid_Ali_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @media print {
          .no-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8" ref={pdfRef}>
        {/* Header */}
        <header className="text-center mb-10 no-break">
          <h1 className="text-4xl font-bold text-gray-900">Asjid Ali</h1>
          <p className="text-lg text-gray-600">Software Engineer</p>
          <p className="text-sm text-gray-500">
            Pakpattan District, Punjab, Pakistan | asjidali.com | linkedin.com/in/asjidali | Remote
          </p>
        </header>

        {/* About */}
        <section className="mb-8 no-break">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">About</h2>
          <p className="text-gray-700">
            With over 5 years of experience, I have delivered 180+ projects with a 99.23% client satisfaction rate, combining technical expertise and creativity to build seamless, high-performance web solutions. Specializing in frontend development, I design intuitive and visually engaging user experiences. My backend proficiency ensures scalable, efficient, and future-ready systems, while integrating DevOps practices like Docker, Kubernetes, and Jenkins for streamlined workflows and code quality with SonarQube. Driven by innovation and collaboration, I embrace challenges, contribute to open-source, and continuously refine my craft.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4 no-break">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Software Engineer",
                company: "Stack System Technologies",
                period: "Jul 2024 - Present",
                location: "Remote",
                details: [
                  "Designing and writing innovative systems, upgrading existing solutions.",
                  "Skills: React.js, Full-Stack Development, Laravel, DevOps, Next.js, GraphQL.",
                ],
              },
              {
                title: "Software Engineer",
                company: "Stack System Technologies",
                period: "Jan 2023 - Jun 2024",
                location: "Remote",
                details: [
                  "Developed full-stack solutions with Laravel and React, improving response time by 30%.",
                  "Managed production deployments and optimized APIs for scalability.",
                ],
              },
              {
                title: "DevOps Engineer",
                company: "Stack System Technologies",
                period: "Feb 2022 - Dec 2022",
                location: "Remote",
                details: [
                  "Implemented CI/CD pipelines with Jenkins, reducing deployment times by 40%.",
                  "Migrated applications to Docker and Kubernetes, cutting costs by 25%.",
                ],
              },
              {
                title: "Full-Stack Developer",
                company: "Stack System Technologies",
                period: "Jul 2020 - Feb 2022",
                location: "Remote",
                details: [
                  "Developed scalable web applications with a focus on performance.",
                  "Skills: React.js, Laravel, Node.js.",
                ],
              },
              {
                title: "Backend Developer",
                company: "Stack System Technologies",
                period: "Jul 2019 - Jul 2020",
                location: "Remote",
                details: [
                  "Built robust backend systems with optimized server-side logic.",
                  "Skills: Laravel, Node.js.",
                ],
              },
              {
                title: "Professional Freelancer",
                company: "Asjidale",
                period: "May 2024 - Present",
                location: "Remote",
                details: [
                  "Founded Asjidale, focusing on innovative SaaS products for accessibility and affordability.",
                  "Skills: Project Management, Terraform, AWS, Next.js, React Native.",
                ],
              },
              {
                title: "Software Engineer",
                company: "FastDev Labs",
                period: "Mar 2024 - Present",
                location: "Remote",
                details: [
                  "Developed client-specific web applications with React and Laravel.",
                  "Delivered an e-commerce platform with real-time inventory management.",
                ],
              },
              {
                title: "DevOps Engineer",
                company: "FastDev Labs",
                period: "Aug 2021 - Mar 2024",
                location: "Remote",
                details: [
                  "Designed CI/CD pipelines, enhancing software delivery processes.",
                  "Managed AWS infrastructure for scalability.",
                ],
              },
              {
                title: "Freelance Full Stack Developer",
                company: "Upwork",
                period: "Apr 2024 - Present",
                location: "Remote",
                details: [
                  "Built RESTful APIs and full-stack solutions for various clients.",
                  "Skills: React.js, AWS, Kubernetes, Python, Laravel.",
                ],
              },
              {
                title: "Full Stack Developer",
                company: "asjidali.com",
                period: "Oct 2018 - Present",
                location: "Remote",
                details: [
                  "Managed end-to-end development of web projects.",
                  "Skills: Production Deployment, E-Commerce, Server-Side Programming.",
                ],
              },
              {
                title: "Teacher Assistant",
                company: "University of Management and Technology - UMT",
                period: "May 2024 - Nov 2024",
                location: "Remote",
                details: [
                  "Assisted in preparing lecture materials and tutoring students.",
                  "Improved student performance by 15% through innovative teaching methods.",
                ],
              },
            ].map((job, index) => (
              <div key={index} className="no-break">
                <h3 className="text-xl font-medium text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company} | {job.period} | {job.location}</p>
                <ul className="list-disc pl-5 text-gray-700">
                  {job.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4 no-break">Education</h2>
          <div className="space-y-4">
            <div className="no-break">
              <h3 className="text-xl font-medium text-gray-900">Bachelor of Science - Computer Science</h3>
              <p className="text-gray-600">Government College University, Faisalabad | Feb 2021 - Feb 2025</p>
              <p className="text-gray-700">Deputy President of GC Tech Techtic, doubled membership and established industry partnerships.</p>
            </div>
            <div className="no-break">
              <h3 className="text-xl font-medium text-gray-900">Intermediate - Pre Medical</h3>
              <p className="text-gray-600">Punjab Group Of Colleges | Jun 2018 - Aug 2020</p>
              <p className="text-gray-700">Developed an interest in programming during pre-medical studies.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 no-break">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>DevOps: Docker, Kubernetes, Jenkins, AWS, Terraform, CI/CD</li>
            <li>Full-Stack Development: React.js, Next.js, Laravel, Node.js, Django</li>
            <li>Frontend: Tailwind CSS, HTML5, CSS, React Native</li>
            <li>Backend: REST APIs, GraphQL, Server-Side Programming, Express.js</li>
            <li>Cloud: AWS (EC2, S3, Lambda, CloudFormation), Google Cloud Platform</li>
            <li>Other: Git, Python, MongoDB, MySQL, PostgreSQL, Software as a Service (SaaS)</li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-8 no-break">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">Languages</h2>
          <p className="text-gray-700">English (Full Professional Proficiency), French (Limited Working Proficiency)</p>
        </section>

        {/* Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2 mb-4 no-break">Recommendations</h2>
          <div className="space-y-4">
            {[
              "Ali is a rare expert in both coding and cloud automation—truly outstanding! - Muhammad Faizan Nawazish",
              "An incredible guy who contributes high-quality, fast fixes. - Ashar Ali",
              "For someone so young, it’s an incredible quality. Highly recommend! - Muaaz Khalid",
              "His proactive attitude and professional curiosity make him stand out. - Alberto Gálvez Gálvez",
              "Fully optimized code, exceptional work quality - Recommended. - Abdul Rahman",
              "Entrega siempre rápida, trabajo de alta calidad, recomendado al 100%. - Faizan Ahmad",
            ].map((rec, index) => (
              <p key={index} className="text-gray-700 no-break">{rec}</p>
            ))}
          </div>
        </section>
      </div>
      {/* Download Button */}
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <button
          onClick={downloadPDF}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default CVPage;