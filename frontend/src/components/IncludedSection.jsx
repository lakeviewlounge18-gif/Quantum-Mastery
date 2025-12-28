import React from 'react';
import { GraduationCap, Users, Infinity, Copy, FileText, Video, Trophy, Check } from 'lucide-react';
import { includedData } from '../data/mock';

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  Infinity: Infinity,
  Copy: Copy,
  FileText: FileText,
  Video: Video,
  Trophy: Trophy,
};

const IncludedSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {includedData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg">
            {includedData.subtitle}
          </p>
        </div>

        {/* Included Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedData.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Check;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgb(218,255,1)]/50 hover:bg-[rgb(26,28,30)]/80"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgb(218,255,1)]/10 flex items-center justify-center group-hover:bg-[rgb(218,255,1)]/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-[rgb(218,255,1)]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[rgb(161,161,170)] text-sm">{item.description}</p>
                </div>

                {/* Check Badge */}
                <div className="flex-shrink-0 ml-auto">
                  <div className="w-6 h-6 rounded-full bg-[rgb(218,255,1)]/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[rgb(218,255,1)]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-[rgb(26,28,30)] rounded-2xl border border-[rgb(63,63,63)]">
            <span className="text-[rgb(161,161,170)]">Total Value:</span>
            <span className="text-2xl font-bold text-[rgb(161,161,170)] line-through">$2,997</span>
            <span className="text-3xl font-bold text-[rgb(218,255,1)]">$1,499</span>
            <span className="px-3 py-1 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] rounded-full text-sm font-bold">
              Save 50%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
