import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import { fastTrackData } from '../data/mock';

const FastTrackSection = () => {
  return (
    <section id="program" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(218,255,1)]/10 border border-[rgb(218,255,1)]/30 mb-6">
            <Zap className="w-4 h-4 text-[rgb(218,255,1)]" />
            <span className="text-[rgb(218,255,1)] text-sm font-medium">
              {fastTrackData.subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {fastTrackData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
            {fastTrackData.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgb(218,255,1)] via-[rgb(218,255,1)]/50 to-transparent lg:-translate-x-1/2" />

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
                    className={`inline-block bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-6 transition-all hover:border-[rgb(218,255,1)] hover:shadow-[0_0_30px_rgba(218,255,1,0.15)] group`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[rgb(218,255,1)] text-sm font-bold">
                        DAY {day.day}
                      </span>
                      <div className="h-px flex-1 bg-[rgb(63,63,63)] group-hover:bg-[rgb(218,255,1)]/30 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{day.title}</h3>
                    <p className="text-[rgb(161,161,170)]">{day.description}</p>
                  </div>
                </div>

                {/* Day Number Node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-[rgb(218,255,1)] flex items-center justify-center text-[rgb(17,17,19)] font-bold text-sm shadow-[0_0_20px_rgba(218,255,1,0.5)]">
                  {day.day}
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>

          {/* Completion Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-[rgb(26,28,30)] rounded-2xl border border-[rgb(218,255,1)] shadow-[0_0_30px_rgba(218,255,1,0.2)]">
              <CheckCircle className="w-6 h-6 text-[rgb(218,255,1)]" />
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
