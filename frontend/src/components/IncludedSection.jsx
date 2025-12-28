import React from 'react';
import { GraduationCap, Users, Infinity, Copy, FileText, Video, Trophy, BookOpen, Check } from 'lucide-react';
import { includedData } from '../data/mock';

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  Infinity: Infinity,
  Copy: Copy,
  FileText: FileText,
  Video: Video,
  Trophy: Trophy,
  BookOpen: BookOpen,
};

const IncludedSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {includedData.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {includedData.subtitle}
          </p>
        </div>

        {/* Included Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {includedData.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Check;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 bg-[#111111] border border-[#1a1a1a] rounded-2xl p-5 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_30px_rgba(112,219,62,0.1)] hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#70DB3E]/10 flex items-center justify-center group-hover:bg-[#70DB3E]/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-[#70DB3E]" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white mb-1 truncate group-hover:text-[#70DB3E] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">{item.description}</p>
                </div>

                {/* Check Badge */}
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-[#70DB3E]/20 flex items-center justify-center group-hover:bg-[#70DB3E]/30 transition-all duration-300">
                    <Check className="w-3 h-3 text-[#70DB3E]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-[#111111] rounded-2xl border border-[#1a1a1a] hover:border-[#70DB3E]/30 transition-all duration-300">
            <span className="text-gray-500">Total Value:</span>
            <span className="text-2xl font-bold text-gray-500 line-through">$2,997</span>
            <span className="text-3xl font-bold text-[#70DB3E] drop-shadow-[0_0_10px_rgba(112,219,62,0.5)]">$2,248</span>
            <span className="px-3 py-1 bg-[#70DB3E] text-black rounded-full text-sm font-bold">
              Save 25%
            </span>
          </div>
          <p className="mt-4 text-[#70DB3E] text-sm font-medium">
            Refer 5 friends to get 50% OFF + Free Ebook!
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
