"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold">
          Trusted by 10,000+ Drivers
        </span>
        <h1 className="text-5xl md:text-7xl font-black mt-6 mb-6 leading-tight">
          Find a <span className="text-purple-600">Safe Spot</span> <br /> For Your Car.
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Reserve secure parking in real-time. No more circling the block, no more security worries.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input 
            type="text" 
            placeholder="Search area (e.g. Kigali Heights)" 
            className="px-6 py-4 border-2 border-purple-100 rounded-xl outline-none focus:border-purple-600 w-full md:w-80 transition-all"
          />
          <button className="btn-purple text-lg">Search Now</button>
        </div>
      </motion.div>
    </section>
  );
}