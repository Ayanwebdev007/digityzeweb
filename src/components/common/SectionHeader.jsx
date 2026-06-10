import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ label, title, description, center = true, light = true }) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase 
          bg-brand-primary/10 text-navy-400 border border-brand-primary/20 mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-slate-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-3xl leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-slate-600' : 'text-white/80'
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
