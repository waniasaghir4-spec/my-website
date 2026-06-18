import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Laurent',
    role: 'Founder, Lumière Skincare',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    review:
      'Webora Studio completely transformed our online presence. Our website is now a true reflection of our brand — elegant, functional, and converting. Sales increased 140% within the first two months.',
    rating: 5,
    highlight: '140% sales increase',
  },
  {
    name: 'Isabelle Chen',
    role: 'CEO, Maison Flore',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    review:
      'The social media strategy they built for us was beyond anything we imagined. Our Instagram grew from 2K to 28K followers in just 4 months. The quality of engagement is remarkable.',
    rating: 5,
    highlight: '2K → 28K followers',
  },
  {
    name: 'Camille Rousseau',
    role: 'Director, Serenité Wellness',
    photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    review:
      'Working with Webora Studio felt effortless. They truly understood our vision and brought it to life with a sophistication I didn\'t know was possible at this price point. Worth every penny.',
    rating: 5,
    highlight: 'Effortless collaboration',
  },
  {
    name: 'Amara Osei',
    role: 'Creative Director, Bloom & Co.',
    photo: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    review:
      'Our e-commerce site is absolutely stunning. Customer dwell time doubled, cart abandonment dropped significantly, and we finally feel like a luxury brand online. Webora delivered perfection.',
    rating: 5,
    highlight: '2x customer dwell time',
  },
  {
    name: 'Élise Moreau',
    role: 'Founder, Atelier Mode',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    review:
      'I\'ve worked with several agencies before, but Webora Studio is in a different league entirely. Their attention to detail, responsiveness, and creative vision are unmatched. I\'m a client for life.',
    rating: 5,
    highlight: 'A client for life',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" fill="none" width={14} height={14}>
          <path
            d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
            fill="#C9A55A"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FEF5F7 0%, #FAF4F0 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F4A8C0 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F9E8CE 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">Client Love</span>
          <h2
            className="font-serif text-5xl md:text-6xl font-light mt-4 leading-tight"
            style={{ color: '#2A1209' }}
          >
            What Our Clients
            <br />
            <em style={{ color: '#C4506F' }}>Are Saying</em>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className={`fade-in-section fade-in-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <div
            className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: 'rgba(253, 245, 247, 0.75)',
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute top-8 right-10 opacity-10"
              style={{ color: '#C4506F' }}
            >
              <Quote size={80} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              {/* Left: photo + info */}
              <div className="flex flex-col items-center md:items-start gap-4 flex-shrink-0">
                <div className="relative">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover"
                    style={{
                      boxShadow: '0 4px 20px rgba(196, 80, 111, 0.25)',
                      border: '2px solid rgba(244, 168, 192, 0.5)',
                    }}
                  />
                  <div
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #C4506F, #E85E88)' }}
                  >
                    <svg viewBox="0 0 10 10" fill="white" width={10} height={10}>
                      <path d="M5 1L6 4H9L6.5 6L7.5 9L5 7L2.5 9L3.5 6L1 4H4L5 1Z" />
                    </svg>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="font-serif text-lg font-medium" style={{ color: '#2A1209' }}>
                    {t.name}
                  </p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: '#BF9070' }}>
                    {t.role}
                  </p>
                  <div className="mt-2">
                    <StarRating count={t.rating} />
                  </div>
                </div>

                {/* Highlight badge */}
                <div
                  className="px-4 py-1.5 rounded-full font-sans text-xs font-medium"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201, 165, 90, 0.15), rgba(245, 216, 118, 0.2))',
                    color: '#A8842D',
                    border: '1px solid rgba(201, 165, 90, 0.3)',
                  }}
                >
                  {t.highlight}
                </div>
              </div>

              {/* Right: review text */}
              <div className="flex-1">
                <p
                  className="font-serif text-xl md:text-2xl font-light italic leading-relaxed"
                  style={{ color: '#3D1C0F' }}
                >
                  "{t.review}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 28 : 8,
                    height: 8,
                    background: i === active
                      ? 'linear-gradient(90deg, #C4506F, #C9A55A)'
                      : 'rgba(196, 80, 111, 0.2)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(196, 80, 111, 0.3)',
                  color: '#C4506F',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(196, 80, 111, 0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C4506F, #E85E88)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(196, 80, 111, 0.3)',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 fade-in-section fade-in-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className="p-4 rounded-2xl text-left transition-all duration-300"
              style={{
                background: i === active
                  ? 'linear-gradient(135deg, rgba(196, 80, 111, 0.1), rgba(244, 168, 192, 0.15))'
                  : 'rgba(253, 245, 247, 0.5)',
                border: i === active
                  ? '1.5px solid rgba(196, 80, 111, 0.25)'
                  : '1.5px solid rgba(244, 168, 192, 0.2)',
              }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover mb-2"
              />
              <p className="font-sans text-xs font-medium" style={{ color: '#2A1209' }}>
                {item.name.split(' ')[0]}
              </p>
              <p className="font-sans text-xs mt-0.5 truncate" style={{ color: '#BF9070' }}>
                {item.role.split(',')[1]?.trim() || item.role}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
