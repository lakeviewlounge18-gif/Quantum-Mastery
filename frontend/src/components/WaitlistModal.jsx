import React, { useState } from 'react';
import { X, ArrowRight, Check, Loader2, Gift, BookOpen, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner',
    referralCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', experience: 'beginner', referralCode: '' });
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111111] border-[#1a1a1a] text-white max-w-md sm:rounded-2xl">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                Join the Waiting List
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Be the first to know when Quantum Trading Mastery launches on February 1st, 2026.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#1a1a1a] border-2 border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#1a1a1a] border-2 border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              {/* Experience Select */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trading Experience
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-[#1a1a1a] border-2 border-[#222222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#70DB3E] transition-colors appearance-none cursor-pointer"
                >
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Referral Code Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                  className="w-full bg-[#1a1a1a] border-2 border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] transition-colors"
                  placeholder="Enter referral code"
                />
              </div>

              {/* Benefits */}
              <div className="bg-[#1a1a1a] rounded-xl p-4 space-y-2 border border-[#222222]">
                <p className="text-sm font-medium text-white mb-3">What you'll get:</p>
                {[
                  { icon: Gift, text: 'Early bird 25% discount' },
                  { icon: Users, text: 'Refer 5 friends = 50% OFF' },
                  { icon: BookOpen, text: 'Free Trading Ebook' },
                  { icon: Check, text: 'Priority enrollment access' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <benefit.icon className="w-4 h-4 text-[#70DB3E]" />
                    <span className="text-sm text-gray-400">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#70DB3E] text-black hover:bg-[#5BC236] font-bold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,219,62,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waiting List
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to receive updates about Quantum Trading Mastery.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#70DB3E]/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#70DB3E]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-gray-400">
              Check your email for a confirmation and your unique referral link.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
