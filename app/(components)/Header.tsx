"use client"
import React, { useState } from 'react'
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className='flex justify-between items-center'>
                        <Image width={100} height={100} src={'/logo.png'} alt='Logo' />
                        <div className="ms-2 text-2xl font-bold">Asjid Ali</div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">About</a>
                        <a href="#" className="hover:text-gray-400">Services</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? (
                            <i className="fas fa-times text-xl"></i>
                        ) : (
                            <i className="fas fa-bars text-xl"></i>
                        )}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <nav className="md:hidden flex flex-col space-y-4 py-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">About</a>
                        <a href="#" className="hover:text-gray-400">Services</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
