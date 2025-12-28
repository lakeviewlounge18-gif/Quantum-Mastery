import React, { useState } from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
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
          <div className="absolute inset-0 bg-[rgb(218,255,1)] rounded-full blur-[200px] opacity-10 animate-pulse" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative bg-[rgb(26,28,30)] border-2 border-[rgb(218,255,1)] rounded-3xl p-8 sm:p-12 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[rgb(218,255,1)]/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
          
          {/* Animated border shine */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute -top-[200%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-[rgb(218,255,1)]/20 to-transparent rotate-45 animate-shine" />
          </div>

          <div className="relative z-10">
            {/* Discount Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(218,255,1)] text-[rgb(17,17,19)]">
                <Flame className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-lg">{spotsClaimed.discount}</span>
                <span className="font-medium">Early Bird Offer</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              {spotsClaimed.title}
            </h2>
            <p className="text-[rgb(218,218,218)] text-lg text-center mb-8">
              {spotsClaimed.subtitle}
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-[rgb(161,161,170)]">
                  {spotsClaimed.claimed} of {spotsClaimed.total} spots claimed
                </span>
                <span className="text-[rgb(218,255,1)] font-semibold">
                  {spotsClaimed.total - spotsClaimed.claimed} remaining
                </span>
              </div>
              <div className="relative h-4 bg-[rgb(38,40,42)] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] rounded-full animate-pulse opacity-50"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Urgency Text */}
            <p className="text-[rgb(218,255,1)] text-center font-semibold mb-8 animate-pulse">
              {spotsClaimed.urgencyText}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={onJoinWaitlist}
                className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-bold px-10 py-6 text-lg rounded-xl transition-all hover:shadow-[0_0_40px_rgba(218,255,1,0.5)] group"
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
