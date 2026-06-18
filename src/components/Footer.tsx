import { Instagram, Youtube, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/weborastudio', color: '#C4506F' },
  { icon: Youtube, label: 'TikTok', href: 'https://tiktok.com/@weborastudio', color: '#C9A55A' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/weborastudio', color: '#C4506F' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C0F12 0%, #2A1209 100%)' }}
    >
      {/* Top gold line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201, 165, 90, 0.5) 30%, rgba(201, 165, 90, 0.8) 50%, rgba(201, 165, 90, 0.5) 70%, transparent)' }}
      />

      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F4A8C0 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F9E8CE 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/webora-logo.jpeg"
                alt="Webora Studio"
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: '1.5px solid rgba(201, 165, 90, 0.4)' }}
              />
              <div>
                <p
                  className="font-serif text-xl font-medium tracking-wide"
                  style={{ color: 'white' }}
                >
                  Webora <span style={{ color: '#C9A55A' }}>Studio</span>
                </p>
                <p
                  className="font-sans text-xs tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  Digital Studio
                </p>
              </div>
            </div>

            <p
              className="font-sans text-sm leading-relaxed mb-8 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              A boutique digital studio crafting beautiful online experiences
              through intentional design and strategic social media management.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${color}20`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}50`;
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={15} style={{ color: 'rgba(255,255,255,0.6)' }} />
                </a>
              ))}

              <a
                href="mailto:info.weborastudio@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201, 165, 90, 0.2)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201, 165, 90, 0.5)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                <Mail size={15} style={{ color: 'rgba(255,255,255,0.6)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: '#C9A55A' }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.9)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + CTA */}
          <div>
            <p
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: '#C9A55A' }}
            >
              Services
            </p>
            <ul className="space-y-3 mb-8">
              {['Website Design', 'Development', 'Social Media', 'Content Strategy', 'E-commerce'].map((s) => (
                <li key={s}>
                  <span
                    className="font-sans text-sm"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:info.weborastudio@gmail.com"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-all duration-300 group"
              style={{ color: '#C9A55A' }}
            >
              info.weborastudio@gmail.com
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-xs"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            &copy; {new Date().getFullYear()} Webora Studio. All rights reserved.
          </p>

          <p
            className="font-serif text-xs italic"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Crafting digital experiences that make brands unforgettable.
          </p>

          <div className="flex items-center gap-1">
            <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Made with
            </span>
            <span style={{ color: '#C4506F', fontSize: '12px' }}>♥</span>
            <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              by Wania Saghir
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
