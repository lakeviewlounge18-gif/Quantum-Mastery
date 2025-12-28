import React from 'react';
import { Play, Layers, Users, Crown, Check, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { packagesData } from '../data/mock';

const iconMap = {
  play: Play,
  layers: Layers,
  users: Users,
  crown: Crown,
};

const PackagesSection = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {packagesData.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {packagesData.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.packages.map((pkg) => {
            const IconComponent = iconMap[pkg.ctaIcon] || Play;
            return (
              <div
                key={pkg.id}
                className={`group relative bg-[#111111] rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                  pkg.highlight 
                    ? 'border-2 border-[#70DB3E] shadow-[0_0_50px_rgba(112,219,62,0.2)]' 
                    : 'border border-[#1a1a1a] hover:border-[#70DB3E]/50 hover:shadow-[0_0_40px_rgba(112,219,62,0.15)]'
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    pkg.badge === 'Mastery' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                      : pkg.badge === 'Best Value'
                      ? 'bg-[#70DB3E] text-black'
                      : 'bg-[#70DB3E]/20 text-[#70DB3E] border border-[#70DB3E]/30'
                  }`}>
                    {pkg.badge === 'Mastery' && <Star className="w-3 h-3 inline mr-1" />}
                    {pkg.badge}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pt-4">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    pkg.highlight ? 'bg-[#70DB3E]/20' : 'bg-[#1a1a1a] group-hover:bg-[#70DB3E]/20'
                  }`}>
                    <IconComponent className={`w-7 h-7 ${
                      pkg.highlight ? 'text-[#70DB3E]' : 'text-gray-400 group-hover:text-[#70DB3E]'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#70DB3E] transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold ${
                      pkg.price === 'Free' ? 'text-[#70DB3E]' : 'text-white'
                    }`}>
                      {pkg.price}
                    </span>
                    {pkg.priceNote && (
                      <span className="text-gray-500 text-sm ml-1">{pkg.priceNote}</span>
                    )}
                  </div>
                  {pkg.note && (
                    <p className="text-gray-500 text-xs">{pkg.note}</p>
                  )}
                </div>

                {/* Supporting Line */}
                <p className="text-gray-400 text-sm text-center mb-6 min-h-[48px]">
                  {pkg.supportingLine}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {pkg.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#70DB3E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 6 && (
                    <div className="text-center">
                      <span className="text-[#70DB3E] text-sm cursor-pointer hover:underline">
                        +{pkg.features.length - 6} more features
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => onSelectPackage && onSelectPackage(pkg)}
                  className={`w-full font-bold py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 group/btn ${
                    pkg.highlight || pkg.badge === 'Mastery'
                      ? 'bg-[#70DB3E] text-black hover:bg-[#5BC236] hover:shadow-[0_0_30px_rgba(112,219,62,0.5)]'
                      : 'bg-[#1a1a1a] text-white hover:bg-[#70DB3E] hover:text-black hover:shadow-[0_0_20px_rgba(112,219,62,0.4)]'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
