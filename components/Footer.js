// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#e8f2ec] text-[#4a4a4a] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-[#7ca982] mb-2">WeddingCard</h3>
          <p className="text-sm text-gray-600">Crafting love stories in every invite.</p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><a href="/" className="hover:text-[#7ca982]">Home</a></li>
            <li><a href="/gallery" className="hover:text-[#7ca982]">Gallery</a></li>
            <li><a href="/about" className="hover:text-[#7ca982]">About</a></li>
            <li><a href="/generator" className="hover:text-[#7ca982]">Create Card</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-2">
          <h4 className="font-semibold">Connect with us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-[#7ca982] text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">📌</a>
            <a href="mailto:contact@weddingcard.com">📧</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-[#cbe2d3] pt-4">
        &copy; {new Date().getFullYear()} WeddingCard. All rights reserved.
      </div>
    </footer>
  );
}
