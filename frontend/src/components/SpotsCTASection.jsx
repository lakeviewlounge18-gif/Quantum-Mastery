import React, { useState } from 'react';
import { Flame, ArrowRight, BookOpen, Gift, Users } from 'lucide-react';
import { Button } from './ui/button';
import { spotsClaimed } from '../data/mock';

const SpotsCTASection = ({ onJoinWaitlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const progressPercentage = (spotsClaimed.claimed / spotsClaimed.total) * 100;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-[#70DB3E] rounded-full blur-[250px] opacity-10 animate-pulse" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative bg-[#111111] border-2 border-[#70DB3E]/50 rounded-3xl p-8 sm:p-12 overflow-hidden transition-all duration-500 hover:border-[#70DB3E] hover:shadow-[0_0_80px_rgba(112,219,62,0.2)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[#70DB3E]/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
          
          {/* Animated border shine */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute -top-[200%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-[#70DB3E]/20 to-transparent rotate-45 animate-shine" />
          </div>

          <div className="relative z-10">
            {/* Discount Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#70DB3E] text-black font-bold shadow-[0_0_30px_rgba(112,219,62,0.5)] hover:shadow-[0_0_50px_rgba(112,219,62,0.7)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <Flame className="w-5 h-5 animate-pulse" />
                <span className="text-lg">{spotsClaimed.discount}</span>
                <span>Early Bird</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] border-2 border-[#70DB3E]/50 text-[#70DB3E] font-bold hover:bg-[#70DB3E]/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <Users className="w-5 h-5" />
                <span>Refer 5 = {spotsClaimed.affiliateDiscount}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              {spotsClaimed.title}
            </h2>
            <p className="text-gray-300 text-lg text-center mb-2">
              {spotsClaimed.subtitle}
            </p>
            
            {/* Ebook Bonus */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20 transition-all duration-300 cursor-pointer">
                <BookOpen className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">{spotsClaimed.affiliateBonus}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-400">
                  {spotsClaimed.claimed} of {spotsClaimed.total} spots claimed
                </span>
                <span className="text-[#70DB3E] font-semibold">
                  {spotsClaimed.total - spotsClaimed.claimed} remaining
                </span>
              </div>
              <div className="relative h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[#70DB3E] rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(112,219,62,0.5)]"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-[#70DB3E] rounded-full animate-pulse opacity-50"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Urgency Text */}
            <p className="text-[#70DB3E] text-center font-semibold mb-8 animate-pulse">
              {spotsClaimed.urgencyText}
            </p>

            {/* Pricing Breakdown */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-[#0a0a0a] rounded-xl p-4 text-center border border-[#1a1a1a] hover:border-[#70DB3E]/30 transition-all duration-300 cursor-pointer">
                <p className="text-gray-500 text-sm mb-1">Standard Price</p>
                <p className="text-white text-xl font-bold">25% OFF</p>
                <p className="text-[#70DB3E] text-sm">First 100 students</p>
              </div>
              <div className="bg-[#70DB3E]/10 rounded-xl p-4 text-center border border-[#70DB3E]/30 hover:border-[#70DB3E]/50 transition-all duration-300 cursor-pointer hover:bg-[#70DB3E]/20">
                <p className="text-gray-400 text-sm mb-1">Referral Bonus</p>
                <p className="text-white text-xl font-bold">50% OFF</p>
                <p className="text-[#70DB3E] text-sm">Refer 5 friends</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={onJoinWaitlist}
                className="bg-[#70DB3E] text-black hover:bg-[#5BC236] font-bold px-12 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(112,219,62,0.6)] hover:-translate-y-1 group"
              >
                Secure Your Spot Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotsCTASection;
