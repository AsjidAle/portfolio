import React from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    
                    {/* Brand Name */}
                    <div className="mb-4 md:mb-0 text-xxl text-[#FFD700] font-black">
                        <Link href="/"> ASJID ALI</Link>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer Navigation">
                        <ul className="flex flex-wrap space-x-6">
                            <li><Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
                            <li><Link href="/#projects" className="hover:text-[#FFD700] transition-colors">Projects</Link></li>
                            <li><Link href="/#experience" className="hover:text-[#FFD700] transition-colors">Experience</Link></li>
                            <li><Link href="/#education" className="hover:text-[#FFD700] transition-colors">Education</Link></li>
                            <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://x.com/asjidale"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Asjid Ali on Twitter"
                            className="hover:text-[#FFD700] transition-colors text-2xl">
                            <FaTwitter />
                        </a>

                        <a href="https://www.linkedin.com/in/asjidali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with Asjid Ali on LinkedIn"
                            className="hover:text-[#FFD700] transition-colors text-2xl">
                            <FaLinkedin />
                        </a>

                        <a href="https://wa.me/923049043909"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Asjid Ali on WhatsApp"
                            className="hover:text-[#FFD700] transition-colors text-2xl">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Legal & Copyright */}
                <div className="text-center text-gray-400 text-sm mt-6">
                    {/* <nav aria-label="Legal Navigation">
                        <ul className="flex flex-wrap justify-center space-x-4">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
                        </ul>
                    </nav> */}
                    <p className="mt-4">
                        © {currentYear} Asjid Ali | IT Consultancy & Digital Solutions<br />
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
