import React from 'react';
import { Quote, Star } from 'lucide-react';
import { mentorData } from '../data/mock';

const MentorSection = () => {
  return (
    <section id="mentor" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Your Mentor
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mentor Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(127,74,142)]/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[rgb(26,28,30)] rounded-3xl p-2 border border-[rgb(63,63,63)]">
              <img
                src={mentorData.image}
                alt={mentorData.name}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-4 gap-2 bg-[rgb(17,17,19)]/90 backdrop-blur-sm rounded-xl p-4 border border-[rgb(63,63,63)]">
                  {mentorData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-[rgb(218,255,1)] text-xl font-bold">{stat.value}</p>
                      <p className="text-[rgb(161,161,170)] text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(218,255,1)]/10 border border-[rgb(218,255,1)]/30 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[rgb(218,255,1)] fill-[rgb(218,255,1)]" />
              ))}
              <span className="text-[rgb(161,161,170)] text-sm ml-2">Top Rated Mentor</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {mentorData.name}
            </h3>
            <p className="text-[rgb(218,255,1)] text-lg font-medium mb-6">
              {mentorData.title}
            </p>

            <p className="text-[rgb(218,218,218)] text-lg leading-relaxed mb-8">
              {mentorData.bio}
            </p>

            {/* Quote */}
            <div className="relative bg-[rgb(26,28,30)] rounded-2xl p-6 border border-[rgb(63,63,63)]">
              <Quote className="absolute -top-3 left-6 w-8 h-8 text-[rgb(218,255,1)] fill-[rgb(218,255,1)]" />
              <p className="text-white italic text-lg pl-4">
                "{mentorData.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
