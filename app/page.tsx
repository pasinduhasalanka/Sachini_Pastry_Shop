'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50 p-6 text-center">
      
      {/* 1. හෙඩින් එක උඩ ඉඳන් පහලට ලස්සනට පා වෙන Animation එකක් */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-5xl font-extrabold text-amber-900 mb-6 drop-shadow-md"
      >
        🍰 Sachini Pastry Shop 🥐
      </motion.h1>

      {/* 2. අපේ ප්‍රධාන Animated Card එක */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05, rotate: 1 }} // Hover කරද්දී පොඩ්ඩක් ලොකු වෙලා ඇල වෙනවා
        whileTap={{ scale: 0.95 }} // Click කරද්දී ඔබෙනවා වගේ පේනවා
        className="max-w-md p-8 bg-white rounded-2xl shadow-xl border border-amber-100 cursor-pointer"
      >
        <span className="text-4xl">🍩</span>
        <h2 className="text-2xl font-bold text-amber-800 mt-4 mb-2">Today's Special</h2>
        <p className="text-amber-900/70">
          Freshly baked Chocolate Glazed Donuts with a touch of premium Ceylon cinnamon.
        </p>
        <button className="mt-6 px-6 py-2 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-colors">
          Order Now
        </button>
      </motion.div>

    </div>
  );
}