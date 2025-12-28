import React from 'react';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { successStoriesData } from '../data/mock';

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {successStoriesData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg">
            {successStoriesData.subtitle}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {successStoriesData.stories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-8 transition-all duration-300 hover:border-[rgb(218,255,1)] hover:shadow-[0_0_40px_rgba(218,255,1,0.15)]"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[rgb(218,255,1)]/30 mb-6" />

              {/* Quote Text */}
              <p className="text-[rgb(218,218,218)] text-lg mb-8 leading-relaxed">
                "{story.quote}"
              </p>

              {/* Profit Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(218,255,1)]/10 border border-[rgb(218,255,1)]/30 mb-6">
                <TrendingUp className="w-4 h-4 text-[rgb(218,255,1)]" />
                <span className="text-[rgb(218,255,1)] font-bold">{story.profit}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[rgb(63,63,63)] group-hover:border-[rgb(218,255,1)] transition-colors"
                />
                <div>
                  <p className="text-white font-semibold">{story.name}</p>
                  <p className="text-[rgb(161,161,170)] text-sm">{story.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[rgb(218,255,1)] fill-[rgb(218,255,1)]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
