import Image from "next/image";
import React from "react";

const PortfolioModule: React.FC = () => {
  // const caseStudies = Array.from({ length: 6 }, (_, i) => ({
  //   title: `Case Study ${i + 1}`,
  //   image: `https://via.placeholder.com/300?text=Case+Study+${i + 1}`,
  //   description: "This is a brief description of the case study. It highlights the main points and insights gained from the study."
  // }));

  return (
    <div className="container mx-auto p-6 bg-gray-200">
      <div className="grid grid-cols-3 gap-12">

        {/* Articles Section */}
        <div className="space-y-6 col-span-2">

          <div className="p-1 bg-white rounded-lg shadow">
            <a href="https://www.linkedin.com/pulse/achieving-availability-through-observability-metrics-asjid-ali-gfbff/?trackingId=jg3FXK2C9fu8ds9ESLARzg%3D%3D" target="blank">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D12AQHTf-bJ02436Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738570230382?e=1744848000&v=beta&t=iXMp7r_96RsPU8vQSu3LkpN-gcQmZS2yNvIMtJsS5FQ"
                alt={'article.title'}
                className="w-full h-40 object-cover rounded-t-lg"
                width={720}
                height={200}
                unoptimized
              />
            </a>
            <h3 className="mx-3 mt-3 text-lg font-semibold">Achieving Availability: Through Observability Metrics</h3>
            <p className="mt-2 text-gray-700 indent-5 text-justify mx-3">
              In today&apos;s digital landscape, ensuring 99.999% uptime, also known as five nines availability,
              has become a crucial goal for businesses. This level of uptime translates to just over five minutes
              of downtime per year, making it a critical benchmark for system reliability. Achieving this high
              availability requires a deep focus on observability metrics, which help monitor system performance,
              troubleshoot issues, and optimize infrastructure. Alongside modern deployment practices, such as
              containerization and CI/CD pipelines, observability tools play a vital role in maintaining
              infrastructure stability.
              <a href="https://www.linkedin.com/pulse/achieving-availability-through-observability-metrics-asjid-ali-gfbff/?trackingId=jg3FXK2C9fu8ds9ESLARzg%3D%3D" className="ml-2 text-blue-500 hover:underline" target="blank">See More</a></p>
          </div>

          <div className="p-1 bg-white rounded-lg shadow">
            <a href="https://www.linkedin.com/pulse/evolution-software-development-why-microservices-future-asjid-ali-pgdff/?trackingId=CWzgpTEyWyc0ZK4oSDSfmQ%3D%3D" target="blank">
              <Image
                src='https://media.licdn.com/dms/image/v2/D4D12AQEx1ROr0Ls_Fg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737051446917?e=1744848000&v=beta&t=1iKF8j4cKC9DN8WsaHo8sqyIvHyQvmLc5XlKbv420zs'
                alt={'Article Image'}
                className="w-full h-40 object-cover rounded-t-lg"
                width={720}
                height={200}
                unoptimized
              />
            </a>
            <h3 className="mt-4 text-lg font-semibold mx-3">The Evolution of Software Development: Why Microservices are the Future</h3>
            <p className="mt-2 text-gray-700 mx-3 indent-5 text-justify">
              In the fast-paced world of software development, where agility and innovation reign supreme, architecture plays a pivotal role in shaping success. Among the myriad architectural paradigms, microservices stand out as a transformative approach that is redefining how we build and scale systems. This week, let’s delve into why microservices are not just a trend but a necessity for modern development.
              A Brief Look Back: The Monolith Era
              For decades, monolithic architectures dominated the landscape. These large, tightly-coupled systems were sufficient when applications were smaller and user demands were predictable. However, as the digital world grew more complex, the limitations of monolithic systems became glaringly apparent.
              <a href="https://www.linkedin.com/pulse/evolution-software-development-why-microservices-future-asjid-ali-pgdff/?trackingId=CWzgpTEyWyc0ZK4oSDSfmQ%3D%3D" className="ml-2 text-blue-500 hover:underline" target="blank">See More</a></p>
          </div>


          <div className="p-1 bg-white rounded-lg shadow">
            <a href="https://www.linkedin.com/pulse/service-reliability-microservices-leveraging-level-objectives-ali-iuzgf/?trackingId=X0fFCf57mg2u3Vdra7Y9EA%3D%3D" target="blank">
              <Image
                src='https://media.licdn.com/dms/image/v2/D4D12AQGBHRflOYwbqw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737987963695?e=1744848000&v=beta&t=ATDZgulWpAn_o67-GyX5ZUVlJ9y0HQt5-T87hgPSjNw'
                alt={'Article Image'}
                className="w-full h-40 object-cover rounded-t-lg"
                width={720}
                height={200}
                unoptimized
              />
            </a>
            <h3 className="mx-3 mt-4 text-lg font-semibold">
              Service Reliability in Microservices: Leveraging (SLOs) for Enhanced User Experience
            </h3>
            <p className="mt-2 text-gray-700 text-justify mx-3 indent-5">
              Building upon our previous discussion on service reliability, it's essential to delve deeper into the concept of Service Level Objectives (SLOs) and their pivotal role in maintaining system performance and user satisfaction.
              SLOs are specific, measurable characteristics that define the desired performance and availability of a service. They serve as a bridge between the technical aspects of service reliability and the expectations of users and stakeholders. By setting clear SLOs,
              <a href="https://www.linkedin.com/pulse/service-reliability-microservices-leveraging-level-objectives-ali-iuzgf/?trackingId=X0fFCf57mg2u3Vdra7Y9EA%3D%3D" className="ml-2 text-blue-500 hover:underline" target="blank">See More</a></p>
          </div>

        </div>
        <div className="col flex items-center justify-center bg-white rounded-lg shadow-lg p-10">
          <div className="text-center">
            <h2 className="text-center text-2xl font-semibold text-blue-700 my-3">Case Studies!</h2>
            <h3 className="text-2xl font-semibold text-gray-800">Coming Soon</h3>
            <p className="mt-2 text-gray-600 text-lg">Exciting updates are on the way. Stay tuned!</p>
          </div>
        </div>

        {/* Case Studies Section */}
        {/* <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-0.5 bg-gray-200 rounded-t-lg shadow">
                <a href="https://www.linkedin.com/pulse/achieving-availability-through-observability-metrics-asjid-ali-gfbff/?trackingId=jg3FXK2C9fu8ds9ESLARzg%3D%3D">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D12AQHTf-bJ02436Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738570230382?e=1744848000&v=beta&t=iXMp7r_96RsPU8vQSu3LkpN-gcQmZS2yNvIMtJsS5FQ"
                    alt={study.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                    width={720}
                    height={160}
                    unoptimized
                  />
                </a>

                <h3 className="mt-4 ms-3 text-lg font-semibold">{study.title}</h3>
                <p className="mt-2 text-gray-700 indent-4 text-justify mx-2">{study.description}
                  <a href="https://www.linkedin.com/pulse/achieving-availability-through-observability-metrics-asjid-ali-gfbff/?trackingId=jg3FXK2C9fu8ds9ESLARzg%3D%3D"
                    className="ml-2 text-blue-500 hover:underline">See More</a></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <h2 className="text-lg font-semibold">More Case Studies</h2>
            <p className="text-gray-600">Discover successful projects and solutions.</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
              See More
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioModule;