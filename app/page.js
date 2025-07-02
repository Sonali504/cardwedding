import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-screen bg-[#fefcfb] px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#7ca982] mb-6">
            Wedding Card Generator
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Design and personalize beautiful wedding invitations in seconds — no design skills needed!
          </p>
          <Link href="/generator">
            <button className="bg-[#7ca982] text-white px-6 py-3 rounded-full text-lg hover:bg-[#689c77] transition duration-200">
              Create Your Card
            </button>
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-[#f9f9f6] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#7ca982] mb-4">What Makes Us Special</h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            Your dream wedding card, made easy — with elegance and personalization at your fingertips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl text-[#7ca982]">🎨</span>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-1">Elegant Themes</h3>
                <p className="text-gray-600 text-sm">Choose from pastel, floral, gold, and more — tailor-made for every vibe.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl text-[#7ca982]">🖊️</span>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-1">Fully Customizable</h3>
                <p className="text-gray-600 text-sm">Edit names, family details, ceremonies, and dates exactly as you want.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl text-[#7ca982]">👁️</span>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-1">Live Preview</h3>
                <p className="text-gray-600 text-sm">Instantly view your card as you type — no waiting, no confusion.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <span className="text-3xl text-[#7ca982]">🖨️</span>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-1">Download Ready</h3>
                <p className="text-gray-600 text-sm">Export in high quality — perfect for printing or sharing online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-[#fefcfb] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7ca982] mb-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                question: "Is it free to use?",
                answer: "Yes! Our wedding card generator is completely free to use with unlimited previews and downloads.",
              },
              {
                question: "Can I print the card?",
                answer: "Absolutely. You can download your card as an image and print it at home or through a print service.",
              },
              {
                question: "How many designs are available?",
                answer: "Currently, we offer 6+ unique themes, and we are constantly adding more pastel, floral, and minimal designs.",
              },
              {
                question: "Can I add more events?",
                answer: "Yes, you can customize ceremonies like Haldi, Mehndi, Barat, and even add custom ones in the generator.",
              },
            ].map((item, index) => (
              <details key={index} className="border border-[#d6eadd] bg-white rounded-md p-4">
                <summary className="cursor-pointer text-lg font-medium text-[#4a4a4a] hover:text-[#7ca982]">
                  {item.question}
                </summary>
                <p className="text-gray-600 mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-[#fefcfb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#7ca982] mb-6">What Our Users Say</h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg">
          Real couples. Real stories. Real love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#d6eadd] rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-0 left-6 -mt-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="/templates/classic-gold.jpg"
                alt="Riya & Aman"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 mt-6 italic">
              “It was so easy to use! I got my dream card in 5 minutes.”
            </p>
            <div className="text-[#f4c150] mt-3">★★★★★</div>
            <h4 className="text-sm font-semibold text-[#4a4a4a] mt-2">Riya & Aman</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#d6eadd] rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-0 left-6 -mt-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="/templates/classic-gold.jpg"
                alt="Megha & Arjun"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 mt-6 italic">
              “I loved the pastel themes — so different from traditional invites!”
            </p>
            <div className="text-[#f4c150] mt-3">★★★★★</div>
            <h4 className="text-sm font-semibold text-[#4a4a4a] mt-2">Megha & Arjun</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-[#d6eadd] rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-0 left-6 -mt-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="/templates/classic-gold.jpg"
                alt="Simran & Dev"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 mt-6 italic">
              “We shared the card on WhatsApp and got amazing reactions. Love it!”
            </p>
            <div className="text-[#f4c150] mt-3">★★★★☆</div>
            <h4 className="text-sm font-semibold text-[#4a4a4a] mt-2">Simran & Dev</h4>
          </div>
        </div>
      </div>
    </section>


    </>
  );
}
