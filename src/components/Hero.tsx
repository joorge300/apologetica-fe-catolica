import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaHref }) => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50">
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{title}</h1>
    <p className="text-lg md:text-2xl text-center mb-8 max-w-xl">{subtitle}</p>
    <a
      href={ctaHref}
      className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
    >
      {ctaText}
    </a>
  </section>
);

export default Hero;