import Image from "next/image";

// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#fefcfb] px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6">
          Wedding Card Generator
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Design and personalize beautiful wedding invitations in seconds — no design skills needed!
        </p>
        <Link href="/generator">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition duration-200">
            Create Your Card
          </button>
        </Link>
      </div>
    </main>
  );
}
