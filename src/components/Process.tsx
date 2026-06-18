import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Search, Map, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    description:
      'We dive deep into your brand, audience, goals, and competitive landscape. This foundation shapes everything that follows.',
    detail: 'Brand audit · Competitor analysis · Goal mapping · Audience research',
    color: '#C4506F',
  },
  {
    number: '02',
    title: 'Strategize',
    icon: Map,
    description:
      'We craft a bespoke roadmap — content strategy, design direction, and platform approach aligned with your business objectives.',
    detail: 'Strategic roadmap · Content pillars · Design brief · Timeline',
    color: '#C9A55A',
  },
  {
    number: '03',
    title: 'Create',
    icon: Palette,
    description:
      'This is where magic happens. We design and develop with intention — every element refined, every detail considered.',
    detail: 'Design mockups · Development · Content creation · Revisions',
    color: '#D4829A',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    icon: Rocket,
    description:
      'We don\'t just deliver and disappear. We launch, monitor performance, and continuously optimize for sustained growth.',
    detail: 'Launch strategy · Analytics setup · Ongoing support · Optimization',
    color: '#C4506F',
  },
];

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="process"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(160deg, #FAF4F0 0%, #FEF5F7 50%, #FCF4E7 100%)',
        }}
      />

      {/* Decorative large text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20rem] font-bold opacity-[0.025] pointer-events-none select-none whitespace-nowrap"
        style={{ color: '#C4506F' }}
      >
        Process
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">How We Work</span>
          <h2
            className="font-serif text-5xl md:text-6xl font-light mt-4 mb-6 leading-tight"
            style={{ color: '#2A1209' }}
          >
            A Refined Process
            <br />
            <em style={{ color: '#C4506F' }}>Built for Results</em>
          </h2>
          <p
            className="font-sans text-base md:text-lg font-light max-w-xl mx-auto"
            style={{ color: '#6B4040' }}
          >
            From first conversation to ongoing growth, we follow a thoughtful
            four-step framework designed to deliver exceptional outcomes.
          </p>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connecting gold line (desktop) */}
          <div
            className="hidden md:block absolute top-16 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(201, 165, 90, 0.3) 15%, rgba(201, 165, 90, 0.6) 35%, rgba(201, 165, 90, 0.6) 65%, rgba(201, 165, 90, 0.3) 85%, transparent 95%)',
            }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative fade-in-section ${isVisible ? 'is-visible' : ''} fade-in-delay-${i + 1}`}
                >
                  {/* Connector dot (desktop) */}
                  <div className="hidden md:flex justify-center mb-8 relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                        border: `1.5px solid ${step.color}`,
                        boxShadow: `0 0 0 4px ${step.color}12`,
                      }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: step.color }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card rounded-2xl p-7 group hover:shadow-glass-hover transition-all duration-400"
                    style={{
                      background: `linear-gradient(135deg, rgba(253, 245, 247, 0.8) 0%, rgba(253, 245, 247, 0.6) 100%)`,
                    }}
                  >
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-serif text-5xl font-light"
                        style={{ color: `${step.color}25` }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        <Icon size={18} style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-serif text-2xl font-light mb-3"
                      style={{ color: '#2A1209' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-sans text-sm leading-relaxed mb-5"
                      style={{ color: '#6B4040' }}
                    >
                      {step.description}
                    </p>

                    {/* Detail tags */}
                    <div
                      className="pt-4 font-sans text-xs leading-relaxed"
                      style={{
                        color: step.color,
                        borderTop: `1px solid ${step.color}20`,
                      }}
                    >
                      {step.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 fade-in-section fade-in-delay-5 ${isVisible ? 'is-visible' : ''}`}>
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
