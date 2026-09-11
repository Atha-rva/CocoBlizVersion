interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-2.5 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-accent-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">
            {eyebrow}
          </span>
          {align === 'center' && <span className="h-px w-8 bg-accent-gold" />}
        </div>
      )}
      <h2
        className={`text-section font-bold ${
          light ? 'text-coco-cream' : 'text-coco-green'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-coco-cream/60' : 'text-coco-dark/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
