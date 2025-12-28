import React from 'react';
import { Gift, Users, Share2, BookOpen, ArrowRight, Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { affiliateData, spotsClaimed } from '../data/mock';

const AffiliateSection = ({ onJoinWaitlist }) => {
  return (
    <section id="affiliates" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(186,85,211)]/10 border border-[rgb(186,85,211)]/30 mb-6">
            <Gift className="w-4 h-4 text-[rgb(186,85,211)]" />
            <span className="text-[rgb(186,85,211)] text-sm font-medium">{affiliateData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Refer Friends, <span className="bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] bg-clip-text text-transparent">Earn Rewards</span>
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
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
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(0,212,255)] to-[rgb(186,85,211)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Share Your Link</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Get your unique referral link and share it with friends, family, or on social media.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(0,212,255)] to-[rgb(186,85,211)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Friends Join Waitlist</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">When your friends sign up using your link, they're added to your referral count.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(0,212,255)] to-[rgb(186,85,211)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Unlock Rewards</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Reach milestones to unlock discounts, bonuses, and commissions!</p>
                </div>
              </div>
            </div>
            
            {/* Pre-Launch Bonus Banner */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 rounded-2xl border border-[rgb(0,212,255)]/30">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold mb-2">Pre-Launch Special!</h4>
                  <p className="text-[rgb(218,218,218)] text-sm">
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
                  className="bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl p-6 transition-all hover:border-[rgb(0,212,255)]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(0,212,255)]/20 to-[rgb(186,85,211)]/20 flex items-center justify-center">
                        {tier.referrals === 1 ? (
                          <Share2 className="w-6 h-6 text-[rgb(0,212,255)]" />
                        ) : tier.referrals === 3 ? (
                          <BookOpen className="w-6 h-6 text-[rgb(0,212,255)]" />
                        ) : (
                          <Gift className="w-6 h-6 text-[rgb(186,85,211)]" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{tier.reward}</h4>
                        <p className="text-[rgb(161,161,170)] text-sm">{tier.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] bg-clip-text text-transparent">
                        {tier.referrals}
                      </p>
                      <p className="text-[rgb(161,161,170)] text-xs">referrals</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-[rgb(38,40,42)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (0 / tier.referrals) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Post-Launch Note */}
            <div className="mt-6 p-4 bg-[rgb(38,40,42)] rounded-xl">
              <p className="text-[rgb(161,161,170)] text-sm">
                <span className="text-white">Note:</span> {affiliateData.postLaunchNote}
              </p>
            </div>
            
            {/* CTA */}
            <Button
              onClick={onJoinWaitlist}
              className="w-full mt-6 bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] text-white hover:opacity-90 font-semibold py-6 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] group"
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
