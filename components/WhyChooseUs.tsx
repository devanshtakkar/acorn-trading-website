import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Smartphone, TrendingUp, Wallet, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Safety & Transparency',
      description: 'Complete transparency and security with clear trading signals.'
    },
    {
      icon: Smartphone,
      title: 'No Extra Hardware',
      description: 'Trade effortlessly from anywhere using just your mobile device.'
    },
    {
      icon: TrendingUp,
      title: 'Expert Signals',
      description: 'Professional traders analyze market trends for reliable entries.'
    },
    {
      icon: Wallet,
      title: 'No Initial Fees',
      description: 'Start trading immediately without any upfront costs.'
    },
    {
      icon: Award,
      title: 'Trustworthiness',
      description: 'Built on reliability and integrity for a secure trading environment.'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile and update radius
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate container size for connecting lines
  useEffect(() => {
    if (containerRef.current) {
      const updateContainerSize = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        setCenterPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
        setContainerSize({
          width: rect.width,
          height: rect.height
        });
      };
      
      updateContainerSize();
      window.addEventListener('resize', updateContainerSize);
      return () => window.removeEventListener('resize', updateContainerSize);
    }
  }, [animationStarted]);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start animations after a brief delay
            setTimeout(() => {
              setAnimationStarted(true);
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate positions for circular elements in a radial pattern
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180); // Start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const getLineStyle = (index: number) => {
  const angle = (index * (360 / features.length)) - 90;
  const length = radius - cardRadius - (isMobile ? 90 : 120);

  return {
    width: `${length}px`,
    height: '2px',
    transform: `rotate(${angle}deg)`,
    transformOrigin: '0 50%',
    left: '50%',
    top: '50%',
  };
};

  const radius = isMobile ? 150 : 280; // Distance from center to circular elements
  const cardRadius = isMobile ? 64 : 104; // Half of card width (w-32=64, lg:w-52=104)
  // Central image dimensions (w-32 h-40 lg:w-40 lg:h-52)
  const centralImageWidth = isMobile ? 64 : 80; // Half of width (128/2=64, 160/2=80)
  const centralImageHeight = isMobile ? 80 : 104; // Half of height (160/2=80, 208/2=104)

  return (
    <section 
      id="why-us"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto bg-[#f8f9fa] overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-black font-semibold text-sm mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Award size={16} />
          Why Choose Us
        </div>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-veridian-900 mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          The Verdant Trade<br />
          <span className="text-black">Advantage</span>
        </h2>
        <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Experience the difference with our industry-leading features designed for your success.
        </p>
      </div>

      {/* Radial Animation Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[400px] md:h-[700px] lg:h-[800px] mx-auto"
      >
        {/* Connecting Lines */}
{features.map((_, index) => {
  const delay = animationStarted ? 700 + index * 200 : 0;

  return (
    <div
      key={`line-${index}`}
      className="absolute bg-lime-glow"
      style={{
        ...getLineStyle(index),
        opacity: animationStarted ? 1 : 0,
        transition: 'opacity 0.6s ease, transform 1s ease',
        transitionDelay: `${delay}ms`,
      }}
    />
  );
})}



        {/* Central Hub Image */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative">
            {/* Central Image */}
            <img
              src="/assets/squirrel.png"
              alt="Verdant Trade Squirrel Mascot"
              className="relative w-32 h-40 lg:w-44 lg:h-60 rounded-full object-center shadow-2xl bg-white"
            />
          </div>
        </div>

        {/* Circular Feature Elements */}
        {features.map((feature, index) => {
          const pos = getCircularPosition(index, features.length, radius);
          const animationDelay = animationStarted ? 1000 + (index * 250) : 0;
          
          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 transform transition-all duration-800 ease-out ${animationStarted ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                transitionDelay: `${animationDelay}ms`
              }}
            >
              {/* Circular Text Box */}
              <div className="relative group">
                {/* Outer glow on hover */}
                <div 
                  className={`absolute inset-0 bg-lime-glow rounded-full blur-xl transition-all duration-500 opacity-0 group-hover:opacity-50`}
                  style={{ width: '180px', height: '180px', marginLeft: '-10px', marginTop: '-10px' }}
                />
                
                {/* Main circular card */}
                <div
                  className="relative w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full bg-white shadow-xl border-2 border-gray-100 flex flex-col items-center justify-center p-2 md:p-4 text-center transition-all duration-500 hover:scale-110 hover:border-lime-glow hover:shadow-2xl cursor-pointer overflow-hidden"
                >
                  {/* Icon - Hidden on mobile */}
                  <div className="relative z-10 hidden md:flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lime-glow to-green-400 items-center justify-center mb-2 shadow-lg">
                    <feature.icon size={20} className="text-veridian-900" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative z-10 text-black font-bold text-xs md:text-sm lg:text-base mb-1 line-clamp-2">
                    {feature.title}
                  </h3>
                  
                  {/* Description - truncated */}
                  <p className="relative z-10 text-gray-600 text-[10px] md:text-xs leading-tight line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-lime-glow to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className={`relative z-10 text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2500ms' }}>
        <p className="text-gray-500 text-sm mb-4">
          Ready to experience the Verdant advantage?
        </p>
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello! I'm interested in learning more about Verdant Trade."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-lime-glow text-veridian-900 text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(159,232,112,0.4)] inline-block"
        >
          Get Started Today
        </a>
      </div>

      {/* Custom CSS for line-clamp utility */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
