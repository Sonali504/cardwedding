'use client';

import { useState } from 'react';

const cardTemplates = [
  {
    id: 1,
    name: 'Elegant Rose',
    image: '/templates/elegant-rose.jpg',
  },
  {
    id: 2,
    name: 'Classic Gold',
    image: '/templates/classic-gold.jpg',
  },
  {
    id: 3,
    name: 'Minimal White',
    image: '/templates/minimal-white.jpg',
  },
  {
    id: 4,
    name: 'Floral Charm',
    image: '/templates/floral-charm.jpg',
  },
  {
    id: 5,
    name: 'Elegant Rose',
    image: '/templates/elegant-rose.jpg',
  },
  {
    id: 6,
    name: 'Classic Gold',
    image: '/templates/classic-gold.jpg',
  },
  {
    id: 7,
    name: 'Minimal White',
    image: '/templates/minimal-white.jpg',
  },
  {
    id: 8,
    name: 'Floral Charm',
    image: '/templates/floral-charm.jpg',
  },
  {
    id: 9,
    name: 'Elegant Rose',
    image: '/templates/elegant-rose.jpg',
  },
  {
    id: 10,
    name: 'Classic Gold',
    image: '/templates/classic-gold.jpg',
  },
  {
    id: 11,
    name: 'Minimal White',
    image: '/templates/minimal-white.jpg',
  },
  {
    id: 12,
    name: 'Floral Charm',
    image: '/templates/floral-charm.jpg',
  },
  // Add more as needed
];

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cardTemplates.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen px-6 py-10 bg-[#fefcfb]">
      <h1 className="text-3xl font-extrabold text-pink-600 text-center mb-8 uppercase itallic">
        Wedding Card Gallery
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-pink-300 rounded-full shadow-sm focus:outline-none"
        />
      </div>

      {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
                <div
                key={card.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-80 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-pink-700">
                    {card.name}
                    </h2>
                </div>
                </div>
            ))
            ) : (
            <p className="text-center col-span-full text-gray-500">No templates found.</p>
            )}
        </div>
    </main>
  );
}
