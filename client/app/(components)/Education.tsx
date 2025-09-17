import Image from "next/image";

export default function TrainingSection() {
  return (
    <section
      className="relative bg-white text-black py-16 px-6 scroll-mt-20"
      id="education"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
        Professional Training & Certifications
      </h2>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Training Details */}
        <div className="space-y-6">
          <div className="bg-white border  rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <ul className="space-y-4 text-lg leading-relaxed">
              <li>
                🎓 <strong>Bachelor in Computer Science</strong> | GPA:{" "}
                <code className="px-2 py-0.5 bg-gray-800 rounded text-blue-400">
                  3.48/4.00
                </code>
              </li>
              <li>
                ⚡ <strong>Expertise</strong> in Data Structures & Algorithms
              </li>
              <li>
                🧠 <strong>Specialization</strong> in Query Optimization (NLP in
                DDBMS)
              </li>
              <li>
                ☁️{" "}
                <strong>
                  AWS Certified Solutions Architect - Professional (SAP-C02)
                </strong>
              </li>
              <li>
                🌐 <strong>Cloud Computing & Serverless Architecture</strong>{" "}
                Training
              </li>
              <li>
                🏗️ <strong>Advanced Software Design Patterns</strong>{" "}
                Certification
              </li>
              <li>
                ⚙️{" "}
                <strong>Infrastructure as a Service (IaaS) & Automation</strong>{" "}
                (AWS, Terraform)
              </li>
              <li>
                🌍 <strong>Advanced English</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/profile2.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
