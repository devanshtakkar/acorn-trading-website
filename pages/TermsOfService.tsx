import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, AlertCircle, Users, Globe } from 'lucide-react';

export default function TermsOfService() {
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
            <div className="bg-lime-glow p-3 rounded-xl text-veridian-900">
              <FileText size={28} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Welcome to Verdant.io. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          {/* Content Sections */}
          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Users size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11">
              By accessing and using Verdant.io, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Shield size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">2. User Responsibilities</h2>
            </div>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Provide accurate and complete information when creating an account
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Maintain the security of your account credentials
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Use our services for lawful purposes only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Not attempt to gain unauthorized access to our systems
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <AlertCircle size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">3. Trading Services</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              Verdant.io provides copy trading services and educational materials. Please note:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Past performance does not guarantee future results
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Trading involves significant risk of loss
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Only trade with funds you can afford to lose
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                We are not financial advisors
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Globe size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11">
              All content, trademarks, and materials on Verdant.io are owned by Verdant.io and protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              Verdant.io shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <h2 className="text-xl font-bold text-white mb-4">6. Termination</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <h2 className="text-xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. All changes are effective immediately when we post them. Your continued use of the service following the posting of revised terms means that you accept and agree to the changes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Last updated: January 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
