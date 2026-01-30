'use client';

import { FadeIn, FadeInStagger, ScaleIn, BlurIn } from '@/components/animations/FadeIn';

export default function AnimatedHome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

// Individual animated sections for reuse
export function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <FadeIn delay={delay} duration={800} direction="up">
      {children}
    </FadeIn>
  );
}

export function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <ScaleIn delay={delay} duration={600} scale={0.95}>
      {children}
    </ScaleIn>
  );
}

export function AnimatedHero({ children }: { children: React.ReactNode }) {
  return (
    <BlurIn duration={1200} blurAmount={8}>
      {children}
    </BlurIn>
  );
}

// Grid animations
export function AnimatedGrid({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn key={index} delay={index * 100} duration={700} direction="up">
          {child}
        </FadeIn>
      ))}
    </>
  );
}
