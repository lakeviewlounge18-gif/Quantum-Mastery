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
  Activity,
  Eye,
  MessageSquare,
  Heart,
  Send,
  Settings,
  Bell,
  Search,
  Plus,
  ChevronRight,
  Star,
  Crown
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { fullDashboardData, dashboardFeatures, calendarJournalData } from '../data/mock';

const Dashboard = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
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
          className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] hover:border-[rgb(0,212,255)]/50 transition-all"
        >
          <p className="text-[rgb(161,161,170)] text-sm mb-1">{stat.label}</p>
          <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
          <div className="flex items-center gap-1">
            {stat.positive ? (
              <TrendingUp className="w-4 h-4 text-[rgb(0,212,255)]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${stat.positive ? 'text-[rgb(0,212,255)]' : 'text-red-500'}`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCalendarView = () => (
    <div className="bg-[rgb(38,40,42)] rounded-2xl p-6 border border-[rgb(63,63,63)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">January 2025</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-[rgb(161,161,170)]">&lt;</Button>
          <Button variant="ghost" size="sm" className="text-[rgb(161,161,170)]">&gt;</Button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-[rgb(161,161,170)] text-sm py-2">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarJournalData.sampleDays.map((day, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 ${
              day.profit > 0
                ? 'bg-[rgb(0,212,255)]/20 border border-[rgb(0,212,255)]/30'
                : day.profit < 0
                ? 'bg-red-500/20 border border-red-500/30'
                : 'bg-[rgb(26,28,30)] border border-[rgb(63,63,63)]'
            }`}
          >
            <span className="text-white text-sm font-medium">{day.date}</span>
            {day.trades > 0 && (
              <span className={`text-xs ${day.profit > 0 ? 'text-[rgb(0,212,255)]' : 'text-red-500'}`}>
                {day.profit > 0 ? '+' : ''}{day.profit}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[rgb(0,212,255)]/30" />
          <span className="text-[rgb(161,161,170)] text-sm">Profit Day</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500/30" />
          <span className="text-[rgb(161,161,170)] text-sm">Loss Day</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[rgb(26,28,30)] border border-[rgb(63,63,63)]" />
          <span className="text-[rgb(161,161,170)] text-sm">No Trades</span>
        </div>
      </div>
    </div>
  );

  const renderJournalView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Trade Journal</h3>
        <Button className="bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> New Entry
        </Button>
      </div>
      
      {fullDashboardData.recentTrades.map((trade) => (
        <div
          key={trade.id}
          className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] hover:border-[rgb(0,212,255)]/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                trade.type === 'BUY' ? 'bg-[rgb(0,212,255)]/20' : 'bg-[rgb(186,85,211)]/20'
              }`}>
                <DollarSign className={`w-5 h-5 ${trade.type === 'BUY' ? 'text-[rgb(0,212,255)]' : 'text-[rgb(186,85,211)]'}`} />
              </div>
              <div>
                <p className="text-white font-medium">{trade.pair}</p>
                <p className="text-[rgb(161,161,170)] text-sm">{trade.type} @ {trade.entry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${trade.profit > 0 ? 'text-[rgb(0,212,255)]' : 'text-red-500'}`}>
                {trade.profit > 0 ? '+' : ''}${trade.profit}
              </p>
              <p className="text-[rgb(161,161,170)] text-xs">{trade.date}</p>
            </div>
          </div>
          <div className="bg-[rgb(26,28,30)] rounded-lg p-3">
            <p className="text-[rgb(161,161,170)] text-sm">
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
        <Button className="bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> Add Account
        </Button>
      </div>
      
      {fullDashboardData.accounts.map((account) => (
        <div
          key={account.id}
          className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] hover:border-[rgb(0,212,255)]/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                account.connected ? 'bg-[rgb(0,212,255)]/20' : 'bg-[rgb(63,63,63)]'
              }`}>
                <Wallet className={`w-6 h-6 ${account.connected ? 'text-[rgb(0,212,255)]' : 'text-[rgb(161,161,170)]'}`} />
              </div>
              <div>
                <p className="text-white font-medium">{account.name}</p>
                <p className="text-[rgb(161,161,170)] text-sm">{account.broker}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-lg">${account.balance.toLocaleString()}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                account.connected
                  ? 'bg-[rgb(0,212,255)]/20 text-[rgb(0,212,255)]'
                  : 'bg-[rgb(63,63,63)] text-[rgb(161,161,170)]'
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
          className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] hover:border-[rgb(0,212,255)]/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] p-0.5">
                  <div className="w-full h-full rounded-full bg-[rgb(26,28,30)] flex items-center justify-center">
                    <Copy className="w-5 h-5 text-[rgb(0,212,255)]" />
                  </div>
                </div>
                {trader.id === 1 && (
                  <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{trader.name}</p>
                <p className="text-[rgb(161,161,170)] text-sm">{trader.followers} followers</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[rgb(0,212,255)] font-bold">+{trader.profit}%</p>
              <p className="text-[rgb(161,161,170)] text-xs">{trader.winRate}% win rate</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[rgb(63,63,63)]">
            <span className="text-[rgb(161,161,170)] text-sm">{trader.copyCost}</span>
            <Button size="sm" className="bg-[rgb(0,212,255)] text-[rgb(17,17,19)] hover:bg-[rgb(0,190,230)] rounded-lg">
              Copy Trades
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompetitionView = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 rounded-2xl p-6 border border-[rgb(0,212,255)]/30 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">January Trading Competition</h3>
            <p className="text-[rgb(161,161,170)]">Compete for $10,000 in prizes!</p>
          </div>
          <Trophy className="w-12 h-12 text-yellow-400" />
        </div>
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-4">Leaderboard</h3>
      
      {fullDashboardData.leaderboard.map((trader, index) => (
        <div
          key={trader.rank}
          className={`bg-[rgb(38,40,42)] rounded-2xl p-4 border transition-all ${
            trader.rank <= 3 ? 'border-yellow-500/30' : 'border-[rgb(63,63,63)]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                trader.rank === 1 ? 'bg-yellow-500 text-black' :
                trader.rank === 2 ? 'bg-gray-300 text-black' :
                trader.rank === 3 ? 'bg-amber-600 text-white' :
                'bg-[rgb(63,63,63)] text-white'
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
                <p className="text-[rgb(161,161,170)] text-sm">{trader.winRate}% win rate</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[rgb(0,212,255)] font-bold">+${trader.profit.toLocaleString()}</p>
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
        <Button className="bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>
      
      {fullDashboardData.communityPosts.map((post) => (
        <div
          key={post.id}
          className={`bg-[rgb(38,40,42)] rounded-2xl p-4 border transition-all ${
            post.isPinned ? 'border-[rgb(0,212,255)]/50' : 'border-[rgb(63,63,63)]'
          }`}
        >
          {post.isPinned && (
            <div className="flex items-center gap-2 text-[rgb(0,212,255)] text-xs mb-3">
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
                <span className="text-[rgb(161,161,170)] text-xs">{post.time}</span>
              </div>
              <p className="text-[rgb(218,218,218)] mb-3">{post.content}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-1 text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Quick Chat */}
      <div className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] mt-6">
        <h4 className="text-white font-medium mb-3">Quick Chat</h4>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Say something to the community..."
            className="flex-1 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl px-4 py-2 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(0,212,255)]"
          />
          <Button className="bg-[rgb(0,212,255)] text-[rgb(17,17,19)] rounded-xl">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAffiliateView = () => (
    <div className="space-y-6">
      {/* Affiliate Stats */}
      <div className="bg-gradient-to-r from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 rounded-2xl p-6 border border-[rgb(0,212,255)]/30">
        <h3 className="text-white font-bold text-xl mb-4">Your Affiliate Dashboard</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-[rgb(0,212,255)]">{fullDashboardData.user.referrals}</p>
            <p className="text-[rgb(161,161,170)] text-sm">Referrals</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[rgb(186,85,211)]">{fullDashboardData.user.affiliateDiscount}</p>
            <p className="text-[rgb(161,161,170)] text-sm">Your Discount</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">2</p>
            <p className="text-[rgb(161,161,170)] text-sm">More for 50%</p>
          </div>
        </div>
      </div>
      
      {/* Referral Link */}
      <div className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)]">
        <h4 className="text-white font-medium mb-3">Your Referral Link</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value="https://qtm.com/ref/john123"
            readOnly
            className="flex-1 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl px-4 py-2 text-[rgb(161,161,170)]"
          />
          <Button className="bg-[rgb(0,212,255)] text-[rgb(17,17,19)] rounded-xl">
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
            className={`bg-[rgb(38,40,42)] rounded-2xl p-4 border transition-all ${
              tier.unlocked ? 'border-[rgb(0,212,255)]/50' : 'border-[rgb(63,63,63)]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tier.unlocked ? 'bg-[rgb(0,212,255)]/20' : 'bg-[rgb(63,63,63)]'
                }`}>
                  <Gift className={`w-5 h-5 ${tier.unlocked ? 'text-[rgb(0,212,255)]' : 'text-[rgb(161,161,170)]'}`} />
                </div>
                <div>
                  <p className="text-white font-medium">{tier.reward}</p>
                  <p className="text-[rgb(161,161,170)] text-sm">{tier.referrals} referral{tier.referrals > 1 ? 's' : ''}</p>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                tier.unlocked
                  ? 'bg-[rgb(0,212,255)]/20 text-[rgb(0,212,255)]'
                  : 'bg-[rgb(63,63,63)] text-[rgb(161,161,170)]'
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
    <div className="fixed inset-0 z-50 bg-[rgb(17,17,19)] overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-[rgb(26,28,30)] border-r border-[rgb(63,63,63)] flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-[rgb(63,63,63)]">
            <div className="flex items-center gap-3">
              <div className="text-xl font-bold bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] bg-clip-text text-transparent">
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeView === item.id
                    ? 'bg-gradient-to-r from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 text-white border border-[rgb(0,212,255)]/30'
                    : 'text-[rgb(161,161,170)] hover:text-white hover:bg-[rgb(38,40,42)]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Close Button */}
          <div className="p-4 border-t border-[rgb(63,63,63)]">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-[rgb(63,63,63)] text-[rgb(161,161,170)] hover:text-white rounded-xl"
            >
              Exit Demo
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="h-16 bg-[rgb(26,28,30)] border-b border-[rgb(63,63,63)] flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgb(161,161,170)]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] rounded-xl text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(0,212,255)] w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-[rgb(161,161,170)] hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-[rgb(161,161,170)] hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-[rgb(63,63,63)]">
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
