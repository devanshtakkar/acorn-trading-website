import React, { useState } from 'react';
import { Play, Quote, X } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 2,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 3,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 4,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 5,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 6,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 7,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    },
    {
      id: 8,
      name: 'Alice',
      role: 'Day Trader',
      video: 'https://global.divhunt.com/70d92b90bb5d3df31dd99221ec99e21a_3618543.mp4',
      thumbnail: 'https://cdn.prod.website-files.com/671580b4970a34a2b75cd55e/6719a5681505503c09dbe1b8_Project_copy_2024-04-12-17-02-28_2024-10-24_04.14.58.avif'
    }
  ];

  return (
    <section id="testimonials" className="relative w-full py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto bg-[#f8f9fa]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-veridian-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-lime-glow/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veridian-100 border border-veridian-300 text-veridian-700 font-semibold text-sm mb-6">
          <Quote size={16} />
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-veridian-900 mb-4">
          What Clients Say About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied traders who have transformed their financial future with Verdant Trade.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 "
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Video Card */}
            <div className="relative aspect-[11/14] overflow-hidden bg-gray-900">
              {playingVideo === testimonial.id ? (
                <>
                  {/* Video Player */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Close Button */}
                  <button
                    onClick={() => setPlayingVideo(null)}
                    className="absolute top-4 right-4 w-10 h-10  rounded-full flex items-center justify-center text-white transition-colors z-10"
                  >
                    <X size={20} />
                  </button>
                </>
              ) : (
                <>
                  {/* Thumbnail Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
                  />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setPlayingVideo(testimonial.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative group/play">
                      <div className="absolute inset-0 bg-lime-glow rounded-full blur-xl opacity-0 group-hover/play:opacity-60 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-lime-glow rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110">
                        <Play
                          size={28}
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
            <div className="p-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-glow to-veridian-500 flex items-center justify-center text-veridian-900 font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-veridian-900 font-semibold text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-veridian-600 text-xs md:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-16">
        <p className="text-gray-500 text-sm mb-4">
          Join 15,000+ successful traders today
        </p>
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello! I'm interested in joining Verdant Trade."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-lime-glow text-veridian-900 text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(159,232,112,0.4)]"
        >
          Start Your Journey Now
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
