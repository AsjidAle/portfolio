import React from 'react'
import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <div className='py-20 bg-white'>
            <h2 className='text-center text-xxl text-blue-400'>Do you want to hire me or do you have any questions?</h2>
            <h4 className="text-center text-gray-700 mb-8 mt-5">Get in touch with me through the contact form or any of the other available ways</h4>
            <div className="flex items-center justify-center">
                <Link href="/contact">
                    <button className="text-160 border border-blue-400 px-12 py-5 hover:bg-blue-400 bg-blue-400 hover:brightness-100 rounded hover:text-white transition">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Contact;