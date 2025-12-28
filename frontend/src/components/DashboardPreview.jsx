import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { dashboardPreviewData } from '../data/mock';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'trades', label: 'Trades', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: Eye },
  ];

  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {dashboardPreviewData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
            {dashboardPreviewData.subtitle}
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(218,255,1)]/10 via-transparent to-[rgb(127,74,142)]/10 rounded-3xl blur-xl" />
          
          <Card className="relative bg-[rgb(26,28,30)] border-[rgb(63,63,63)] rounded-3xl overflow-hidden">
            {/* Dashboard Header */}
            <CardHeader className="border-b border-[rgb(63,63,63)] p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex bg-[rgb(38,40,42)] rounded-xl p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)]'
                          : 'text-[rgb(161,161,170)] hover:text-white'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {dashboardPreviewData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[rgb(38,40,42)] rounded-2xl p-4 border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)]/50 transition-all"
                  >
                    <p className="text-[rgb(161,161,170)] text-sm mb-1">{stat.label}</p>
                    <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      {stat.change.startsWith('+') ? (
                        <TrendingUp className="w-4 h-4 text-[rgb(218,255,1)]" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.change.startsWith('+') ? 'text-[rgb(218,255,1)]' : 'text-red-500'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-[rgb(38,40,42)] rounded-2xl p-6 mb-8 border border-[rgb(63,63,63)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Portfolio Performance</h3>
                  <div className="flex gap-2">
                    {['1D', '1W', '1M', '3M', 'YTD'].map((period) => (
                      <button
                        key={period}
                        className="px-3 py-1 text-xs rounded-lg bg-[rgb(26,28,30)] text-[rgb(161,161,170)] hover:text-white transition-colors"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Simulated Chart */}
                <div className="h-48 flex items-end justify-between gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[rgb(218,255,1)]/20 to-[rgb(218,255,1)] rounded-t-sm transition-all hover:from-[rgb(218,255,1)]/40"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Trades */}
              <div className="bg-[rgb(38,40,42)] rounded-2xl p-6 border border-[rgb(63,63,63)]">
                <h3 className="text-white font-semibold mb-4">Recent Trades</h3>
                <div className="space-y-3">
                  {dashboardPreviewData.trades.map((trade, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-[rgb(26,28,30)] rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            trade.type === 'BUY'
                              ? 'bg-[rgb(218,255,1)]/20 text-[rgb(218,255,1)]'
                              : 'bg-red-500/20 text-red-500'
                          }`}
                        >
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{trade.pair}</p>
                          <p className="text-[rgb(161,161,170)] text-sm">{trade.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            trade.profit.startsWith('+') ? 'text-[rgb(218,255,1)]' : 'text-red-500'
                          }`}
                        >
                          {trade.profit}
                        </p>
                        <p
                          className={`text-xs px-2 py-1 rounded-full ${
                            trade.status === 'open'
                              ? 'bg-[rgb(218,255,1)]/20 text-[rgb(218,255,1)]'
                              : 'bg-[rgb(63,63,63)] text-[rgb(161,161,170)]'
                          }`}
                        >
                          {trade.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
