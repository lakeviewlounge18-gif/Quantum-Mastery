import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqData } from '../data/mock';

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {faqData.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden data-[state=open]:border-[#70DB3E]/50 data-[state=open]:shadow-[0_0_30px_rgba(112,219,62,0.1)] transition-all duration-300 hover:border-[#70DB3E]/30"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-white hover:text-[#70DB3E] hover:no-underline transition-colors [&[data-state=open]>svg]:text-[#70DB3E] [&[data-state=open]]:text-[#70DB3E]">
                <span className="text-lg font-medium pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#chatbot"
            className="inline-flex items-center gap-2 text-[#70DB3E] font-medium hover:underline hover:drop-shadow-[0_0_10px_rgba(112,219,62,0.5)] transition-all duration-300"
          >
            Chat with our assistant
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
