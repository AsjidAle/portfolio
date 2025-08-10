"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaReact, FaLaravel, FaNode, FaDocker, FaGitAlt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { SiExpress, SiMongodb, SiKubernetes, SiJenkins, SiSonarqube, SiTerraform, SiTypescript, SiJavascript, SiTailwindcss, SiApachekafka } from "react-icons/si";

const Projects: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const images = [...Array(20)].map((_, index) => `/a${index + 1}.png`);

    const handleImageClick = (index: number) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const nextImage = () => {
        if (currentIndex !== null && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(images[currentIndex + 1]);
        }
    };

    const prevImage = () => {
        if (currentIndex !== null && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(images[currentIndex - 1]);
        }
    };

    return (
        <>
            <div className="bg-white min-h-screen bg-gray-200h-full py-6 sm:py-8 lg:py-4 scroll-mt-20" id='projects'>
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <section className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.7)' }}>
                            Some works carried out
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4 lg:px-16">
                            {images.map((src, index) => (
                                <div key={index} className="border border-lg-5xl border-gray-600 overflow-hidden shadow-lg cursor-pointer" onClick={() => handleImageClick(index)}>
                                    <Image src={src} alt={`Project ${index + 1}`} width={300} height={200} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                        <button className="absolute top-4 right-4 text-white text-3xl bg-gray-500 w-10" onClick={closeModal}>×</button>
                        <button className="absolute left-4 text-white text-3xl w-10 bg-gray-600 h-14" onClick={prevImage}>&lt;</button>
                        <Image src={selectedImage} alt="Selected" width={900} height={600} className="rounded-lg" />
                        <button className="absolute right-4 text-white text-3xl w-10 bg-gray-600 h-14" onClick={nextImage}>&gt;</button>
                    </div>
                )}
            </div>

            <section className='pb-9 px-9 bg-white text-black scroll-mt-20' id='experience'>

                <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
                    <h2 className="text-center text-2xl pt-10 mb-4 font-serif font-bold text-gray-800 lg:text-3xl" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.7)' }}>
                        Experience and services
                    </h2>
                </div>

                <p className='text-center'>
                    I have been part of the Stack System Technologies team
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8">
                    <div>
                        <h2 className='my-5 font-serif' style={{ fontSize: '2rem' }}>Web Development</h2>
                        <table className="min-w-full text-left">
                            <tbody className='space-y-10'>
                                <tr>
                                    <td><div className="flex items-center gap-2"><SiJavascript className='text-yellow-500' /> JavaScript</div></td>
                                    <td><div className="flex items-center gap-2"><SiTypescript className='text-blue-600' /> TypeScript</div></td>
                                    <td><div className="flex items-center gap-2"><FaReact className='text-purple-800' /> React</div></td>
                                </tr>

                                <tr>
                                    <td><div className="flex items-center gap-2"><FaNode /> Node.Js</div></td>
                                    <td><div className="flex items-center gap-2"><SiMongodb className='text-green-500' /> MongoDB</div></td>
                                    <td><div className="flex items-center gap-2"><FaDatabase className='text-orange-600' /> MySQL</div></td>
                                </tr>
                                <tr>
                                    <td><div className="flex items-center gap-2"><FaDocker className='text-blue-600' /> Docker</div></td>
                                    <td><div className="flex items-center gap-2"><SiKubernetes className='text-blue-800' /> Kubernetes</div></td>
                                    <td><div className="flex items-center gap-2"><SiJenkins /> Jenkins</div></td>
                                </tr>
                                <tr>
                                    <td><div className="flex items-center gap-2"><SiSonarqube className='text-blue-400' /> SonarQube</div></td>
                                    <td><div className="flex items-center gap-2"><SiTerraform className='text-purple-800' /> Terraform</div></td>
                                    <td><div className="flex items-center gap-2"><TbSeo /> SEO</div></td>
                                </tr>
                                <tr>
                                    <td><div className="flex items-center gap-2"><IoRocketSharp /> Optimization</div></td>
                                    <td><div className="flex items-center gap-2"><FaLaravel className='text-red-700' /> Laravel</div></td>
                                    <td><div className="flex items-center gap-2"><SiExpress className='text-green-800' /> Express</div></td>
                                </tr>
                                <tr>
                                    <td><div className="flex items-center gap-2"><FaGitAlt className='text-red-700' /> Git</div></td>
                                    <td><div className="flex items-center gap-2"><DiRedis className='text-red-700' /> Redis</div></td>
                                    <td><div className="flex items-center gap-2"><SiApachekafka /> Kafka</div></td>
                                </tr>
                                <tr>
                                    <td><div className="flex items-center gap-2"><FaBootstrap className='text-purple-600' /> Bootstrap</div></td>
                                    <td><div className="flex items-center gap-2"><SiTailwindcss className='text-blue-400' /> Tailwind CSS</div></td>
                                    <td><div className="flex items-center gap-2"><RiNextjsFill /> Next.Js</div></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <h2 className='my-5 font-serif' style={{ fontSize: '2rem' }}>Audit</h2>
                        <ul className='list-disc pl-5'>
                            <li><strong>Usability:</strong> Ensuring websites are intuitive and easy to navigate for a seamless user experience.</li>
                            <li><strong>Accessibility:</strong> Complying with Web Content Accessibility Guidelines (WCAG) to make websites accessible for users with disabilities, avoiding potential legal and usability issues.</li>
                            <li><strong>Performance:</strong> Optimizing website speed, reducing load times, and enhancing responsiveness to improve user retention and SEO rankings.</li>
                            <li><strong>Load Balancing:</strong> Distributing network traffic efficiently across multiple servers to prevent overload and ensure high availability.</li>
                            <li><strong>Resource Optimization:</strong> Minimizing server resource usage by optimizing images, scripts, and caching strategies to improve overall efficiency.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;