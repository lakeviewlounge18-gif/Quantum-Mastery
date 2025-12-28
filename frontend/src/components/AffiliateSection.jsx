import React from 'react';
import { Gift, Users, Share2, BookOpen, ArrowRight, Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { affiliateData, spotsClaimed } from '../data/mock';

const AffiliateSection = ({ onJoinWaitlist }) => {
  return (
    <section id="affiliates" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70DB3E]/10 border border-[#70DB3E]/30 mb-6 hover:bg-[#70DB3E]/20 transition-all duration-300">
            <Gift className="w-4 h-4 text-[#70DB3E]" />
            <span className="text-[#70DB3E] text-sm font-medium">{affiliateData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Refer Friends, <span className="text-[#70DB3E] drop-shadow-[0_0_20px_rgba(112,219,62,0.5)]">Earn Rewards</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {affiliateData.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: How It Works */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#70DB3E] flex items-center justify-center text-black font-bold flex-shrink-0 shadow-[0_0_20px_rgba(112,219,62,0.5)] group-hover:shadow-[0_0_30px_rgba(112,219,62,0.7)] group-hover:scale-110 transition-all duration-300">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-[#70DB3E] transition-colors duration-300">Share Your Link</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Get your unique referral link and share it with friends, family, or on social media.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#70DB3E] flex items-center justify-center text-black font-bold flex-shrink-0 shadow-[0_0_20px_rgba(112,219,62,0.5)] group-hover:shadow-[0_0_30px_rgba(112,219,62,0.7)] group-hover:scale-110 transition-all duration-300">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-[#70DB3E] transition-colors duration-300">Friends Join Waitlist</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">When your friends sign up using your link, they're added to your referral count.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#70DB3E] flex items-center justify-center text-black font-bold flex-shrink-0 shadow-[0_0_20px_rgba(112,219,62,0.5)] group-hover:shadow-[0_0_30px_rgba(112,219,62,0.7)] group-hover:scale-110 transition-all duration-300">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-[#70DB3E] transition-colors duration-300">Unlock Rewards</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Reach milestones to unlock discounts, bonuses, and commissions!</p>
                </div>
              </div>
            </div>
            
            {/* Pre-Launch Bonus Banner */}
            <div className="mt-8 p-6 bg-[#70DB3E]/10 rounded-2xl border border-[#70DB3E]/30 hover:border-[#70DB3E]/50 hover:bg-[#70DB3E]/15 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold mb-2">Pre-Launch Special!</h4>
                  <p className="text-gray-300 text-sm">
                    {affiliateData.preLaunchBonus}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Reward Tiers */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Reward Tiers</h3>
            
            <div className="space-y-4">
              {affiliateData.tiers.map((tier, index) => (
                <div
                  key={tier.id}
                  className="group bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 transition-all duration-500 hover:border-[#70DB3E]/50 hover:shadow-[0_0_40px_rgba(112,219,62,0.15)] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#70DB3E]/10 flex items-center justify-center group-hover:bg-[#70DB3E]/20 group-hover:scale-110 transition-all duration-300">
                        {tier.referrals === 1 ? (
                          <Share2 className="w-6 h-6 text-[#70DB3E]" />
                        ) : tier.referrals === 3 ? (
                          <BookOpen className="w-6 h-6 text-[#70DB3E]" />
                        ) : (
                          <Gift className="w-6 h-6 text-[#70DB3E]" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-[#70DB3E] transition-colors duration-300">{tier.reward}</h4>
                        <p className="text-gray-500 text-sm">{tier.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#70DB3E]">
                        {tier.referrals}
                      </p>
                      <p className="text-gray-500 text-xs">referrals</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#70DB3E] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(112,219,62,0.5)]"
                      style={{ width: `${Math.min(100, (0 / tier.referrals) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Post-Launch Note */}
            <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl border border-[#222222]">
              <p className="text-gray-400 text-sm">
                <span className="text-white">Note:</span> {affiliateData.postLaunchNote}
              </p>
            </div>
            
            {/* CTA */}
            <Button
              onClick={onJoinWaitlist}
              className="w-full mt-6 bg-[#70DB3E] text-black hover:bg-[#5BC236] font-bold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(112,219,62,0.5)] hover:-translate-y-1 group"
            >
              Start Referring Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
