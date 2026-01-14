import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, TrendingUp, Clock, Smartphone, Users, AlertCircle, BarChart3, Zap, DollarSign } from 'lucide-react';

const CopyTradingComparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('copy-trading-comparison');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const copyTradingPros = [
    {
      icon: CheckCircle,
      title: 'Simple Strategy',
      description: 'Copy Our Trades for Free'
    },
    {
      icon: Users,
      title: 'Zero Experience Required',
      description: 'Perfect for Beginners'
    },
    {
      icon: Clock,
      title: 'Minimal Time Investment',
      description: 'Spend just 15-20 minutes a day managing your trades'
    },
    {
      icon: TrendingUp,
      title: 'Fast Expertise',
      description: 'Gain Trading Expertise in Just Weeks, Not Years'
    },
    {
      icon: Smartphone,
      title: 'Trade Anywhere',
      description: 'Only a Phone or Computer Needed'
    }
  ];

  const traditionalCons = [
    {
      icon: Clock,
      title: 'Time Consuming',
      description: '40+ Hours a Week? No Thanks - Keep Your Free Time'
    },
    {
      icon: BarChart3,
      title: 'Steep Learning Curve',
      description: 'Years of Experience Needed for Consistent Success'
    },
    {
      icon: AlertCircle,
      title: 'No Guarantees',
      description: 'Wasting Time Without a Guarantee of Success'
    },
    {
      icon: DollarSign,
      title: 'High Costs',
      description: 'High Costs with No Promises of Profit'
    },
    {
      icon: Zap,
      title: 'Complex Setup',
      description: 'Complex Setup & Analysis - Leave It to the Experts'
    }
  ];

  return (
    <section
      id="copy-trading-comparison"
      className="relative w-full py-20 md:py-32 bg-gradient-to-br from-veridian-700 to-veridian-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-lime-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-lime-glow/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Why Copy Trading Beats<br />
          <span className="text-lime-glow">Traditional Trading - Every Time</span>
        </h2>
      </div>

      {/* 2-Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Pros of Copy Trading */}
        <div className={`relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-lime-glow/40 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lime-glow to-green-500 flex items-center justify-center shadow-lg">
                <CheckCircle size={28} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-veridian-900">
                Pros of Copy Trading
              </h3>
            </div>

            <div className="space-y-5">
              {copyTradingPros.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-lime-glow/10 to-green-500/10 border-2 border-lime-glow/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-lime-glow ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <item.icon size={22} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-veridian-900 mb-1 group-hover:text-green-700 transition-colors">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image below Pros */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border-2 border-lime-glow/20">
              <img
                src="https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&h=400&fit=crop"
                alt="Happy trader using copy trading app"
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Cons of Trading Yourself */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-200 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg">
                <XCircle size={28} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-veridian-900">
                Cons of Trading Yourself
              </h3>
            </div>

            <div className="space-y-5">
              {traditionalCons.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <item.icon size={22} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-veridian-900 mb-1 group-hover:text-gray-700 transition-colors">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image below Cons */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&h=400&fit=crop"
                alt="Stressed trader analyzing complex charts"
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CopyTradingComparison;
