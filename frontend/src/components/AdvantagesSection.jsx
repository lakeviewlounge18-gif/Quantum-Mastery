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
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {advantagesData.title}
          </h2>
          <p className="text-[rgb(218,255,1)] text-lg font-medium">
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
                className="group relative bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-8 transition-all duration-300 hover:border-[rgb(218,255,1)] hover:shadow-[0_0_40px_rgba(218,255,1,0.15)] overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(218,255,1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[rgb(218,255,1)]/10 flex items-center justify-center mb-6 group-hover:bg-[rgb(218,255,1)]/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-[rgb(218,255,1)]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-[rgb(161,161,170)] leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[rgb(218,255,1)] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
