import React from 'react';
import { Clock, Users, Zap, TrendingUp, BookOpen, Copy } from 'lucide-react';
import { advantagesData } from '../data/mock';

const iconMap = {
  Clock: Clock,
  Users: Users,
  Zap: Zap,
  TrendingUp: TrendingUp,
  BookOpen: BookOpen,
  Copy: Copy,
};

const AdvantagesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {advantagesData.title}
          </h2>
          <p className="text-lg font-medium text-[#70DB3E]">
            {advantagesData.subtitle}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagesData.advantages.map((advantage, index) => {
            const IconComponent = iconMap[advantage.icon] || Zap;
            return (
              <div
                key={advantage.id}
                className="group relative bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_50px_rgba(112,219,62,0.15)] overflow-hidden hover:-translate-y-2 cursor-pointer"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#70DB3E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70DB3E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-[#70DB3E]/10 flex items-center justify-center mb-6 group-hover:bg-[#70DB3E]/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-[#70DB3E] group-hover:drop-shadow-[0_0_10px_rgba(112,219,62,0.8)]" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-[#70DB3E] transition-colors duration-300">{advantage.title}</h3>
                <p className="relative text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Corner glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#70DB3E] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
