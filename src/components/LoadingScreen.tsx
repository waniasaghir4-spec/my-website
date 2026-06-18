import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        background: 'linear-gradient(160deg, #FEF5F7 0%, #FAF0EB 50%, #FCF4E7 100%)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-30 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #F4A8C0 0%, transparent 70%)',
          top: '10%',
          right: '10%',
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full opacity-20 animate-float"
        style={{
          background: 'radial-gradient(circle, #F9E8CE 0%, transparent 70%)',
          bottom: '15%',
          left: '10%',
        }}
      />

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-8">
        <div
          className="relative"
          style={{
            animation: 'fadeIn 0.8s ease-out forwards',
          }}
        >
          <img
            src="/webora-logo.jpeg"
            alt="Webora Studio"
            className="w-28 h-28 rounded-full object-cover shadow-pink-glow"
            style={{ boxShadow: '0 8px 40px rgba(232, 94, 136, 0.35)' }}
          />
          {/* Gold ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1.5px solid rgba(201, 165, 90, 0.5)',
              transform: 'scale(1.15)',
              animation: 'pulseSoft 2s ease-in-out infinite',
            }}
          />
        </div>

        <div className="text-center" style={{ animation: 'fadeUp 0.8s ease-out 0.3s both' }}>
          <p
            className="font-serif text-3xl font-light tracking-[0.12em]"
            style={{ color: '#2A1209' }}
          >
            WEBORA <span style={{ color: '#C9A55A' }}>STUDIO</span>
          </p>
          <p className="font-sans text-xs tracking-[0.3em] uppercase mt-1" style={{ color: '#BF9070' }}>
            Digital Experiences
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="w-48 h-px rounded-full overflow-hidden"
          style={{ background: 'rgba(201, 165, 90, 0.2)', animation: 'fadeIn 0.6s ease-out 0.6s both' }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #C9A55A, #F5D876, #C9A55A)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
