import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Clock, DollarSign, User } from 'lucide-react';

const PersonalResults: React.FC = () => {
  const results = [
    {
      id: 1,
      name: 'Michael Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      initialInvestment: 5000,
      totalProfit: 24500,
      duration: '6 months',
      dailyTime: '15 min'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      initialInvestment: 2500,
      totalProfit: 12800,
      duration: '4 months',
      dailyTime: '10 min'
    },
    {
      id: 3,
      name: 'David Williams',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      initialInvestment: 10000,
      totalProfit: 52000,
      duration: '8 months',
      dailyTime: '20 min'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      initialInvestment: 3500,
      totalProfit: 18200,
      duration: '5 months',
      dailyTime: '12 min'
    },
    {
      id: 5,
      name: 'James Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      initialInvestment: 7500,
      totalProfit: 38500,
      duration: '7 months',
      dailyTime: '18 min'
    },
    {
      id: 6,
      name: 'Amanda Foster',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda',
      initialInvestment: 2000,
      totalProfit: 9800,
      duration: '3 months',
      dailyTime: '8 min'
    },
    {
      id: 7,
      name: 'Robert Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      initialInvestment: 15000,
      totalProfit: 78000,
      duration: '10 months',
      dailyTime: '25 min'
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      initialInvestment: 4000,
      totalProfit: 21000,
      duration: '5 months',
      dailyTime: '14 min'
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!container) return;
      scrollPosition += 1;
      
      // Calculate total width and reset for infinite loop
      const scrollWidth = container.scrollWidth / 3;
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
        container.scrollLeft = scrollPosition;
      } else {
        container.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAutoScrolling]);

  // Drag handlers for swipe navigation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    setIsAutoScrolling(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // Duplicate array for seamless infinite scroll
  const duplicatedResults = [...results, ...results, ...results];

  return (
    <section id="results" className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-veridian-900/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-lime-glow/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-glow/10 border border-lime-glow/20 text-lime-glow font-semibold text-sm mb-6">
          <TrendingUp size={16} />
          Real Results
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
          See What Our Members<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-glow to-teal-200">
            Have Achieved
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Real people, real profits. Join thousands of successful traders who are growing their wealth with our proven strategies.
        </p>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative z-10">
        {/* Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className={`flex overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedResults.map((result, index) => (
            <div
              key={`${result.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-3 md:mx-4 glass-panel rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(159,232,112,0.2)] hover:border-lime-glow/30 select-none"
            >
              {/* Profile Header with ROI */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={result.avatar}
                      alt={result.name}
                      className="w-12 h-12 rounded-full border-2 border-lime-glow/30"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">
                      {result.name}
                    </h4>
                  </div>
                </div>
                {/* ROI Badge */}
                <div className="text-lime-glow font-bold text-sm md:text-base">
                  {Math.round((result.totalProfit / result.initialInvestment) * 100)}% ROI
                </div>
              </div>

              {/* Stats Grid - Two Columns */}
              <div className="grid grid-cols-2 gap-4">
                {/* Initial Investment */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} className="text-veridian-400" />
                    <span className="text-gray-400 text-xs">Initial Investment</span>
                  </div>
                  <span className="text-white font-bold text-sm md:text-base">
                    ${result.initialInvestment.toLocaleString()}
                  </span>
                </div>

                {/* Total Profit */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-lime-glow" />
                    <span className="text-gray-300 text-xs">Total Profit</span>
                  </div>
                  <span className="text-lime-glow font-bold text-sm md:text-base">
                    +${result.totalProfit.toLocaleString()}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-veridian-400" />
                    <span className="text-gray-400 text-xs">Duration</span>
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base">
                    {result.duration}
                  </span>
                </div>

                {/* Daily Time */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-veridian-400" />
                    <span className="text-gray-400 text-xs">Daily Time</span>
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base">
                    {result.dailyTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </div>
    </section>
  );
};

export default PersonalResults;
