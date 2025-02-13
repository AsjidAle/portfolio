import React from 'react'
import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-xxl text-[#FFD700]'>Do you want to hire me or do you have any questions?</h2>
            <h4 className="text-center mb-8 mt-5">Get in touch with me through the contact form or any of the other available ways</h4>
            <div className="flex items-center justify-center">
                <Link href="/contact">
                    <button className="text-160 border border-[#FFD700] px-12 py-5 hover:bg-[#FFD7BF] bg-[#FFD700] hover:brightness-90 rounded hover:text-white transition">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Contact;