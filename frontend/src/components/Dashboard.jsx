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
  Crown
} from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';
import { fullDashboardData, calendarJournalData } from '../data/mock';

const Dashboard = ({ onClose }) => {
  const [activeView, setActiveView] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'journal', icon: BookOpen, label: 'Journal' },
    { id: 'accounts', icon: Wallet, label: 'Accounts' },
    { id: 'copier', icon: Copy, label: 'Copy Traders' },
    { id: 'competition', icon: Trophy, label: 'Competition' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'affiliate', icon: Gift, label: 'Affiliates' },
  ];

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

  const renderCalendarView = () => (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#222222]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">January 2025</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10">&lt;</Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#70DB3E] hover:bg-[#70DB3E]/10">&gt;</Button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-gray-500 text-sm py-2">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarJournalData.sampleDays.map((day, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 ${
              day.profit > 0
                ? 'bg-[#70DB3E]/20 border border-[#70DB3E]/30 hover:bg-[#70DB3E]/30'
                : day.profit < 0
                ? 'bg-red-500/20 border border-red-500/30 hover:bg-red-500/30'
                : 'bg-[#111111] border border-[#222222] hover:border-[#333333]'
            }`}
          >
            <span className="text-white text-sm font-medium">{day.date}</span>
            {day.trades > 0 && (
              <span className={`text-xs ${day.profit > 0 ? 'text-[#70DB3E]' : 'text-red-500'}`}>
                {day.profit > 0 ? '+' : ''}{day.profit}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#70DB3E]/30" />
          <span className="text-gray-500 text-sm">Profit Day</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500/30" />
          <span className="text-gray-500 text-sm">Loss Day</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#111111] border border-[#222222]" />
          <span className="text-gray-500 text-sm">No Trades</span>
        </div>
      </div>
    </div>
  );

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

  const renderCompetitionView = () => (
    <div className="space-y-4">
      <div className="bg-[#70DB3E]/10 rounded-2xl p-6 border border-[#70DB3E]/30 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">January Trading Competition</h3>
            <p className="text-gray-400">Compete for $10,000 in prizes!</p>
          </div>
          <Trophy className="w-12 h-12 text-yellow-400" />
        </div>
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-4">Leaderboard</h3>
      
      {fullDashboardData.leaderboard.map((trader) => (
        <div
          key={trader.rank}
          className={`bg-[#1a1a1a] rounded-2xl p-4 border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
            trader.rank <= 3 ? 'border-yellow-500/30 hover:border-yellow-500/50' : 'border-[#222222] hover:border-[#70DB3E]/50'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                trader.rank === 1 ? 'bg-yellow-500 text-black' :
                trader.rank === 2 ? 'bg-gray-300 text-black' :
                trader.rank === 3 ? 'bg-amber-600 text-white' :
                'bg-[#222222] text-white'
              }`}>
                {trader.rank}
              </div>
              <img
                src={trader.avatar}
                alt={trader.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium">{trader.name}</p>
                <p className="text-gray-500 text-sm">{trader.winRate}% win rate</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#70DB3E] font-bold">+${trader.profit.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCommunityView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Community Forum</h3>
        <Button className="bg-[#70DB3E] text-black hover:bg-[#5BC236] rounded-xl hover:shadow-[0_0_20px_rgba(112,219,62,0.4)] transition-all duration-300">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>
      
      {fullDashboardData.communityPosts.map((post) => (
        <div
          key={post.id}
          className={`bg-[#1a1a1a] rounded-2xl p-4 border transition-all duration-300 cursor-pointer ${
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
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white font-medium">{post.author}</p>
                <span className="text-gray-600 text-xs">{post.time}</span>
              </div>
              <p className="text-gray-300 mb-3">{post.content}</p>
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
      
      {/* Quick Chat */}
      <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#222222] mt-6">
        <h4 className="text-white font-medium mb-3">Quick Chat</h4>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Say something to the community..."
            className="flex-1 bg-[#111111] border border-[#222222] rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E]"
          />
          <Button className="bg-[#70DB3E] text-black rounded-xl hover:bg-[#5BC236]">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAffiliateView = () => (
    <div className="space-y-6">
      {/* Affiliate Stats */}
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
      
      {/* Referral Link */}
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
      
      {/* Tiers */}
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
          {/* Logo */}
          <div className="p-6 border-b border-[#1a1a1a]">
            <div className="flex items-center gap-3">
              <div className="text-xl font-bold text-[#70DB3E]">
                QTM Dashboard
              </div>
            </div>
          </div>
          
          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
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
          
          {/* Close Button */}
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
          {/* Top Bar */}
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
          
          {/* Content Area */}
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
