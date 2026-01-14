import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Copy, CheckCircle } from 'lucide-react';

const HowToCopyTrades: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

    const steps = [
    {
      number: '01',
      title: 'Copying with Verdant Trading ',
      description: 'Daily shared trades with real-time updates on entry and exit points. Receive instant notifications when new trade opportunities arise, ensuring you never miss a profitable move.',
      icon: TrendingUp,
      image: '/assets/step1.png'
    },
    {
      number: '02',
      title: 'Copy My Trades',
      description: 'Copy trades into your own account to replicate positions. Simply follow our clear instructions and execute the same trades with one click, matching our professional traders\' positions.',
      icon: Copy,
      image: 'assets/step2.png'
    },
    {
      number: '03',
      title: 'SEE RESULTS QUICKLY',
      description: 'Automatic closure at Take Profit or Stop Loss levels. 82.2% of shared trades were profitable in 2024. Watch your account grow as our proven strategy delivers consistent results.',
      icon: CheckCircle,
      image: 'assets/step3.png'
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

  return (
    <section
      ref={sectionRef}
      id="how-to-copy-trades"
      className={`relative w-full py-24 bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
      {/* Three Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-veridian-900">
              How to Copy Our Proven Trades
            </h2>
            <p className="text-gray-600 mt-4 lg:mt-6">
              Become a consistent day trader from your first day, even if you don't have any prior experience. Just follow these 3 easy steps:
            </p>
          </div>
        </div>

        {/* Center + Right Columns: All instruction cards spanning both columns */}
        <div className="lg:col-span-8">
          <div className="relative h-[200vh]">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{ position: 'sticky', top: `${96 + index * 24}px`, zIndex: 10 + index }}
                className="mb-4"
              >
                <div className="bg-gradient-to-br from-veridian-900 to-veridian-800 rounded-3xl shadow-2xl overflow-hidden border border-lime-glow/20 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px] lg:min-h-[350px]">
                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-10 text-white flex flex-col justify-center">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <step.icon className="text-lime-glow" size={28} />
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base lg:text-base">{step.description}</p>
                    </div>

                    {/* Image */}
                    <div className="relative min-h-[250px] lg:min-h-[350px] w-full overflow-hidden bg-veridian-800/50">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 lg:mt-24">
        <a
          href="#"
          className="px-10 py-4 bg-lime-glow text-veridian-900 font-bold rounded-full hover:scale-105 transition"
        >
          Start Copying Trades
        </a>
      </div>
      </div>
    </section>
  );
};

export default HowToCopyTrades;
