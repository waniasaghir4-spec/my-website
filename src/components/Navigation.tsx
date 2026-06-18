import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(253, 250, 248, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(244, 168, 192, 0.2)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(196, 130, 142, 0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/webora-logo.jpeg"
              alt="Webora Studio"
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ boxShadow: '0 2px 12px rgba(232, 94, 136, 0.25)' }}
            />
            <div className="hidden sm:block">
              <span
                className="font-serif text-lg font-medium tracking-wide"
                style={{ color: '#2A1209' }}
              >
                Webora <span style={{ color: '#C9A55A' }}>Studio</span>
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="relative font-sans text-sm font-medium transition-colors duration-200 group"
                  style={{ color: activeSection === href.slice(1) ? '#C4506F' : '#6B4040' }}
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px rounded-full transition-all duration-300"
                    style={{
                      background: 'linear-gradient(90deg, #C4506F, #C9A55A)',
                      width: activeSection === href.slice(1) ? '100%' : '0%',
                    }}
                  />
                  <span
                    className="absolute -bottom-0.5 left-0 h-px rounded-full transition-all duration-300 group-hover:w-full"
                    style={{
                      background: 'linear-gradient(90deg, #C4506F, #C9A55A)',
                      width: '0%',
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C4506F 0%, #E85E88 100%)',
                color: 'white',
                boxShadow: '0 4px 18px rgba(196, 80, 111, 0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(196, 80, 111, 0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 18px rgba(196, 80, 111, 0.3)';
              }}
            >
              Book a Call
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#2A1209' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-30 lg:hidden transition-all duration-400"
        style={{
          background: 'rgba(253, 245, 247, 0.97)',
          backdropFilter: 'blur(20px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map(({ label, href }, i) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="font-serif text-3xl font-light transition-colors duration-200"
              style={{
                color: activeSection === href.slice(1) ? '#C4506F' : '#2A1209',
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 btn-primary"
          >
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
}
