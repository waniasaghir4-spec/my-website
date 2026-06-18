import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Globe, Smartphone, Layout, Zap, ShoppingBag, Camera, Calendar, PenTool, Clock, Users, BarChart2, MessageCircle } from 'lucide-react';

const services = [
  {
    category: 'Website Design & Development',
    tagline: 'Where Beauty Meets Function',
    description: 'We craft bespoke digital homes for ambitious brands — every pixel purposeful, every interaction intentional.',
    color: '#C4506F',
    gradient: 'linear-gradient(135deg, rgba(196, 80, 111, 0.08) 0%, rgba(244, 168, 192, 0.12) 100%)',
    border: 'rgba(196, 80, 111, 0.2)',
    features: [
      { icon: Layout, label: 'Custom Websites' },
      { icon: Zap, label: 'Landing Pages' },
      { icon: Smartphone, label: 'Responsive Design' },
      { icon: Globe, label: 'Website Optimization' },
      { icon: ShoppingBag, label: 'E-commerce Solutions' },
    ],
  },
  {
    category: 'Social Media Management',
    tagline: 'Stories That Stop the Scroll',
    description: 'Strategic content creation and community management that builds loyal audiences and drives real engagement.',
    color: '#C9A55A',
    gradient: 'linear-gradient(135deg, rgba(201, 165, 90, 0.08) 0%, rgba(249, 232, 206, 0.15) 100%)',
    border: 'rgba(201, 165, 90, 0.25)',
    features: [
      { icon: Calendar, label: 'Content Planning' },
      { icon: Camera, label: 'Feed Design' },
      { icon: PenTool, label: 'Caption Writing' },
      { icon: Clock, label: 'Scheduling' },
      { icon: Users, label: 'Community Engagement' },
      { icon: BarChart2, label: 'Analytics & Reporting' },
      { icon: MessageCircle, label: 'Brand Voice Development' },
    ],
  },
];

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: string }) {
  return (
    <div
      className="glass-card rounded-3xl p-10 relative overflow-hidden group"
      style={{
        background: service.gradient,
        borderColor: service.border,
        border: `1.5px solid ${service.border}`,
        transitionDelay: delay,
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${service.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Gold accent bar */}
      <div
        className="w-12 h-0.5 rounded-full mb-8"
        style={{ background: service.color }}
      />

      <p
        className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-3"
        style={{ color: service.color }}
      >
        {service.category}
      </p>

      <h3
        className="font-serif text-3xl md:text-4xl font-light italic mb-4 leading-tight"
        style={{ color: '#2A1209' }}
      >
        {service.tagline}
      </h3>

      <p
        className="font-sans text-sm leading-relaxed mb-10"
        style={{ color: '#6B4040', maxWidth: 380 }}
      >
        {service.description}
      </p>

      {/* Feature list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {service.features.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 group/item">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
              style={{ background: `${service.color}14` }}
            >
              <Icon size={14} style={{ color: service.color }} />
            </div>
            <span
              className="font-sans text-sm"
              style={{ color: '#4A2832' }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-5 transition-opacity duration-500 group-hover:opacity-10"
        style={{ background: service.color }}
      />
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-28 px-6 relative overflow-hidden">
      {/* Soft background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #FDFAF8 0%, #FAF4F0 50%, #FDFAF8 100%)',
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-20 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Our Expertise</span>
          <h2
            className="font-serif text-5xl md:text-6xl font-light mt-4 mb-6"
            style={{ color: '#2A1209' }}
          >
            Services Designed to
            <br />
            <em style={{ color: '#C4506F' }}>Elevate Your Brand</em>
          </h2>
          <p
            className="font-sans text-base md:text-lg font-light max-w-xl mx-auto"
            style={{ color: '#6B4040' }}
          >
            Two core disciplines, one cohesive vision — everything you need to
            build a magnetic digital presence.
          </p>
          <div
            className="gold-line w-24 mx-auto mt-8"
          />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.category}
              className={`fade-in-section ${isVisible ? 'is-visible' : ''} fade-in-delay-${i + 2}`}
            >
              <ServiceCard service={service} delay={`${(i + 1) * 0.15}s`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
