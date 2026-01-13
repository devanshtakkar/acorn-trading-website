import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, TrendingDown, DollarSign, ShieldAlert, Brain } from 'lucide-react';

export default function RiskWarning() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = contentRef.current?.querySelectorAll('section');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-veridian-950 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4" ref={contentRef}>
        {/* Header */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-lime-glow hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-veridian-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-veridian-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 p-3 rounded-xl text-white">
              <AlertTriangle size={28} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Risk Warning</h1>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <p className="text-red-400 font-semibold leading-relaxed">
              ⚠️ IMPORTANT: Please read this risk warning carefully before using Verdant.io services.
            </p>
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Trading financial instruments involves significant risk and may not be suitable for all investors. This risk warning outlines the key risks associated with trading and using our copy trading services.
          </p>

          {/* Content Sections */}
          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <TrendingDown size={20} className="text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">1. High Risk of Loss</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              Trading in financial markets carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
            <div className="bg-veridian-800/50 rounded-lg p-4 pl-11">
              <p className="text-lime-glow font-semibold mb-2">Key Points:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• You may lose more than your initial investment</li>
                <li>• Past performance is not indicative of future results</li>
                <li>• Market conditions can change rapidly</li>
                <li>• There is no guarantee of profit</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <DollarSign size={20} className="text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">2. Leverage Risks</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              Trading on margin involves high risk and is not suitable for all investors. The degree of leverage available can lead to large losses as well as gains.
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Higher leverage magnifies both profits and losses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                A small market movement can result in substantial losses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                You may be required to deposit additional funds (margin call)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Positions may be forcibly closed at a loss
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <ShieldAlert size={20} className="text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">3. Copy Trading Risks</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              Copy trading involves replicating the trades of other traders. This carries additional risks:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                The trader you copy may perform poorly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Historical results may not be representative
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Risk management strategies may not align with yours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Technical issues may delay or prevent trade execution
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                The copied trader may change their strategy
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Brain size={20} className="text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">4. Psychological Risks</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              Trading can be emotionally challenging and may lead to:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Stress and anxiety from market volatility
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Fear of missing out (FOMO) leading to impulsive decisions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Revenge trading after losses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Overconfidence after winning streaks
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <h2 className="text-xl font-bold text-white mb-4">5. Technical and Operational Risks</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Internet connectivity issues may affect trade execution
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Platform downtime or technical failures
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Data delays or inaccuracies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Cybersecurity threats
              </li>
            </ul>
          </section>

          <section className="opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <h2 className="text-xl font-bold text-white mb-4">6. Disclaimer</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Verdant.io provides educational materials and copy trading services for informational purposes only. We are not financial advisors and do not provide personalized investment advice. All trading decisions are your sole responsibility.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              <strong>By using our services, you acknowledge that you:</strong>
            </p>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Understand the risks involved in trading
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Are trading with funds you can afford to lose
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Have read and understood this risk warning
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Release Verdant.io from any liability for trading losses
              </li>
            </ul>
          </section>

          {/* Final Warning Box */}
          <div className="mt-10 bg-red-500/20 border-2 border-red-500 rounded-xl p-6 opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <p className="text-white font-bold text-lg mb-2">
              If you do not fully understand these risks, please seek independent financial advice before trading.
            </p>
            <p className="text-gray-400">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
