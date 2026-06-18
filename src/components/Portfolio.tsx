import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Lumière Skincare',
    industry: 'Beauty & Skincare',
    type: 'Website Design',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#C4506F',
  },
  {
    title: 'Maison Flore',
    industry: 'Fashion Boutique',
    type: 'Social Media',
    image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#C9A55A',
  },
  {
    title: 'Serenité Wellness',
    industry: 'Wellness & Spa',
    type: 'Website Design',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#A33558',
  },
  {
    title: 'Atelier Mode',
    industry: 'Luxury Fashion',
    type: 'Brand Identity',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#C4506F',
  },
  {
    title: 'Bloom & Co.',
    industry: 'Floral & Events',
    type: 'E-commerce',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#C9A55A',
  },

];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        index === 0 ? 'md:col-span-2 md:row-span-1' : ''
      }`}
      style={{
        aspectRatio: index === 0 ? '16/7' : '4/3',
        boxShadow: hovered
          ? '0 20px 60px rgba(42, 18, 9, 0.18)'
          : '0 4px 24px rgba(42, 18, 9, 0.08)',
        transition: 'box-shadow 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      />

      {/* Base overlay — always slightly visible for labels */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background: 'linear-gradient(to top, rgba(42, 18, 9, 0.55) 0%, rgba(42, 18, 9, 0.05) 50%, transparent 100%)',
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background: `linear-gradient(135deg, ${project.color}E8 0%, rgba(42, 18, 9, 0.88) 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content — always show title/industry at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-400"
        style={{
          transform: hovered ? 'translateY(0)' : 'translateY(0)',
        }}
      >
        {!hovered && (
          <>
            <span
              className="font-sans text-xs tracking-[0.2em] uppercase mb-2 block"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {project.type}
            </span>
            <h3
              className="font-serif text-xl md:text-2xl font-light"
              style={{ color: 'white' }}
            >
              {project.title}
            </h3>
          </>
        )}
      </div>

      {/* Hover content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-400"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(12px)' }}
      >
        <span
          className="font-sans text-xs tracking-[0.25em] uppercase mb-3"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {project.industry}
        </span>
        <h3
          className="font-serif text-3xl md:text-4xl font-light italic mb-2 text-center"
          style={{ color: 'white' }}
        >
          {project.title}
        </h3>
        <span
          className="font-sans text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
          style={{
            background: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {project.type}
        </span>
        <div
          className="flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.95)',
            color: project.color,
          }}
        >
          View Case Study
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="portfolio"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #FDFAF8 0%, #FAF4F0 100%)' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <div>
            <span className="section-label">Selected Work</span>
            <h2
              className="font-serif text-5xl md:text-6xl font-light mt-4 leading-tight"
              style={{ color: '#2A1209' }}
            >
              Where Vision
              <br />
              <em style={{ color: '#C4506F' }}>Becomes Reality</em>
            </h2>
          </div>
          <p
            className="font-sans text-sm md:text-base leading-relaxed max-w-sm"
            style={{ color: '#6B4040' }}
          >
            A curated glimpse into the brands we've helped craft compelling
            digital identities for.
          </p>
        </div>

        {/* Grid */}
        <div className={`grid md:grid-cols-3 gap-5 fade-in-section fade-in-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 fade-in-section fade-in-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <p
            className="font-sans text-sm mb-6"
            style={{ color: '#BF9070' }}
          >
            These are just a few highlights —
          </p>
          <button
            className="btn-outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
