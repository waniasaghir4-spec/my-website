import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, Award, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Intentional Design',
    description: 'Every element serves a purpose. We never design for decoration alone.',
    color: '#C4506F',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We hold ourselves to the highest standards — no shortcuts, ever.',
    color: '#C9A55A',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Thinking',
    description: 'Beauty without strategy is just art. We fuse both.',
    color: '#D4829A',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description: 'Our work is measured by your results, not just our portfolios.',
    color: '#C4506F',
  },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();
  const { ref: ref2, isVisible: isVisible2 } = useIntersectionObserver();

  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDFAF8 0%, #FAF4F0 100%)' }}
    >
      {/* Background blob */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F4A8C0 0%, transparent 70%)',
          transform: 'translate(20%, -20%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — image area */}
          <div
            ref={ref}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="relative">
              {/* Main image */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: '4/5' }}
              >
                <img
                  src="https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Webora Studio Founder"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(196, 80, 111, 0.15) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5"
                style={{ background: 'rgba(253, 245, 247, 0.92)' }}
              >
                <p
                  className="font-serif text-3xl font-light"
                  style={{ color: '#C4506F' }}
                >
                  80+
                </p>
                <p
                  className="font-sans text-xs tracking-wide mt-1"
                  style={{ color: '#BF9070' }}
                >
                  Brands Elevated
                </p>
              </div>

              {/* Floating label */}
              <div
                className="absolute -top-4 -left-4 glass-card rounded-2xl px-5 py-3"
                style={{ background: 'rgba(252, 244, 231, 0.92)' }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse-soft"
                    style={{ background: '#C9A55A' }}
                  />
                  <span
                    className="font-sans text-xs font-medium"
                    style={{ color: '#A8842D' }}
                  >
                    Est. 2021
                  </span>
                </div>
              </div>

              {/* Gold decorative ring */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  border: '1px solid rgba(201, 165, 90, 0.2)',
                  transform: 'translate(12px, 12px)',
                  zIndex: -1,
                }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div
            ref={ref2}
            className={`fade-in-section fade-in-delay-2 ${isVisible2 ? 'is-visible' : ''}`}
          >
            <span className="section-label">Our Story</span>

            <h2
              className="font-serif text-5xl md:text-6xl font-light mt-4 mb-6 leading-tight"
              style={{ color: '#2A1209' }}
            >
              A Boutique Studio
              <br />
              <em style={{ color: '#C4506F' }}>With Big Vision</em>
            </h2>

            <div
              className="w-12 h-px mb-8"
              style={{ background: 'linear-gradient(90deg, #C9A55A, transparent)' }}
            />

            <p
              className="font-sans text-base leading-relaxed mb-6"
              style={{ color: '#6B4040' }}
            >
              Webora Studio was born from a simple belief: every ambitious brand
              deserves a digital presence as exceptional as their products and
              services. We are a boutique digital studio helping ambitious brands
              build beautiful online experiences through intentional design and
              strategic social media management.
            </p>

            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: '#6B4040' }}
            >
              We don't just build websites or manage feeds — we craft complete
              digital ecosystems that connect, convert, and captivate. Our
              approach blends data-driven strategy with editorial-level aesthetics,
              creating digital identities that are both strikingly beautiful and
              commercially powerful.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, description, color }) => (
                <div
                  key={title}
                  className="p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    background: `${color}08`,
                    border: `1px solid ${color}20`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <p
                    className="font-serif text-base font-medium mb-1"
                    style={{ color: '#2A1209' }}
                  >
                    {title}
                  </p>
                  <p
                    className="font-sans text-xs leading-relaxed"
                    style={{ color: '#8C5A3F' }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
