import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Herosection: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div
          className="absolute hidden sm:block md:top-20 sm:top-[8%] top-[10%] xl:top-40 
                   xl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] left-[10%] 
                   max-w-full max-h-[80vh] overflow-hidden"
        >
          <Image
            className="w-full h-auto"
            src="https://techakim.com/sam/tg/7268/li/imgs/2.png"
            alt="Image"
            width={1920}
            height={980}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center mt-10 sm:mt-0 text-white">
          <div className="w-full flex flex-col z-10">
            <h4 className="text-lg font-semibold text-white xl:text-2xl">Hey There</h4>
            <h1 className="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-2">
              {"I'm "}
              <span className="">Asjid Ali</span>
            </h1>
            {/* <h1 className="md:text-6xl sm:text-4xl text-3xl font-semibold font-serif">Abera</h1> */}
            <h4 className="text-[#FFD700] mt-4 lg:text-2xl xl:3xl font-[var(--font-poppins)]">--FullStack Developer</h4>

            <p className="lg:w-[70%] w-full text-white text-md mt-4 md:text-lg 2xl:text-2xl font-[var(--font-inter)]">Experienced full-stack developer with
              expertise in Laravel, MERN, MySQL, MongoDb, Kafka, Docker, Kubernetes, Terraform, CI/CD pipeline, Next.js, React Native, Flutter experience.</p>

            <Link href={'/contact'}>
              <button className="mt-6 px-4 py-2 text-lg lg:text-xl font-semibold text-white rounded-full 
                   w-[180px] 
                   bg-gradient-to-r from-[#FFA94D] to-[#FF6B6B] 
                   hover:from-[#FF512F] hover:to-[#DD2476] 
                   hover:scale-110 active:scale-95 transition-all duration-300 
                   shadow-lg shadow-[#FF6B6B]/50 
                   relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 
                   hover:before:opacity-100 hover:before:animate-pulse">
                Get In Touch
              </button>
            </Link>

          </div>

          <div
            className="w-full flex sm:flex-col justify-center mt-4 sm:mt-0 sm:gap-8 gap-2 bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">6</h2>
                <h2 className="text-[#FFD700] xl:text-6xl md:text-7xl sm:text-4xl text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-center">Years of Expireance</h4>
            </div>
            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">115</h2>
                <h2 className="text-[#FFD700] xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-center">Projects delivered</h4>
            </div>
            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">13</h2>
                <h2 className="text-[#FFD700] xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-center">SaaS</h4>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Herosection;