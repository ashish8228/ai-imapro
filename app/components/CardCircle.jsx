// CardCircle.js
import React from 'react';

const cards = [
  { suit: '♦️', color: 'text-red-500', name: 'A' },
  { suit: '♠️', color: 'text-black', name: 'A' },
  { suit: '♥️', color: 'text-red-500', name: 'A' },
  { suit: '♣️', color: 'text-black', name: 'A' },
];

const CardCircle = () => {
  const positions = [
    'top-0 left-1/2 -translate-x-1/2',     // Top
    'top-1/2 right-0 -translate-y-1/2',    // Right
    'bottom-0 left-1/2 -translate-x-1/2',  // Bottom
    'top-1/2 left-0 -translate-y-1/2',     // Left
  ];

  return (
    <div className="relative w-64 h-64 mx-auto mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute ${positions[index]} w-20 h-28 bg-white border border-gray-300 rounded-md shadow-md flex flex-col items-center justify-center`}
        >
          <div className={`text-xl font-bold ${card.color}`}>{card.name}</div>
          <div className={`text-3xl ${card.color}`}>{card.suit}</div>
        </div>
      ))}
    </div>
  );
};

export default CardCircle;
