import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className='flex w-full justify-center'>
            <Image
              className="dark:invert"
              src="/logo.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 shadow-md rounded-md">
            <p className="font-semibold pe-10">⚠️ Site Under Maintinance!</p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row bg-green-100 border-l-4 border-green-500 text-green-700 p-4 shadow-md rounded-md">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-400 dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://wa.me/923049043909"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Owner via WhatsApp
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
