import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const floatingWords = ['Beautiful.', 'Strategic.', 'Memorable.'];

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="absolute"
      style={style}
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % floatingWords.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FEF5F7 0%, #FAF0EB 35%, #FDF5F0 65%, #FCF4E7 100%)',
      }}
    >
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-40 animate-float-slow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244, 168, 192, 0.5) 0%, transparent 70%)',
          top: '-15%',
          right: '-10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249, 232, 206, 0.6) 0%, transparent 70%)',
          bottom: '-10%',
          left: '-8%',
          animation: 'float 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 165, 90, 0.3) 0%, transparent 70%)',
          top: '30%',
          left: '5%',
          animation: 'float 7s ease-in-out infinite reverse',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute w-32 h-32 opacity-15 pointer-events-none decorative-blob"
        style={{
          background: 'linear-gradient(135deg, #E85E88, #C9A55A)',
          top: '20%',
          right: '18%',
          animationDuration: '12s',
        }}
      />
      <div
        className="absolute w-20 h-20 opacity-10 pointer-events-none decorative-blob"
        style={{
          background: 'linear-gradient(135deg, #C4506F, #F4A8C0)',
          bottom: '28%',
          right: '8%',
          animationDuration: '8s',
          animationDelay: '2s',
        }}
      />

      {/* Sparkles */}
      <Sparkle style={{ color: '#C9A55A', width: 16, top: '25%', left: '22%', opacity: 0.7, animation: 'sparkle 2.5s ease-in-out infinite' }} />
      <Sparkle style={{ color: '#E85E88', width: 12, top: '15%', right: '28%', opacity: 0.6, animation: 'sparkle 2.5s ease-in-out 0.8s infinite' }} />
      <Sparkle style={{ color: '#C9A55A', width: 10, bottom: '30%', left: '30%', opacity: 0.5, animation: 'sparkle 2.5s ease-in-out 1.4s infinite' }} />
      <Sparkle style={{ color: '#F4A8C0', width: 14, bottom: '20%', right: '25%', opacity: 0.6, animation: 'sparkle 2.5s ease-in-out 2s infinite' }} />
      <Sparkle style={{ color: '#C9A55A', width: 8, top: '55%', right: '12%', opacity: 0.5, animation: 'sparkle 2.5s ease-in-out 0.3s infinite' }} />
      <Sparkle style={{ color: '#E85E88', width: 18, top: '70%', left: '15%', opacity: 0.35, animation: 'sparkle 2.5s ease-in-out 1.8s infinite' }} />

      {/* Minimal decorative stars (dot patterns) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            background: i % 2 === 0 ? '#C9A55A' : '#E85E88',
            opacity: 0.3 + (i * 0.05),
            top: `${15 + i * 13}%`,
            left: i % 2 === 0 ? `${8 + i * 2}%` : undefined,
            right: i % 2 !== 0 ? `${6 + i * 2}%` : undefined,
            animation: `pulseSoft ${2 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{ animation: 'fadeUp 0.8s ease-out 0.2s both' }}
        >
          <div
            className="h-px w-10"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A55A)' }}
          />
          <span className="section-label flex items-center gap-1.5">
            <Sparkles size={11} />
            Boutique Digital Studio
          </span>
          <div
            className="h-px w-10"
            style={{ background: 'linear-gradient(90deg, #C9A55A, transparent)' }}
          />
        </div>

        {/* Main headline */}
        <h1
          className="font-serif font-light leading-[1.1] mb-6"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: '#2A1209',
            animation: 'fadeUp 0.9s ease-out 0.35s both',
          }}
        >
          Crafting Digital Experiences
          <br />
          <span className="italic" style={{ color: '#C4506F' }}>That Make Brands </span>
          <span
            className="inline-block transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <span className="shimmer-text italic font-medium">{floatingWords[wordIndex]}</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            color: '#6B4040',
            animation: 'fadeUp 0.9s ease-out 0.5s both',
          }}
        >
          We create stunning websites and strategic social media experiences
          that elevate ambitious brands.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.9s ease-out 0.65s both' }}
        >
          <button
            className="btn-primary text-base px-10 py-4"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Discovery Call
          </button>
          <button
            className="btn-outline text-base px-10 py-4"
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16"
          style={{ animation: 'fadeUp 0.9s ease-out 0.8s both' }}
        >
          {[
            { number: '80+', label: 'Projects Delivered' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '3+', label: 'Years of Excellence' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-serif text-3xl md:text-4xl font-light"
                style={{ color: '#C4506F' }}
              >
                {number}
              </p>
              <p
                className="font-sans text-xs tracking-widest uppercase mt-1"
                style={{ color: '#BF9070' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-70"
        style={{ animation: 'fadeIn 1s ease-out 1.2s both' }}
      >
        <span
          className="font-sans text-xs tracking-[0.2em] uppercase"
          style={{ color: '#BF9070' }}
        >
          Explore
        </span>
        <ArrowDown
          size={18}
          style={{ color: '#C9A55A', animation: 'float 2s ease-in-out infinite' }}
        />
      </button>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(253, 250, 248, 0.5))',
        }}
      />
    </section>
  );
}
