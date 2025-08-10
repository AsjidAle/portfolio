"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
    const pathname = usePathname(); // Get the current route

    const getLinkClass = (path: string) =>
        pathname === path ? 'text-blue-600' : 'text-gray-100 hover:text-blue-600';

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 lg:px-16 px-4 flex items-center justify-between py-4 shadow-lg bg-gray-800">
                {/* Logo */}
                <div className="font-black text-xxl text-blue-600">
                    <Link href="/"> ASJID ALI</Link>
                </div>

                {/* Navigation Tabs */}
                <nav className="flex-1 flex justify-end">
                    <ul className="flex items-center space-x-6 text-bold text-base xl:text-lg">
                        <li><Link className={getLinkClass('/')} href="/">Home</Link></li>
                        {/* Fix: Ensure these links go to "/" first */}
                        <li><Link className={getLinkClass('/education')} href="/#education">Education</Link></li>
                        <li><Link className={getLinkClass('/experience')} href="/#experience">Experience</Link></li>
                        <li><Link className={getLinkClass('/projects')} href="/#projects">Projects</Link></li>
                        <li><Link className={getLinkClass('/contact')} href="/contact">Contact</Link></li>
                    </ul>
                </nav>
                {/* Light/Dark Mode Toggle */}
                {/* <div>
                    <button className="p-2 rounded bg-gray-700 text-white hover:bg-gray-600">
                        🌙/☀️
                    </button>
                </div> */}
            </header>
            {/* Spacer to prevent content from being hidden behind the fixed header */}
            <div className="h-20"></div>
        </>
    );
};

export default Header;

