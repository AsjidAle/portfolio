import Image from 'next/image';

export default function TrainingSection() {
    return (
        <section className="bg-white py-12 px-6" id='experience'>
            <h2 className="text-3xl font-extrabold text-gray-700 mb-6 text-center" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.7)' }}>
                Professional Training & Certifications
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Training Details */}
                <div>
                    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
                        <li data-category="education">
                            <strong>Bachelor in Computer Science</strong> | GPA: <code>3.48/4.00</code>
                        </li>
                        <li data-category="honors">
                            <strong>Expertise</strong> in Data Structures & Algorithms (DSA)
                        </li>
                        <li data-category="honors">
                            <strong>Specialization</strong> in Query Optimization using NLP in DDBMS
                        </li>
                        <li data-category="certification">
                            <strong>AWS Certified Solutions Architect - Professional (SAP-C02) </strong>
                        </li>
                        <li data-category="certification">
                            <strong>Cloud Computing & Serverless Architecture</strong> Training
                        </li>
                        <li data-category="certification">
                            <strong>Advanced Software Design Patterns</strong> Certification
                        </li>
                        <li className="whitespace-nowrap" data-category="certification">
                            <strong>Infrastructure as a Service (IaaS) & Automation</strong> (AWS, Terraform)
                        </li>
                        <li data-category="language">
                            🌍 <strong>Advanced English</strong>
                        </li>
                    </ul>
                </div>
                {/* Profile Image */}
                <div className="flex justify-center">
                    <Image
                        src="/profile2.png"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className="mt-[6%] rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.7)] border border-3 aspect-square "
                        loading="lazy"
                        data-category="profile"
                    />

                </div>
            </div>
        </section>
    );
}