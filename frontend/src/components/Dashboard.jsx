import React, { useState } from 'react';
import {
  BarChart3,
  Calendar,
  BookOpen,
  Wallet,
  Copy,
  Trophy,
  Users,
  Gift,
  TrendingUp,
  TrendingDown,
  DollarSign,
  MessageSquare,
  Heart,
  Send,
  Settings,
  Bell,
  Search,
  Plus,
  Star,
  Crown,
  GraduationCap,
  Play,
  Lock,
  CheckCircle,
  Sprout,
  ChevronRight,
  Clock,
  Image,
  Video,
  Hash,
  Medal,
  Target,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { fullDashboardData, calendarJournalData, courseData } from '../data/mock';

const Dashboard = ({ onClose }) => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [accountType, setAccountType] = useState('live');
  const [communityTab, setCommunityTab] = useState('forum');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [pnlViewType, setPnlViewType] = useState('hourly');

  const sidebarItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'courses', icon: GraduationCap, label: 'Courses' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'journal', icon: BookOpen, label: 'Journal' },
    { id: 'accounts', icon: Wallet, label: 'Accounts' },
    { id: 'copier', icon: Copy, label: 'Copy Traders' },
    { id: 'competition', icon: Trophy, label: 'Competition' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'affiliate', icon: Gift, label: 'Affiliates' },
  ];

  const courseIcons = {
    Sprout: Sprout,
    TrendingUp: TrendingUp,
    Crown: Crown,
  };

  const renderMetricsGrid = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {[
        { label: 'Total Profit', value: `$${fullDashboardData.metrics.totalProfit.toLocaleString()}`, change: `+${fullDashboardData.metrics.totalProfitPercent}%`, positive: true },
        { label: 'Win Rate', value: `${fullDashboardData.metrics.winRate}%`, change: '+5.2%', positive: true },
        { label: 'Total Trades', value: fullDashboardData.metrics.totalTrades, change: '+12', positive: true },
        { label: 'Profit Factor', value: fullDashboardData.metrics.profitFactor, change: '+0.3', positive: true },
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222] hover:border-[#70DB3E]/50 hover:shadow-[0_0_30px_rgba(112,219,62,0.1)] transition-all duration-300 cursor-pointer group"
        >
          <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
          <p className="text-white text-2xl font-bold mb-1 group-hover:text-[#70DB3E] transition-colors">{stat.value}</p>
          <div className="flex items-center gap-1">
            {stat.positive ? (
              <TrendingUp className="w-4 h-4 text-[#70DB3E]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${stat.positive ? 'text-[#70DB3E]' : 'text-red-500'}`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCoursesView = () => {
    if (selectedCourse) {
      return renderCourseDetail();
    }
    
    return (
      <div className="space-y-6">
        {/* Course Progress Overview */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
          <h3 className="text-white font-bold text-xl mb-4">Course Progress</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#70DB3E]">60%</p>
              <p className="text-gray-500 text-sm">Beginner</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-500">0%</p>
              <p className="text-gray-500 text-sm">Intermediate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-500">0%</p>
              <p className="text-gray-500 text-sm">Advanced</p>
            </div>
          </div>
          <div className="h-3 bg-[#222222] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#70DB3E] via-[#70DB3E] to-transparent" style={{ width: '20%' }} />
          </div>
          <p className="text-gray-400 text-sm mt-2">Overall Progress: 20% (6 of 30 lessons completed)</p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courseData.levels.map((level) => {
            const IconComponent = courseIcons[level.icon] || GraduationCap;
            return (
              <div
                key={level.id}
                onClick={() => !level.locked && setSelectedCourse(level)}
                className={`relative bg-[#1a1a1a] rounded-2xl p-6 border transition-all duration-500 cursor-pointer ${
                  level.locked 
                    ? 'border-[#222222] opacity-60' 
                    : 'border-[#222222] hover:border-[#70DB3E]/50 hover:shadow-[0_0_40px_rgba(112,219,62,0.15)] hover:-translate-y-2'
                }`}
              >
                {/* Lock Overlay */}
                {level.locked && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Complete previous level</p>
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${level.color}20` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: level.color }} />
                  </div>
                  {level.quizPassed && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#70DB3E]/20 text-[#70DB3E] text-xs">
                      <CheckCircle className="w-3 h-3" /> Completed
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <h4 className="text-white font-bold text-lg mb-1">{level.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{level.description}</p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">{level.completedLessons}/{level.totalLessons} lessons</span>
                    <span style={{ color: level.color }}>{level.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${level.progress}%`, backgroundColor: level.color }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  disabled={level.locked}
                  className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                    level.locked 
                      ? 'bg-[#222222] text-gray-500 cursor-not-allowed'
                      : 'bg-[#70DB3E] text-black hover:bg-[#5BC236]'
                  }`}
                >
                  {level.locked ? 'Locked' : level.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  <ChevronRight className="ml-1 w-4 h-4 inline" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Quiz Info */}
        <div className="bg-[#70DB3E]/10 rounded-2xl p-6 border border-[#70DB3E]/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#70DB3E]/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#70DB3E]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Complete Each Level to Progress</h4>
              <p className="text-gray-400 text-sm">
                Each course level ends with a short quiz. You must pass the quiz to unlock the next level. 
                You cannot skip levels - this ensures you build a solid foundation before advancing.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCourseDetail = () => {
    const course = selectedCourse;
    const IconComponent = courseIcons[course.icon] || GraduationCap;
    
    return (
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          onClick={() => setSelectedCourse(null)}
          variant="ghost"
          className="text-gray-400 hover:text-white mb-4"
        >
          ← Back to Courses
        </Button>

        {/* Course Header */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${course.color}20` }}
            >
              <IconComponent className="w-7 h-7" style={{ color: course.color }} />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl">{course.name} Course</h3>
              <p className="text-gray-400">{course.description}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">{course.completedLessons} of {course.totalLessons} lessons completed</span>
              <span style={{ color: course.color }}>{course.progress}%</span>
            </div>
            <div className="h-3 bg-[#222222] rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%`, backgroundColor: course.color }}
              />
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          {course.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`bg-[#1a1a1a] rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                lesson.completed 
                  ? 'border-[#70DB3E]/30 hover:border-[#70DB3E]/50' 
                  : 'border-[#222222] hover:border-[#70DB3E]/30'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  lesson.completed ? 'bg-[#70DB3E]/20' : 'bg-[#222222]'
                }`}>
                  {lesson.completed ? (
                    <CheckCircle className="w-5 h-5 text-[#70DB3E]" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${
                    lesson.completed ? 'text-[#70DB3E]' : 'text-white'
                  }`}>
                    Lesson {index + 1}: {lesson.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Play className="w-3 h-3" /> Video
                    </span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className={`rounded-lg ${
                    lesson.completed 
                      ? 'bg-[#222222] text-gray-400 hover:bg-[#70DB3E]/20 hover:text-[#70DB3E]'
                      : 'bg-[#70DB3E] text-black hover:bg-[#5BC236]'
                  }`}
                >
                  {lesson.completed ? 'Rewatch' : 'Start'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Section */}
        <div className={`rounded-2xl p-6 border ${
          course.progress === 100 
            ? 'bg-[#70DB3E]/10 border-[#70DB3E]/30' 
            : 'bg-[#1a1a1a] border-[#222222]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                course.progress === 100 ? 'bg-[#70DB3E]/20' : 'bg-[#222222]'
              }`}>
                <GraduationCap className={`w-6 h-6 ${
                  course.progress === 100 ? 'text-[#70DB3E]' : 'text-gray-500'
                }`} />
              </div>
              <div>
                <h4 className="text-white font-bold">{course.name} Level Quiz</h4>
                <p className="text-gray-400 text-sm">
                  {course.progress === 100 
                    ? 'You\'re ready to take the quiz!' 
                    : 'Complete all lessons to unlock the quiz'
                  }
                </p>
              </div>
            </div>
            <Button
              disabled={course.progress !== 100}
              className={`font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                course.progress === 100
                  ? 'bg-[#70DB3E] text-black hover:bg-[#5BC236] hover:shadow-[0_0_20px_rgba(112,219,62,0.4)]'
                  : 'bg-[#222222] text-gray-500 cursor-not-allowed'
              }`}
            >
              {course.progress === 100 ? 'Take Quiz' : 'Locked'}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderCalendarView = () => {
    const maxDailyPnL = Math.max(...calendarJournalData.dailyPnL.map(d => d.value));
    const maxHourlyPnL = Math.max(...calendarJournalData.hourlyPnL.map(d => Math.abs(d.value)));
    
    return (
      <div className="space-y-6">
        {/* User Profile Card - Matching Reference Design */}
        <div className="bg-gradient-to-r from-[#70DB3E]/10 to-[#1a1a1a] rounded-2xl p-6 border border-[#70DB3E]/40">
          <div className="flex items-center justify-between">
            {/* Left Side - User Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
                  alt="Khan Hazara"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#70DB3E] shadow-[0_0_15px_rgba(112,219,62,0.3)]"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Khan Hazara</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1.5 text-sm">
                    <Medal className="w-4 h-4 text-[#70DB3E]" />
                    <span className="text-gray-400">Rank</span>
                    <span className="text-[#70DB3E] font-semibold">#1</span>
                  </span>
                  <span className="text-gray-500 text-sm">Member since 2024-01-15</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Metrics */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#70DB3E]">${calendarJournalData.monthMetrics.profits.toLocaleString()}</p>
                <p className="text-gray-500 text-xs mt-1">Total Profit</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{calendarJournalData.monthMetrics.percent}%</p>
                <p className="text-gray-500 text-xs mt-1">Win Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{calendarJournalData.monthMetrics.totalTrades.toLocaleString()}</p>
                <p className="text-gray-500 text-xs mt-1">Total Trades</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 p-1">&lt;</Button>
                <h3 className="text-white font-semibold text-lg">January 2025</h3>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 p-1">&gt;</Button>
              </div>
            </div>
            
            {/* Day Headers */}
            <div className="grid grid-cols-8 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Total'].map((day) => (
                <div key={day} className="text-center text-gray-500 text-xs py-2">{day}</div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="space-y-1">
              {/* Week rows */}
              {[0, 1, 2].map((weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-8 gap-1">
                  {calendarJournalData.sampleDays.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`rounded-lg p-2 min-h-[70px] cursor-pointer transition-all duration-300 hover:scale-105 ${
                        day.profit > 10000
                          ? 'bg-[#70DB3E]/30 border border-[#70DB3E]/50'
                          : day.profit > 0
                          ? 'bg-[#70DB3E]/10 border border-[#70DB3E]/20'
                          : day.profit < 0
                          ? 'bg-red-500/10 border border-red-500/20'
                          : 'bg-[#111111] border border-[#222222]'
                      }`}
                    >
                      <span className="text-gray-400 text-xs">{day.date}</span>
                      {day.trades > 0 && (
                        <div className="mt-1">
                          <p className={`text-xs font-bold ${day.profit > 0 ? 'text-[#70DB3E]' : 'text-red-500'}`}>
                            ${day.profit > 1000 ? (day.profit / 1000).toFixed(0) + 'K' : day.profit.toLocaleString()}
                          </p>
                          <p className={`text-[10px] ${day.profit > 0 ? 'text-[#70DB3E]/70' : 'text-red-500/70'}`}>
                            {day.percent > 0 ? '+' : ''}{day.percent}%
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Weekly Total */}
                  <div className="rounded-lg p-2 min-h-[70px] bg-[#70DB3E]/5 border border-[#70DB3E]/20">
                    <span className="text-gray-500 text-xs">•</span>
                    <div className="mt-1">
                      <p className="text-xs font-bold text-[#70DB3E]">
                        ${(calendarJournalData.sampleDays.slice(weekIndex * 7, (weekIndex + 1) * 7).reduce((sum, d) => sum + d.profit, 0) / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Charts */}
          <div className="space-y-6">
            {/* Net Daily P&L Chart */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Net Daily P&L</h3>
                <DollarSign className="w-5 h-5 text-[#70DB3E]" />
              </div>
              
              {/* Y-axis labels and chart */}
              <div className="flex">
                <div className="flex flex-col justify-between text-right pr-2 text-xs text-gray-500 h-[150px]">
                  <span>$800,000</span>
                  <span>$400,000</span>
                  <span>$200,000</span>
                  <span>$0</span>
                </div>
                <div className="flex-1 flex items-end gap-1 h-[150px]">
                  {calendarJournalData.dailyPnL.map((day, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end">
                      <div
                        className="w-full bg-[#70DB3E] rounded-t-sm transition-all duration-300 hover:bg-[#5BC236]"
                        style={{ height: `${(day.value / maxDailyPnL) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex pl-16 mt-2">
                {calendarJournalData.dailyPnL.filter((_, i) => i % 2 === 0).map((day, index) => (
                  <div key={index} className="flex-1 text-center text-xs text-gray-500">
                    {day.date}
                  </div>
                ))}
              </div>
            </div>

            {/* Hourly/Daily P&L Chart */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setPnlViewType('hourly')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      pnlViewType === 'hourly'
                        ? 'bg-[#70DB3E]/20 text-[#70DB3E] border-b-2 border-[#70DB3E]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Hourly
                  </button>
                  <button
                    onClick={() => setPnlViewType('daily')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      pnlViewType === 'daily'
                        ? 'bg-[#70DB3E]/20 text-[#70DB3E] border-b-2 border-[#70DB3E]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Daily
                  </button>
                </div>
                <select className="bg-[#222222] text-[#70DB3E] text-sm rounded-lg px-3 py-1 border-none focus:outline-none">
                  <option>Wins vs Losses</option>
                  <option>Profit Only</option>
                  <option>Loss Only</option>
                </select>
              </div>
              
              {/* Chart */}
              <div className="flex">
                <div className="flex flex-col justify-between text-right pr-2 text-xs text-gray-500 h-[120px]">
                  <span>800</span>
                  <span>400</span>
                  <span>0</span>
                  <span>-200</span>
                </div>
                <div className="flex-1 flex items-end gap-0.5 h-[120px] relative">
                  {/* Zero line */}
                  <div className="absolute bottom-[20%] left-0 right-0 border-t border-gray-600/50" />
                  
                  {calendarJournalData.hourlyPnL.map((hour, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                      {hour.value >= 0 ? (
                        <div
                          className="w-full bg-[#70DB3E] rounded-t-sm transition-all duration-300 hover:bg-[#5BC236]"
                          style={{ height: `${(hour.value / maxHourlyPnL) * 60}%`, marginBottom: '20%' }}
                        />
                      ) : (
                        <div
                          className="w-full bg-red-500 rounded-b-sm transition-all duration-300 hover:bg-red-400"
                          style={{ height: `${(Math.abs(hour.value) / maxHourlyPnL) * 20}%`, marginTop: 'auto' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex pl-8 mt-2">
                {calendarJournalData.hourlyPnL.filter((_, i) => i % 4 === 0).map((hour, index) => (
                  <div key={index} className="flex-1 text-center text-xs text-gray-500">
                    {hour.hour}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Yearly Performance */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Yearly Performance</h3>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#70DB3E]" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <td className="text-gray-500 text-sm py-2 px-3"></td>
                  {calendarJournalData.yearlyPerformance.months.map((m) => (
                    <td key={m.month} className="text-gray-400 text-sm text-center py-2 px-3">{m.month}</td>
                  ))}
                  <td className="text-[#70DB3E] text-sm text-center py-2 px-3 font-semibold">YTD</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-500 text-sm py-2 px-3">{calendarJournalData.yearlyPerformance.year}</td>
                  {calendarJournalData.yearlyPerformance.months.map((m, index) => (
                    <td key={index} className="text-center py-2 px-3">
                      {m.profit !== null ? (
                        <div className="bg-[#70DB3E]/10 rounded-lg p-2 border border-[#70DB3E]/30">
                          <p className="text-[#70DB3E] text-xs font-bold">+{(m.profit / 1000000).toFixed(1)}M</p>
                          <p className="text-gray-500 text-[10px]">{m.trades} trades</p>
                        </div>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  ))}
                  <td className="text-center py-2 px-3">
                    <div className="bg-[#70DB3E]/20 rounded-lg p-2 border border-[#70DB3E]/50">
                      <p className="text-[#70DB3E] text-xs font-bold">+{(calendarJournalData.yearlyPerformance.ytd.profit / 1000000).toFixed(1)}M</p>
                      <p className="text-gray-500 text-[10px]">{calendarJournalData.yearlyPerformance.ytd.trades} trades</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderJournalView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Trade Journal</h3>
        <Button className="bg-[#70DB3E] text-black hover:bg-[#5BC236] rounded-xl hover:shadow-[0_0_20px_rgba(112,219,62,0.4)] transition-all duration-300">
          <Plus className="w-4 h-4 mr-2" /> New Entry
        </Button>
      </div>
      
      {fullDashboardData.recentTrades.map((trade) => (
        <div
          key={trade.id}
          className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222] hover:border-[#70DB3E]/50 hover:shadow-[0_0_20px_rgba(112,219,62,0.1)] transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                trade.type === 'BUY' ? 'bg-[#70DB3E]/20' : 'bg-red-500/20'
              }`}>
                <DollarSign className={`w-5 h-5 ${trade.type === 'BUY' ? 'text-[#70DB3E]' : 'text-red-500'}`} />
              </div>
              <div>
                <p className="text-white font-medium group-hover:text-[#70DB3E] transition-colors">{trade.pair}</p>
                <p className="text-gray-500 text-sm">{trade.type} @ {trade.entry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${trade.profit > 0 ? 'text-[#70DB3E]' : 'text-red-500'}`}>
                {trade.profit > 0 ? '+' : ''}${trade.profit}
              </p>
              <p className="text-gray-500 text-xs">{trade.date}</p>
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-3">
            <p className="text-gray-400 text-sm">
              <span className="text-white">Notes:</span> {trade.notes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAccountsView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Connected Accounts</h3>
        <Button className="bg-[#70DB3E] text-black hover:bg-[#5BC236] rounded-xl hover:shadow-[0_0_20px_rgba(112,219,62,0.4)] transition-all duration-300">
          <Plus className="w-4 h-4 mr-2" /> Add Account
        </Button>
      </div>
      
      {fullDashboardData.accounts.map((account) => (
        <div
          key={account.id}
          className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222] hover:border-[#70DB3E]/50 hover:shadow-[0_0_20px_rgba(112,219,62,0.1)] transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                account.connected ? 'bg-[#70DB3E]/20' : 'bg-[#222222]'
              }`}>
                <Wallet className={`w-6 h-6 ${account.connected ? 'text-[#70DB3E]' : 'text-gray-500'}`} />
              </div>
              <div>
                <p className="text-white font-medium group-hover:text-[#70DB3E] transition-colors">{account.name}</p>
                <p className="text-gray-500 text-sm">{account.broker}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">${account.balance.toLocaleString()}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                account.connected
                  ? 'bg-[#70DB3E]/20 text-[#70DB3E]'
                  : 'bg-[#222222] text-gray-500'
              }`}>
                {account.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCopyTradersView = () => (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-lg mb-4">Top Copy Traders</h3>
      
      {fullDashboardData.copyTraders.map((trader) => (
        <div
          key={trader.id}
          className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222] hover:border-[#70DB3E]/50 hover:shadow-[0_0_20px_rgba(112,219,62,0.1)] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#70DB3E]/20 p-0.5">
                  <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center">
                    <Copy className="w-5 h-5 text-[#70DB3E]" />
                  </div>
                </div>
                {trader.id === 1 && (
                  <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{trader.name}</p>
                <p className="text-gray-500 text-sm">{trader.followers} followers</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#70DB3E] font-bold">+{trader.profit}%</p>
              <p className="text-gray-500 text-xs">{trader.winRate}% win rate</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#222222]">
            <span className="text-gray-500 text-sm">{trader.copyCost}</span>
            <Button size="sm" className="bg-[#70DB3E] text-black hover:bg-[#5BC236] rounded-lg hover:shadow-[0_0_15px_rgba(112,219,62,0.4)] transition-all duration-300">
              Copy Trades
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompetitionView = () => {
    const leaderboardData = accountType === 'live' ? fullDashboardData.leaderboard.live : fullDashboardData.leaderboard.demo;
    const topThree = leaderboardData.slice(0, 3);
    const remaining = leaderboardData.slice(3);

    return (
      <div className="space-y-6">
        {/* Competition Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Past Competition */}
          {fullDashboardData.competitions.filter(c => c.status === 'past').slice(0, 1).map((comp) => (
            <div key={comp.id} className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#222222] opacity-75">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gray-500/20 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Past</span>
              </div>
              <h4 className="text-white font-bold mb-2">{comp.title}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Prize Pool</span>
                  <span className="text-white">{comp.prize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Winner</span>
                  <span className="text-[#70DB3E]">{comp.winner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Winning Profit</span>
                  <span className="text-[#70DB3E]">{comp.winnerProfit}</span>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 text-gray-400 hover:text-white text-sm">
                View Results
              </Button>
            </div>
          ))}

          {/* Current Competition */}
          {fullDashboardData.competitions.filter(c => c.status === 'current').map((comp) => (
            <div key={comp.id} className="bg-gradient-to-b from-[#70DB3E]/20 to-[#1a1a1a] rounded-2xl p-5 border-2 border-[#70DB3E]/50 shadow-[0_0_40px_rgba(112,219,62,0.15)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#70DB3E]/20 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-[#70DB3E]" />
                  </div>
                  <span className="text-xs text-[#70DB3E] uppercase tracking-wider font-semibold">Live Now</span>
                </div>
                <span className="text-xs bg-[#70DB3E] text-black px-2 py-1 rounded-full font-bold">{comp.daysLeft} days left</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{comp.title}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-[#70DB3E] font-bold text-lg">{comp.prize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Participants</span>
                  <span className="text-white">{comp.participants}</span>
                </div>
              </div>
              {comp.registered ? (
                <Button className="w-full bg-[#222222] text-[#70DB3E] hover:bg-[#70DB3E]/20 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" /> Registered
                </Button>
              ) : (
                <Button className="w-full bg-[#70DB3E] text-black hover:bg-[#5BC236] font-semibold">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          ))}

          {/* Upcoming Competition */}
          {fullDashboardData.competitions.filter(c => c.status === 'upcoming').slice(0, 1).map((comp) => (
            <div key={comp.id} className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#222222] hover:border-[#70DB3E]/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-xs text-yellow-400 uppercase tracking-wider">Coming Soon</span>
              </div>
              <h4 className="text-white font-bold mb-2">{comp.title}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Prize Pool</span>
                  <span className="text-yellow-400 font-bold">{comp.prize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Starts</span>
                  <span className="text-white">{comp.startDate}</span>
                </div>
              </div>
              <Button className="w-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold">
                Pre-Register <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">Leaderboard</h3>
            {/* Account Type Toggle */}
            <div className="flex bg-[#111111] rounded-xl p-1">
              <button
                onClick={() => setAccountType('live')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  accountType === 'live'
                    ? 'bg-[#70DB3E] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Live Account
              </button>
              <button
                onClick={() => setAccountType('demo')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  accountType === 'demo'
                    ? 'bg-[#70DB3E] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Demo Account
              </button>
            </div>
          </div>

          {/* Top 3 Winners Podium */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* 2nd Place */}
            <div className="flex flex-col items-center pt-8">
              <div className="relative mb-3">
                <img src={topThree[1]?.avatar} alt={topThree[1]?.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-400" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-black text-xs font-bold">2</span>
                </div>
              </div>
              <span className="text-xl mb-1">{topThree[1]?.countryFlag}</span>
              <p className="text-white font-medium text-sm text-center">{topThree[1]?.name}</p>
              <p className="text-gray-500 text-xs">{topThree[1]?.winRate}% Win</p>
              <p className="text-[#70DB3E] font-bold">${topThree[1]?.profit.toLocaleString()}</p>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center">
              <Crown className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="relative mb-3">
                <img src={topThree[0]?.avatar} alt={topThree[0]?.name} className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-black text-sm font-bold">1</span>
                </div>
              </div>
              <span className="text-2xl mb-1">{topThree[0]?.countryFlag}</span>
              <p className="text-white font-bold text-center">{topThree[0]?.name}</p>
              <p className="text-gray-500 text-xs">{topThree[0]?.winRate}% Win</p>
              <p className="text-[#70DB3E] font-bold text-lg">${topThree[0]?.profit.toLocaleString()}</p>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center pt-12">
              <div className="relative mb-3">
                <img src={topThree[2]?.avatar} alt={topThree[2]?.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-600" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <span className="text-xl mb-1">{topThree[2]?.countryFlag}</span>
              <p className="text-white font-medium text-sm text-center">{topThree[2]?.name}</p>
              <p className="text-gray-500 text-xs">{topThree[2]?.winRate}% Win</p>
              <p className="text-[#70DB3E] font-bold">${topThree[2]?.profit.toLocaleString()}</p>
            </div>
          </div>

          {/* Remaining Traders List */}
          <div className="space-y-2">
            {remaining.map((trader) => (
              <div
                key={trader.rank}
                className="flex items-center justify-between p-3 bg-[#111111] rounded-xl hover:bg-[#1a1a1a] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-gray-400 font-medium text-sm">
                    {trader.rank}
                  </span>
                  <span className="text-lg">{trader.countryFlag}</span>
                  <img src={trader.avatar} alt={trader.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-white font-medium">{trader.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">{trader.winRate}% Win</span>
                  <span className="text-[#70DB3E] font-bold">${trader.profit.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCommunityView = () => {
    const allTopics = ['All', ...fullDashboardData.forumTopics];
    const filteredPosts = selectedTopic === 'All' 
      ? fullDashboardData.communityPosts 
      : fullDashboardData.communityPosts.filter(p => p.topic === selectedTopic);

    return (
      <div className="space-y-6">
        {/* Personal Stats Header */}
        <div className="bg-gradient-to-r from-[#70DB3E]/10 to-[#1a1a1a] rounded-2xl p-6 border border-[#70DB3E]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={fullDashboardData.user.avatar}
                alt={fullDashboardData.user.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#70DB3E]"
              />
              <div>
                <h3 className="text-white font-bold text-xl">{fullDashboardData.user.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-[#70DB3E] text-sm">
                    <Medal className="w-4 h-4" /> Rank #{fullDashboardData.user.rank}
                  </span>
                  <span className="text-gray-500 text-sm">Member since {fullDashboardData.user.memberSince}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#70DB3E]">${fullDashboardData.metrics.totalProfit.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">Total Profit</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{fullDashboardData.metrics.winRate}%</p>
                <p className="text-gray-500 text-xs">Win Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{fullDashboardData.metrics.totalTrades}</p>
                <p className="text-gray-500 text-xs">Total Trades</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-[#222222] pb-2">
          {['forum', 'chatroom'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCommunityTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                communityTab === tab
                  ? 'bg-[#70DB3E] text-black'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {tab === 'forum' ? 'Forum' : 'Chat Room'}
            </button>
          ))}
        </div>

        {communityTab === 'forum' ? (
          <>
            {/* Topic Filters */}
            <div className="flex flex-wrap gap-2">
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedTopic === topic
                      ? 'bg-[#70DB3E] text-black'
                      : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#222222]'
                  }`}
                >
                  <Hash className="w-3 h-3 inline mr-1" />
                  {topic}
                </button>
              ))}
            </div>

            {/* Create Post */}
            <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222]">
              <div className="flex items-start gap-3">
                <img
                  src={fullDashboardData.user.avatar}
                  alt="You"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="Share your analysis, ask questions, or start a discussion..."
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] min-h-[80px] resize-none"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-[#222222] text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 transition-all">
                        <Image className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg bg-[#222222] text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10 transition-all">
                        <Video className="w-5 h-5" />
                      </button>
                      <select className="bg-[#222222] text-gray-400 rounded-lg px-3 py-2 text-sm border-none focus:outline-none focus:ring-1 focus:ring-[#70DB3E]">
                        <option>Select Topic</option>
                        {fullDashboardData.forumTopics.map((topic) => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>
                    <Button className="bg-[#70DB3E] text-black hover:bg-[#5BC236] font-semibold px-6">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`bg-[#1a1a1a] rounded-2xl p-4 border transition-all duration-300 ${
                    post.isPinned ? 'border-[#70DB3E]/50' : 'border-[#222222] hover:border-[#70DB3E]/30'
                  }`}
                >
                  {post.isPinned && (
                    <div className="flex items-center gap-2 text-[#70DB3E] text-xs mb-3">
                      <Star className="w-3 h-3" /> Pinned Post
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="text-white font-medium">{post.author}</p>
                        {post.topic && (
                          <span className="px-2 py-0.5 rounded-full bg-[#70DB3E]/20 text-[#70DB3E] text-xs">
                            {post.topic}
                          </span>
                        )}
                        <span className="text-gray-600 text-xs">{post.time}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{post.content}</p>
                      
                      {/* Attachment Preview */}
                      {post.hasAttachment && (
                        <div className="mb-3 rounded-xl overflow-hidden bg-[#111111] border border-[#222222]">
                          {post.attachmentType === 'image' && post.attachmentUrl && (
                            <img src={post.attachmentUrl} alt="Attachment" className="w-full max-h-[200px] object-cover" />
                          )}
                          {post.attachmentType === 'video' && (
                            <div className="flex items-center justify-center py-8 bg-[#111111]">
                              <div className="flex items-center gap-2 text-gray-400">
                                <Play className="w-8 h-8 p-2 bg-[#70DB3E]/20 rounded-full text-[#70DB3E]" />
                                <span>Video Attachment</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-[#70DB3E] transition-colors">
                          <Heart className="w-4 h-4" /> {post.likes}
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-[#70DB3E] transition-colors">
                          <MessageSquare className="w-4 h-4" /> {post.comments}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Chat Room */
          <div className="bg-[#1a1a1a] rounded-2xl border border-[#222222] overflow-hidden">
            {/* Chat Header */}
            <div className="bg-[#111111] px-4 py-3 border-b border-[#222222] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#70DB3E] rounded-full animate-pulse" />
                <span className="text-white font-medium">Live Chat</span>
                <span className="text-gray-500 text-sm">• 23 online</span>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {fullDashboardData.chatMessages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3">
                  <img src={msg.avatar} alt={msg.author} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">{msg.author}</span>
                      <span className="text-gray-600 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-[#222222]">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E]"
                />
                <Button className="bg-[#70DB3E] text-black rounded-xl hover:bg-[#5BC236] px-4">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderAffiliateView = () => (
    <div className="space-y-6">
      <div className="bg-[#70DB3E]/10 rounded-2xl p-6 border border-[#70DB3E]/30">
        <h3 className="text-white font-bold text-xl mb-4">Your Affiliate Dashboard</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center cursor-pointer hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-[#70DB3E]">{fullDashboardData.user.referrals}</p>
            <p className="text-gray-400 text-sm">Referrals</p>
          </div>
          <div className="text-center cursor-pointer hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-[#70DB3E]">{fullDashboardData.user.affiliateDiscount}</p>
            <p className="text-gray-400 text-sm">Your Discount</p>
          </div>
          <div className="text-center cursor-pointer hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-white">2</p>
            <p className="text-gray-400 text-sm">More for 50%</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222]">
        <h4 className="text-white font-medium mb-3">Your Referral Link</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value="https://qtm.com/ref/john123"
            readOnly
            className="flex-1 bg-[#111111] border border-[#222222] rounded-xl px-4 py-2 text-gray-400"
          />
          <Button className="bg-[#70DB3E] text-black rounded-xl hover:bg-[#5BC236] hover:shadow-[0_0_15px_rgba(112,219,62,0.4)] transition-all duration-300">
            Copy
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-white font-medium">Reward Tiers</h4>
        {[
          { referrals: 1, reward: '10% Commission', unlocked: true },
          { referrals: 3, reward: 'Free Ebook', unlocked: true },
          { referrals: 5, reward: '50% Discount', unlocked: false },
        ].map((tier, index) => (
          <div
            key={index}
            className={`bg-[#1a1a1a] rounded-2xl p-4 border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
              tier.unlocked ? 'border-[#70DB3E]/50 hover:shadow-[0_0_20px_rgba(112,219,62,0.1)]' : 'border-[#222222]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tier.unlocked ? 'bg-[#70DB3E]/20' : 'bg-[#222222]'
                }`}>
                  <Gift className={`w-5 h-5 ${tier.unlocked ? 'text-[#70DB3E]' : 'text-gray-500'}`} />
                </div>
                <div>
                  <p className="text-white font-medium">{tier.reward}</p>
                  <p className="text-gray-500 text-sm">{tier.referrals} referral{tier.referrals > 1 ? 's' : ''}</p>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                tier.unlocked
                  ? 'bg-[#70DB3E]/20 text-[#70DB3E]'
                  : 'bg-[#222222] text-gray-500'
              }`}>
                {tier.unlocked ? 'Unlocked' : 'Locked'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'courses':
        return renderCoursesView();
      case 'calendar':
        return renderCalendarView();
      case 'journal':
        return renderJournalView();
      case 'accounts':
        return renderAccountsView();
      case 'copier':
        return renderCopyTradersView();
      case 'competition':
        return renderCompetitionView();
      case 'community':
        return renderCommunityView();
      case 'affiliate':
        return renderAffiliateView();
      default:
        return (
          <>
            {renderMetricsGrid()}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>{renderCalendarView()}</div>
              <div>{renderJournalView()}</div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-[#111111] border-r border-[#1a1a1a] flex flex-col">
          <div className="p-6 border-b border-[#1a1a1a]">
            <div className="flex items-center gap-3">
              <div className="text-xl font-bold text-[#70DB3E]">
                QTM Dashboard
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveView(item.id); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeView === item.id
                    ? 'bg-[#70DB3E]/10 text-[#70DB3E] border border-[#70DB3E]/30 shadow-[0_0_15px_rgba(112,219,62,0.1)]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="p-4 border-t border-[#1a1a1a]">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-[#222222] text-gray-400 hover:text-white hover:border-[#70DB3E]/50 rounded-xl transition-all duration-300"
            >
              Exit Demo
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-16 bg-[#111111] border-b border-[#1a1a1a] flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-[#1a1a1a] border border-[#222222] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] w-64 transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-[#70DB3E] transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-[#70DB3E] transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-[#1a1a1a]">
                <img
                  src={fullDashboardData.user.avatar}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-white text-sm">{fullDashboardData.user.name}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-6xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
