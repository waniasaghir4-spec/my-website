import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Send, CheckCircle, Mail, Instagram,  } from 'lucide-react';

const services = [
  'Website Design & Development',
  'Social Media Management',
  'Both Services',
  'E-commerce Solution',
  'Brand Identity',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  businessName: string;
  service: string;
  projectDetails: string;
}

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    businessName: '',
    service: '',
    projectDetails: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email) {
    setError('Please fill in your name and email.');
    return;
  }

  setSubmitting(true);

  try {
    await fetch("https://hooks.zapier.com/hooks/catch/27984822/43p2z84/", {
      method: "POST",
      body: new FormData(e.target as HTMLFormElement),
    });

    setSubmitted(true);
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  return (
    
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FEF5F7 0%, #FCF4E7 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(244, 168, 192, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(249, 232, 206, 0.2) 0%, transparent 50%)',
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">Get In Touch</span>
          <h2
            className="font-serif text-5xl md:text-6xl font-light mt-4 mb-6 leading-tight"
            style={{ color: '#2A1209' }}
          >
            Ready to Elevate
            <br />
            <em style={{ color: '#C4506F' }}>Your Brand?</em>
          </h2>
          <p
            className="font-sans text-base md:text-lg font-light max-w-xl mx-auto"
            style={{ color: '#6B4040' }}
          >
            Let's create something extraordinary together.
          </p>
        </div>

        <div className={`grid md:grid-cols-5 gap-10 items-start fade-in-section fade-in-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          {/* Left panel */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p
                className="font-serif text-2xl font-light italic mb-4"
                style={{ color: '#2A1209' }}
              >
                We'd love to hear about your project.
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: '#6B4040' }}
              >
                Share your vision, and we'll craft a tailored strategy that brings
                your brand to life online.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:info.weborastudio@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: 'rgba(196, 80, 111, 0.1)',
                    border: '1px solid rgba(196, 80, 111, 0.2)',
                  }}
                >
                  <Mail size={16} style={{ color: '#C4506F' }} />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-0.5" style={{ color: '#BF9070' }}>Email</p>
                  <p className="font-sans text-sm font-medium group-hover:text-rose-500 transition-colors" style={{ color: '#2A1209' }}>
                    info.weborastudio@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/weborastudio_ae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: 'rgba(201, 165, 90, 0.1)',
                    border: '1px solid rgba(201, 165, 90, 0.2)',
                  }}
                >
                  <Instagram size={16} style={{ color: '#C9A55A' }} />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-0.5" style={{ color: '#BF9070' }}>Instagram</p>
                  <p className="font-sans text-sm font-medium transition-colors" style={{ color: '#2A1209' }}>
                    @weborastudio_ae
                  </p>
                </div>
              </a>

              
                
            
            </div>

            {/* Response time badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{
                background: 'rgba(201, 165, 90, 0.08)',
                border: '1px solid rgba(201, 165, 90, 0.2)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-soft"
                style={{ background: '#C9A55A' }}
              />
              <p className="font-sans text-sm" style={{ color: '#A8842D' }}>
                We typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div
                className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
                style={{ background: 'rgba(253, 245, 247, 0.8)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #C4506F20, #E85E8830)' }}
                >
                  <CheckCircle size={32} style={{ color: '#C4506F' }} />
                </div>
                <h3
                  className="font-serif text-3xl font-light mb-4"
                  style={{ color: '#2A1209' }}
                >
                  Message Received!
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed max-w-xs"
                  style={{ color: '#6B4040' }}
                >
                  Thank you for reaching out. We're excited to learn about your
                  project and will be in touch within 24 hours.
                </p>
                <div
                  className="mt-6 h-px w-24"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A55A, transparent)' }}
                />
                <p
                  className="mt-4 font-sans text-xs tracking-widest uppercase"
                  style={{ color: '#C9A55A' }}
                >
                  Talk soon ✦
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 md:p-10 space-y-5"
                style={{ background: 'rgba(253, 245, 247, 0.75)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-sans text-xs font-medium tracking-wide uppercase mb-2"
                      style={{ color: '#8C5A3F' }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sophia Laurent"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block font-sans text-xs font-medium tracking-wide uppercase mb-2"
                      style={{ color: '#8C5A3F' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="info.weborastudio@gmail.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-sans text-xs font-medium tracking-wide uppercase mb-2"
                    style={{ color: '#8C5A3F' }}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Your brand or business name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    className="block font-sans text-xs font-medium tracking-wide uppercase mb-2"
                    style={{ color: '#8C5A3F' }}
                  >
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block font-sans text-xs font-medium tracking-wide uppercase mb-2"
                    style={{ color: '#8C5A3F' }}
                  >
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={form.projectDetails}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    className="form-input resize-none"
                  />
                </div>

                {error && (
                  <p className="font-sans text-sm" style={{ color: '#C4506F' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary justify-center py-5 text-base"
                  style={{ opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? (
                    <>
                      <div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        style={{ animation: 'spin 0.8s linear infinite' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
