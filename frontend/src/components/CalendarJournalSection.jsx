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
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(0,212,255)]/10 border border-[rgb(0,212,255)]/30 mb-6">
            <Calendar className="w-4 h-4 text-[rgb(0,212,255)]" />
            <span className="text-[rgb(0,212,255)] text-sm font-medium">Calendar Journaling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {calendarJournalData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
            {calendarJournalData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calendar Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[rgb(26,28,30)] rounded-3xl p-6 border border-[rgb(63,63,63)]">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">January 2025</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-[rgb(38,40,42)] rounded-lg text-[rgb(161,161,170)] hover:text-white">&lt;</button>
                  <button className="p-2 bg-[rgb(38,40,42)] rounded-lg text-[rgb(161,161,170)] hover:text-white">&gt;</button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-[rgb(161,161,170)] text-xs py-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarJournalData.sampleDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm ${
                      day.profit > 0
                        ? 'bg-[rgb(0,212,255)]/20 border border-[rgb(0,212,255)]/30'
                        : day.profit < 0
                        ? 'bg-red-500/20 border border-red-500/30'
                        : 'bg-[rgb(38,40,42)]'
                    }`}
                  >
                    <span className="text-white text-xs font-medium">{day.date}</span>
                    {day.trades > 0 && (
                      <span className={`text-[10px] ${day.profit > 0 ? 'text-[rgb(0,212,255)]' : 'text-red-500'}`}>
                        {day.profit > 0 ? '+' : ''}{day.profit}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[rgb(63,63,63)]">
                <div className="text-center">
                  <p className="text-[rgb(0,212,255)] font-bold text-lg">+$4,532</p>
                  <p className="text-[rgb(161,161,170)] text-xs">This Month</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">87%</p>
                  <p className="text-[rgb(161,161,170)] text-xs">Win Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-[rgb(186,85,211)] font-bold text-lg">32</p>
                  <p className="text-[rgb(161,161,170)] text-xs">Total Trades</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Visualize Your Trading Journey</h3>
            <div className="space-y-4">
              {calendarJournalData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[rgb(0,212,255)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[rgb(0,212,255)]" />
                  </div>
                  <p className="text-[rgb(218,218,218)]">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 p-6 bg-[rgb(38,40,42)] rounded-2xl border border-[rgb(63,63,63)]">
              <h4 className="text-white font-semibold mb-3">Sync Across All Devices</h4>
              <p className="text-[rgb(161,161,170)] text-sm">
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
            <p className="text-[rgb(161,161,170)]">
              {dashboardFeatures.subtitle}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || BarChart3;
              return (
                <div
                  key={feature.id}
                  className="group bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgb(0,212,255)]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-[rgb(0,212,255)]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">{feature.description}</p>
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
