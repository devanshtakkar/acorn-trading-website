import React from 'react';
import Calculator from './Calculator';
import { ShieldCheck, Zap, Users, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full py-20 md:py-28 flex flex-col lg:flex-row items-start gap-8 lg:gap-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-8">

      {/* Text Content */}
      <div className="flex-1 space-y-8 animate-slide-up text-center lg:text-left z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-glow/10 border border-lime-glow/20 text-lime-glow font-semibold text-sm animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
          </span>
          4+ Years of Proven Excellence
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Your Money, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-glow to-teal-200">
            On Autopilot.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Join the premier copy trading community. Mirror the trades of top-performing experts automatically. 
          <span className="text-white font-semibold"> 100% Free of charge services</span> for our members.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <a
            href="https://wa.me/8219890171?text=Hello! I'm interested in starting copy trading with Verdant Trade."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-red-500 text-white text-lg font-bold rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 group"
          >
            Start Copying Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#results"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-veridian-500 text-white text-lg font-semibold rounded-full hover:border-lime-glow hover:text-lime-glow transition-all duration-300"
          >
            View Performance
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-veridian-600/50">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <ShieldCheck className="text-lime-glow" size={24} />
              <span>Secure</span>
            </div>
            <p className="text-sm text-gray-400">Audited & Verified</p>
          </div>
          
          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Users className="text-lime-glow" size={24} />
              <span>15k+</span>
            </div>
            <p className="text-sm text-gray-400">Active Members</p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Zap className="text-lime-glow" size={24} />
              <span>Instant</span>
            </div>
            <p className="text-sm text-gray-400">Execution Speed</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-400">
             <CheckCircle2 size={14} className="text-lime-glow" /> No credit card required
             <span className="mx-2">•</span>
             <CheckCircle2 size={14} className="text-lime-glow" /> Cancel anytime
        </div>
      </div>

      {/* Visual/Interactive Content */}
      <div className="flex-1 w-full relative z-10 animate-float">
        <div className="relative">
             {/* Decorative Elements behind calculator */}
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-24 h-24 bg-gradient-to-br from-lime-400 to-transparent rounded-full opacity-20 blur-xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-32 h-32 bg-veridian-500 rounded-full opacity-20 blur-2xl pointer-events-none" />
            
            <Calculator />

            {/* Floating Badge */}
            <div className="absolute top-1/2 right-4 md:right-8 bg-white p-4 rounded-2xl shadow-xl transform -translate-y-1/2 rotate-3 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase">Total Profit</p>
                        <p className="text-lg font-bold text-gray-900">+$2.4M</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;