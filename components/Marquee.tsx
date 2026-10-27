'use client';

const marqueeItems = [
  'React', '·', 'Next.js', '·', 'TypeScript', '·', 'Node.js', '·',
  'Google Cloud', '·', 'Kubernetes', '·', 'Terraform', '·', 'Docker', '·',
  'PostgreSQL', '·', 'GraphQL', '·', 'GSAP', '·', 'Three.js', '·',
  'Framer Motion', '·', 'Go', '·', 'Python', '·', 'Gemini AI', '·',
];

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(245,245,243,0.08)',
      borderBottom: '1px solid rgba(245,245,243,0.08)',
      padding: '1.5rem 0',
      background: 'rgba(245,245,243,0.02)',
    }}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 1.5rem',
              fontSize: item === '·' ? '0.5rem' : '10px',
              fontWeight: item === '·' ? 900 : 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: item === '·' ? 'var(--accent)' : 'rgba(245,245,243,0.35)',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              lineHeight: '1',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
