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
      <div className="absolute inset-0 bg-[rgb(17,17,19)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {faqData.title}
          </h2>
          <p className="text-[rgb(161,161,170)] text-lg">
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl overflow-hidden data-[state=open]:border-[rgb(0,212,255)]/50 transition-colors"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-white hover:text-[rgb(0,212,255)] hover:no-underline transition-colors [&[data-state=open]>svg]:text-[rgb(0,212,255)]">
                <span className="text-lg font-medium pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-[rgb(218,218,218)] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-[rgb(161,161,170)] mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#chatbot"
            className="inline-flex items-center gap-2 text-[rgb(0,212,255)] font-medium hover:underline"
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
