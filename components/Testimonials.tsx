import React, { useState } from 'react';
import { Play, Quote, X } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);

  const featuredTestimonial = {
    id: 1,
    name: 'Alice',
    role: 'Day Trader',
    video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
    thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
  };

  return (
    <section id="testimonials" className="relative w-full py-20 md:py-32 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-veridian-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-lime-glow/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Two-Column Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center  ">
          {/* Left Column: Heading and Descriptive Text */}
          <div className="order-1 lg:order-1 animate-slide-up">
            {/* Section Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veridian-100 border border-veridian-300 text-veridian-700 font-semibold text-sm">
                <Quote size={16} />
                Testimonials
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-veridian-900 mb-6">
              What Clients Say About Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of satisfied traders who have transformed their financial future with Verdant Trade. Our platform provides the tools and support you need to succeed in the competitive world of trading.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lime-glow flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-veridian-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Real-time trade copying with professional traders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lime-glow flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-veridian-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Transparent performance tracking and analytics</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lime-glow flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-veridian-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Dedicated support and community of successful traders</p>
              </div>
            </div>
            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello! I'm interested in joining Verdant Trade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-lime-glow text-veridian-900 text-base md:text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(159,232,112,0.4)]"
            >
              Start Your Journey Now
            </a>
          </div>

          {/* Right Column: Video Card Component */}
          <div className="order-2 lg:order-2   animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
              {/* Video Card */}
              <div className="relative aspect-[4/5] overflow-hidden ">
                {playingVideo ? (
                  <>
                    {/* Video Player */}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      controls
                      onEnded={() => setPlayingVideo(false)}
                    >
                      <source src={featuredTestimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Close Button */}
                    <button
                      onClick={() => setPlayingVideo(false)}
                      className="absolute top-4 right-4 w-10 h-10 bg-veridian-900/80 rounded-full flex items-center justify-center text-white transition-colors hover:bg-veridian-900 z-10"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    {/* Thumbnail Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${featuredTestimonial.thumbnail})` }}
                    />
                    
                    {/* Play Button */}
                    <button
                      onClick={() => setPlayingVideo(true)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative group/play">
                        <div className="absolute inset-0 bg-lime-glow rounded-full blur-xl opacity-0 group-hover/play:opacity-60 transition-opacity duration-300" />
                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-lime-glow rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110 shadow-lg">
                          <Play
                            size={32}
                            className="text-veridian-900 fill-veridian-900 ml-1"
                            strokeWidth={3}
                          />
                        </div>
                      </div>
                    </button>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-glow to-veridian-500 flex items-center justify-center text-veridian-900 font-bold text-lg">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-veridian-900 font-semibold text-base md:text-lg">
                      {featuredTestimonial.name}
                    </h4>
                    <p className="text-veridian-600 text-sm md:text-base">
                      {featuredTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="relative z-10 text-center mt-12 md:mt-16">
          <p className="text-gray-500 text-sm">
            Join our community of successful traders today
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
