import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import { fastTrackData } from '../data/mock';

const FastTrackSection = () => {
  return (
    <section id="program" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 mb-6 hover:bg-[#70DB3E]/20 transition-all duration-300">
            <Zap className="w-4 h-4 text-[#70DB3E]" />
            <span className="text-[#70DB3E] text-sm font-medium">
              {fastTrackData.subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {fastTrackData.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {fastTrackData.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#70DB3E] via-[#70DB3E]/50 to-transparent lg:-translate-x-1/2" />

          <div className="space-y-8">
            {fastTrackData.days.map((day, index) => (
              <div
                key={day.day}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Day Card */}
                <div
                  className={`flex-1 pl-12 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
                  }`}
                >
                  <div
                    className="group inline-block bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_40px_rgba(112,219,62,0.15)] hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#70DB3E] text-sm font-bold">
                        DAY {day.day}
                      </span>
                      <div className="h-px flex-1 bg-[#222222] group-hover:bg-[#70DB3E]/30 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#70DB3E] transition-colors duration-300">{day.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{day.description}</p>
                  </div>
                </div>

                {/* Day Number Node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-[#70DB3E] flex items-center justify-center text-black font-bold text-sm shadow-[0_0_25px_rgba(112,219,62,0.6)] hover:shadow-[0_0_35px_rgba(112,219,62,0.8)] transition-all duration-300 hover:scale-110">
                  {day.day}
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>

          {/* Completion Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#111111] rounded-2xl border border-[#70DB3E]/50 shadow-[0_0_40px_rgba(112,219,62,0.2)] hover:shadow-[0_0_60px_rgba(112,219,62,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CheckCircle className="w-6 h-6 text-[#70DB3E]" />
              <span className="text-white font-semibold">
                Become a Confident Trader in Just 7 Days
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastTrackSection;
