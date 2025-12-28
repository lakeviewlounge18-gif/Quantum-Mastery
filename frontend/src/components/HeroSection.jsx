import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, countdownData } from '../data/mock';

const HeroSection = ({ onJoinWaitlist, onDemoView, onMeetMentor }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(countdownData.targetDate);
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(112,219,62,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(112,219,62,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Gradient overlays - Reduced by 25% */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#70DB3E] rounded-full blur-[180px] opacity-[0.08]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#5BC236] rounded-full blur-[150px] opacity-[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#70DB3E] rounded-full blur-[220px] opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img
                src={heroData.logo}
                alt="Quantum Trading Mastery"
                className="w-56 h-56 sm:w-72 sm:h-72 object-contain drop-shadow-[0_0_35px_rgba(112,219,62,0.25)] transition-all duration-500 group-hover:drop-shadow-[0_0_50px_rgba(112,219,62,0.4)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#70DB3E] blur-[80px] opacity-[0.08]" />
            </div>
          </div>

          {/* Coming Soon Badge with Early Bird Offer */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 hover:bg-[#70DB3E]/15 transition-all duration-300 cursor-default">
              <span className="w-2 h-2 bg-[#70DB3E] rounded-full animate-pulse shadow-[0_0_8px_#70DB3E]" />
              <span className="text-[#70DB3E] text-sm font-semibold tracking-wide">
                Coming Soon - 25% Off Early Birds
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-white/80 text-sm font-medium">
                🇦🇺 {heroData.announcement}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Markets,
            <br />
            <span className="text-[#70DB3E] drop-shadow-[0_0_25px_rgba(112,219,62,0.4)]">
              Transform Your Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {heroData.subtitle}
          </p>

          {/* Countdown Timer */}
          <div className="mb-14">
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-[0.2em] font-medium">
              {countdownData.title}
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { value: timeLeft.days, label: 'Days', active: false },
                { value: timeLeft.hours, label: 'Hours', active: false },
                { value: timeLeft.minutes, label: 'Minutes', active: false },
                { value: timeLeft.seconds, label: 'Seconds', active: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`group flex flex-col items-center p-4 sm:p-6 rounded-2xl border min-w-[70px] sm:min-w-[100px] transition-all duration-300 hover:-translate-y-1 ${
                    item.active 
                      ? 'bg-[#70DB3E]/10 border-[#70DB3E]/50 shadow-[0_0_30px_rgba(112,219,62,0.2)]' 
                      : 'bg-[#111111] border-[#222222] hover:border-[#70DB3E]/30 hover:shadow-[0_0_20px_rgba(112,219,62,0.1)]'
                  }`}
                >
                  <span className={`text-2xl sm:text-4xl font-bold transition-colors ${
                    item.active ? 'text-[#70DB3E]' : 'text-white group-hover:text-[#70DB3E]'
                  }`}>
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className={`text-xs sm:text-sm mt-1 transition-colors ${
                    item.active ? 'text-[#70DB3E]/80' : 'text-gray-500 group-hover:text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={onJoinWaitlist}
              className="bg-[#70DB3E] text-black hover:bg-[#5BC236] font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(112,219,62,0.5)] hover:-translate-y-1 group"
            >
              Join the Waiting List
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={onDemoView}
              variant="outline"
              className="border-2 border-[#70DB3E] text-[#70DB3E] hover:bg-[#70DB3E]/10 px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,219,62,0.3)] hover:-translate-y-1 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Dashboard Demo
            </Button>
            <Button
              onClick={onMeetMentor}
              variant="ghost"
              className="text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/5 px-10 py-7 text-lg rounded-xl transition-all duration-300 group"
            >
              <GraduationCap className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Learn about 1:1 Mentorship
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#333333] flex justify-center pt-2 hover:border-[#70DB3E] transition-colors">
          <div className="w-1 h-3 bg-[#70DB3E] rounded-full animate-pulse shadow-[0_0_8px_#70DB3E]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
