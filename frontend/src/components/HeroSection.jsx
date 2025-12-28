import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, User } from 'lucide-react';
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
      <div className="absolute inset-0 bg-[rgb(17,17,19)]">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 L90 10 M10 50 L50 50 L50 90" stroke="rgb(63,63,63)" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="3" fill="rgb(218,255,1)" opacity="0.5" />
                <circle cx="90" cy="10" r="3" fill="rgb(218,255,1)" opacity="0.5" />
                <circle cx="50" cy="50" r="3" fill="rgb(218,255,1)" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        {/* Gradient overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(218,255,1)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(127,74,142)] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={heroData.logo}
                alt="Quantum Edge Mastery"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-[0_0_30px_rgba(218,255,1,0.5)]"
              />
              <div className="absolute inset-0 bg-[rgb(218,255,1)] blur-3xl opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Brand Name */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wider">
            {heroData.brandName}
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(26,28,30)] border border-[rgb(218,255,1)]/30 mb-8">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full animate-pulse" />
            <span className="text-[rgb(218,255,1)] text-sm font-medium">
              {heroData.tagline} - Launch Date: February 1st, 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Markets,
            <br />
            <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">
              Transform Your Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto mb-10">
            {heroData.subtitle}
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <p className="text-[rgb(161,161,170)] mb-4 text-sm uppercase tracking-widest">
              {countdownData.title}
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center p-4 sm:p-6 bg-[rgb(26,28,30)] rounded-2xl border border-[rgb(63,63,63)] min-w-[70px] sm:min-w-[90px] transition-all hover:border-[rgb(218,255,1)] hover:shadow-[0_0_20px_rgba(218,255,1,0.2)]"
                >
                  <span className="text-2xl sm:text-4xl font-bold text-white">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm text-[rgb(161,161,170)] mt-1">
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
              className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:shadow-[0_0_30px_rgba(218,255,1,0.4)] group"
            >
              Join the Waiting List
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={onDemoView}
              variant="outline"
              className="border-2 border-[rgb(63,63,63)] text-white hover:border-[rgb(218,255,1)] hover:bg-[rgba(218,255,1,0.1)] px-8 py-6 text-lg rounded-xl transition-all group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Demo View
            </Button>
            <Button
              onClick={onMeetMentor}
              variant="ghost"
              className="text-[rgb(161,161,170)] hover:text-white hover:bg-[rgb(26,28,30)] px-8 py-6 text-lg rounded-xl transition-all"
            >
              <User className="mr-2 w-5 h-5" />
              Meet Your Mentor
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[rgb(63,63,63)] flex justify-center pt-2">
          <div className="w-1 h-3 bg-[rgb(218,255,1)] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
