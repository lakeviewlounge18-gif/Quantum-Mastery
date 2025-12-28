import React from 'react';
import { BarChart3, Calendar, BookOpen, Wallet, Copy, Trophy, Users, Gift, Check } from 'lucide-react';
import { dashboardFeatures, calendarJournalData } from '../data/mock';

const iconMap = {
  BarChart3: BarChart3,
  Calendar: Calendar,
  BookOpen: BookOpen,
  Wallet: Wallet,
  Copy: Copy,
  Trophy: Trophy,
  Users: Users,
  Gift: Gift,
};

const CalendarJournalSection = () => {
  return (
    <section id="dashboard" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 mb-6 hover:bg-[#70DB3E]/20 transition-all duration-300">
            <Calendar className="w-4 h-4 text-[#70DB3E]" />
            <span className="text-[#70DB3E] text-sm font-medium">Calendar Journaling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {calendarJournalData.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {calendarJournalData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calendar Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#70DB3E]/20 rounded-3xl blur-[100px] group-hover:blur-[120px] transition-all duration-500" />
            <div className="relative bg-[#111111] rounded-3xl p-6 border border-[#1a1a1a] group-hover:border-[#70DB3E]/30 transition-all duration-500">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">January 2025</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#1a1a1a] rounded-lg text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 transition-all duration-300">&lt;</button>
                  <button className="p-2 bg-[#1a1a1a] rounded-lg text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 transition-all duration-300">&gt;</button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-gray-500 text-xs py-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarJournalData.sampleDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                      day.profit > 0
                        ? 'bg-[#70DB3E]/20 border border-[#70DB3E]/30 hover:bg-[#70DB3E]/30'
                        : day.profit < 0
                        ? 'bg-red-500/20 border border-red-500/30 hover:bg-red-500/30'
                        : 'bg-[#1a1a1a] hover:bg-[#222222]'
                    }`}
                  >
                    <span className="text-white text-xs font-medium">{day.date}</span>
                    {day.trades > 0 && (
                      <span className={`text-[10px] ${day.profit > 0 ? 'text-[#70DB3E]' : 'text-red-500'}`}>
                        {day.profit > 0 ? '+' : ''}{day.profit}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#1a1a1a]">
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                  <p className="text-[#70DB3E] font-bold text-lg">+$4,532</p>
                  <p className="text-gray-500 text-xs">This Month</p>
                </div>
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">87%</p>
                  <p className="text-gray-500 text-xs">Win Rate</p>
                </div>
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                  <p className="text-[#70DB3E] font-bold text-lg">32</p>
                  <p className="text-gray-500 text-xs">Total Trades</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Visualize Your Trading Journey</h3>
            <div className="space-y-4">
              {calendarJournalData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-[#70DB3E]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#70DB3E]/30 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-[#70DB3E]" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 p-6 bg-[#1a1a1a] rounded-2xl border border-[#222222] hover:border-[#70DB3E]/30 transition-all duration-300 cursor-pointer">
              <h4 className="text-white font-semibold mb-3">Sync Across All Devices</h4>
              <p className="text-gray-400 text-sm">
                Your journal entries, trade notes, and performance data are automatically synced across all your devices in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Features Grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {dashboardFeatures.title}
            </h3>
            <p className="text-gray-400">
              {dashboardFeatures.subtitle}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || BarChart3;
              return (
                <div
                  key={feature.id}
                  className="group bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_40px_rgba(112,219,62,0.15)] hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#70DB3E]/10 flex items-center justify-center mb-4 group-hover:bg-[#70DB3E]/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#70DB3E] group-hover:drop-shadow-[0_0_10px_rgba(112,219,62,0.8)]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-[#70DB3E] transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarJournalSection;
