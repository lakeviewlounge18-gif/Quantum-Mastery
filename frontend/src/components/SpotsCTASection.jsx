import React, { useState } from 'react';
import { Flame, ArrowRight, BookOpen, Gift, Users } from 'lucide-react';
import { Button } from './ui/button';
import { spotsClaimed } from '../data/mock';

const SpotsCTASection = ({ onJoinWaitlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const progressPercentage = (spotsClaimed.claimed / spotsClaimed.total) * 100;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(17,17,19)]" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] rounded-full blur-[200px] opacity-10 animate-pulse" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative bg-[rgb(26,28,30)] border-2 border-[rgb(0,212,255)] rounded-3xl p-8 sm:p-12 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[rgb(0,212,255)]/10 to-[rgb(186,85,211)]/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
          
          {/* Animated border shine */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute -top-[200%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-[rgb(0,212,255)]/20 to-transparent rotate-45 animate-shine" />
          </div>

          <div className="relative z-10">
            {/* Discount Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(0,212,255)] text-[rgb(17,17,19)]">
                <Flame className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-lg">{spotsClaimed.discount}</span>
                <span className="font-medium">Early Bird</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(186,85,211)] text-white">
                <Users className="w-5 h-5" />
                <span className="font-bold">Refer 5 = {spotsClaimed.affiliateDiscount}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              {spotsClaimed.title}
            </h2>
            <p className="text-[rgb(218,218,218)] text-lg text-center mb-2">
              {spotsClaimed.subtitle}
            </p>
            
            {/* Ebook Bonus */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                <BookOpen className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">{spotsClaimed.affiliateBonus}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-[rgb(161,161,170)]">
                  {spotsClaimed.claimed} of {spotsClaimed.total} spots claimed
                </span>
                <span className="text-[rgb(0,212,255)] font-semibold">
                  {spotsClaimed.total - spotsClaimed.claimed} remaining
                </span>
              </div>
              <div className="relative h-4 bg-[rgb(38,40,42)] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] rounded-full animate-pulse opacity-50"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Urgency Text */}
            <p className="text-[rgb(0,212,255)] text-center font-semibold mb-8 animate-pulse">
              {spotsClaimed.urgencyText}
            </p>

            {/* Pricing Breakdown */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-[rgb(38,40,42)] rounded-xl p-4 text-center border border-[rgb(63,63,63)]">
                <p className="text-[rgb(161,161,170)] text-sm mb-1">Standard Price</p>
                <p className="text-white text-xl font-bold">25% OFF</p>
                <p className="text-[rgb(0,212,255)] text-sm">First 100 students</p>
              </div>
              <div className="bg-gradient-to-br from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 rounded-xl p-4 text-center border border-[rgb(186,85,211)]/30">
                <p className="text-[rgb(161,161,170)] text-sm mb-1">Referral Bonus</p>
                <p className="text-white text-xl font-bold">50% OFF</p>
                <p className="text-[rgb(186,85,211)] text-sm">Refer 5 friends</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={onJoinWaitlist}
                className="bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] text-white hover:opacity-90 font-bold px-10 py-6 text-lg rounded-xl transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] group"
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
