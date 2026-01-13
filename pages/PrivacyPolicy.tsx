import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Cookie, Mail, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield size={28} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed">
            At Verdant.io, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
          </p>

          {/* Content Sections */}
          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Database size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              We collect the following types of information:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Personal Information:</strong> Name, email address, phone number
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Account Information:</strong> Username, password (encrypted)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Trading Data:</strong> Account balances, transaction history
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Usage Data:</strong> Pages visited, time spent, device information
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Eye size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              We use your information to:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Provide and improve our trading services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Process transactions and manage your account
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Send important notifications and updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Analyze usage patterns to enhance user experience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Comply with legal obligations
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Lock size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">3. Data Security</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                SSL/TLS encryption for all data transmission
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Encrypted password storage using bcrypt
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Regular security audits and updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Restricted access to personal data
              </li>
            </ul>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Cookie size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">4. Cookies</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11 mb-4">
              We use cookies to enhance your experience:
            </p>
            <ul className="text-gray-400 leading-relaxed pl-11 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Essential Cookies:</strong> Required for basic functionality
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Analytics Cookies:</strong> Help us understand user behavior
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                <strong>Preference Cookies:</strong> Remember your settings
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed pl-11 mt-4">
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-glow/20 p-2 rounded-lg">
                <Mail size={20} className="text-lime-glow" />
              </div>
              <h2 className="text-xl font-bold text-white">5. Communication</h2>
            </div>
            <p className="text-gray-400 leading-relaxed pl-11">
              We may send you emails regarding account updates, security alerts, and promotional content. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
            </p>
          </section>

          <section className="opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Access your personal data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Request correction of inaccurate data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Request deletion of your data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Object to processing of your data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-glow mt-1">•</span>
                Data portability
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@verdant.io
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
