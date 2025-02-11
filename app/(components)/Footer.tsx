import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-6" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Branding with semantic heading */}
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="flex items-center" aria-label="Home - Asjid Ali IT Expert">
                            <Image
                                width={50}
                                height={160}
                                src={'/logo.png'}
                                alt="YourBrand Logo - Expert IT Services & Solutions"
                                className="h-12 w-auto"
                                priority
                                // It can be prioritized for later as at end of page
                            />
                            <span className="sr-only">ASJID ALI</span>
                        </Link>
                    </div>

                    {/* Navigation with semantic markup */}
                    <nav aria-label="Primary Navigation">
                        <ul className="flex flex-wrap space-x-6 mt-4 md:mt-0">
                            <li><Link href="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-400 transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-gray-400 transition-colors">Projects</Link></li>
                            <li><Link href="/services" className="hover:text-gray-400 transition-colors">Articles</Link></li>
                            <li><Link href="/services" className="hover:text-gray-400 transition-colors">IT Services & Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400 transition-colors">Get in Touch</Link></li>
                        </ul>
                    </nav>

                    {/* Social links with accessible labels */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://facebook.com/yourbrand"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow YourBrand on Facebook for IT Updates"
                            className="hover:text-gray-400 transition-colors">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/yourbrand"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow YourBrand on Twitter for Tech News"
                            className="hover:text-gray-400 transition-colors">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com/yourbrand"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow YourBrand on Instagram for Business Insights"
                            className="hover:text-gray-400 transition-colors">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Legal and secondary links */}
                <div className="text-center text-gray-400 text-sm mt-6">
                    <nav aria-label="Legal Navigation">
                        <ul className="flex flex-wrap justify-center space-x-4">
                            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a></li>
                        </ul>
                    </nav>
                    <p className="mt-4">
                        © {currentYear} YourBrand | Leading IT Consultancy & Digital Solutions<br />
                        Registered in XYZ Country | VAT Number: 123456789
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;