import React from 'react';
import { Quote, Star } from 'lucide-react';
import { mentorData } from '../data/mock';

const MentorSection = () => {
  return (
    <section id="mentor" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Your Mentor
          </h2>
          <p className="text-gray-400 text-lg">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mentor Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#70DB3E]/20 rounded-3xl blur-[100px] group-hover:blur-[120px] transition-all duration-500" />
            <div className="relative bg-[#111111] rounded-3xl p-2 border border-[#1a1a1a] group-hover:border-[#70DB3E]/30 transition-all duration-500">
              <img
                src={mentorData.image}
                alt={mentorData.name}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-4 gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl p-4 border border-[#1a1a1a]">
                  {mentorData.stats.map((stat, index) => (
                    <div key={index} className="text-center group/stat cursor-pointer">
                      <p className="text-[#70DB3E] text-xl font-bold group-hover/stat:scale-110 transition-transform duration-300">{stat.value}</p>
                      <p className="text-gray-500 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-gray-400 text-sm ml-2">Top Rated Mentor</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {mentorData.name}
            </h3>
            <p className="text-lg font-medium mb-6 text-[#70DB3E]">
              {mentorData.title}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {mentorData.bio}
            </p>

            {/* Quote */}
            <div className="relative bg-[#111111] rounded-2xl p-6 border border-[#1a1a1a] hover:border-[#70DB3E]/30 transition-all duration-500 group cursor-pointer">
              <Quote className="absolute -top-3 left-6 w-8 h-8 text-[#70DB3E] fill-[#70DB3E]/20" />
              <p className="text-white italic text-lg pl-4 group-hover:text-[#70DB3E]/90 transition-colors duration-300">
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
