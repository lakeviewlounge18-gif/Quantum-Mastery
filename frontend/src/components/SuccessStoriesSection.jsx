import React from 'react';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { successStoriesData } from '../data/mock';

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {successStoriesData.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {successStoriesData.subtitle}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {successStoriesData.stories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_50px_rgba(112,219,62,0.15)] hover:-translate-y-2 cursor-pointer"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#70DB3E]/30 mb-6 group-hover:text-[#70DB3E]/50 transition-colors duration-300" />

              {/* Quote Text */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{story.quote}"
              </p>

              {/* Profit Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 mb-6 group-hover:bg-[#70DB3E]/20 transition-all duration-300">
                <TrendingUp className="w-4 h-4 text-[#70DB3E]" />
                <span className="text-[#70DB3E] font-bold">{story.profit}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1a1a1a] group-hover:border-[#70DB3E]/50 transition-colors duration-300"
                />
                <div>
                  <p className="text-white font-semibold">{story.name}</p>
                  <p className="text-gray-500 text-sm">{story.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              
              {/* Hover glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#70DB3E] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
