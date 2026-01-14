import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: 'What is copy trading and how does it work?',
      answer: 'Copy trading allows you to automatically replicate the trades of experienced traders in your own account. When a professional trader opens a position, the same trade is executed in your account proportionally. This enables you to benefit from their expertise without needing to analyze markets yourself.'
    },
    {
      question: 'What is the minimum amount required to start copy trading?',
      answer: 'The minimum investment amount varies depending on your broker and the specific trader you choose to copy. Generally, you can start with as little as $100-$500, though having more capital allows for better risk management and position sizing.'
    },
    {
      question: 'How much can I expect to earn from copy trading?',
      answer: 'Returns vary based on market conditions, the trader\'s performance, and your risk tolerance. While past performance doesn\'t guarantee future results, our community has seen average monthly returns of 5-15% during favorable market conditions. Always invest only what you can afford to lose.'
    },
    {
      question: 'Is my money safe when copy trading?',
      answer: 'Your funds remain in your own brokerage account at all times. You maintain full control and can stop copying at any moment. We only recommend regulated brokers with strong security measures, including negative balance protection and segregated client funds.'
    },
    {
      question: 'Can I lose money with copy trading?',
      answer: 'Yes, like any form of trading, copy trading carries risk. Markets can be unpredictable, and even the best traders experience losses. We recommend starting with smaller amounts, using proper risk management, and never investing more than you can afford to lose.'
    },
    {
      question: 'How do I choose which trader to copy?',
      answer: 'Look for traders with a proven track record, consistent performance over time, appropriate risk levels, and transparent trading history. Our platform provides detailed statistics including win rate, average profit/loss, maximum drawdown, and trading history to help you make informed decisions.'
    },
    {
      question: 'What fees are involved in copy trading?',
      answer: 'Fees typically include spreads from your broker and potentially a performance fee charged by the trader (usually a percentage of profits earned). We recommend reviewing all fee structures before committing to copy any trader.'
    },
    {
      question: 'Can I stop copy trading at any time?',
      answer: 'Absolutely! You have complete control over your copy trading settings. You can stop copying a trader immediately, close all copied positions, or adjust your investment amount at any time through your broker\'s platform.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className={`relative w-full py-24 bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <HelpCircle className="text-lime-glow" size={32} />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-veridian-900">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about copy trading, our platform, and how to get started on your trading journey.
        </p>
      </div>

      {/* FAQ Accordion - 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-veridian-50 to-white rounded-2xl shadow-lg border border-veridian-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 lg:px-8 py-5 flex items-center justify-between text-left group"
              aria-expanded={openIndex === index}
            >
              <span className="text-base lg:text-lg font-semibold text-veridian-900 pr-4 group-hover:text-lime-glow transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`text-veridian-600 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180 text-lime-glow' : ''
                }`}
                size={24}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 lg:px-8 pb-6 pt-2">
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQ;
