'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 700,
  direction = 'up',
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce]);

  // Direction-based transform
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      case 'none':
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Staggered animation for list items
interface FadeInStaggerProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeInStagger({
  children,
  delay = 0,
  staggerDelay = 100,
  duration = 700,
  direction = 'up',
  className = '',
}: FadeInStaggerProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn
          key={index}
          delay={delay + index * staggerDelay}
          duration={duration}
          direction={direction}
          className={className}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}

// Scale animation (for cards, images)
interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 600,
  scale = 0.95,
  className = '',
}: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : `scale(${scale})`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Slide and fade animation (for side panels, modals)
interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  distance?: number;
  className?: string;
}

export function SlideIn({
  children,
  delay = 0,
  duration = 700,
  direction = 'left',
  distance = 50,
  className = '',
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';

    switch (direction) {
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      case 'top':
        return `translateY(-${distance}px)`;
      case 'bottom':
        return `translateY(${distance}px)`;
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Reveal animation (curtain effect)
interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 800,
  className = '',
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {/* Reveal overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(5,150,105,0.1) 0%, rgba(5,150,105,0.05) 100%)',
          transform: isVisible ? 'translateX(100%)' : 'translateX(0)',
          transition: `transform ${duration}ms cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms`,
          zIndex: 10,
        }}
      />
      {/* Content */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${duration}ms ease-out ${delay + duration / 2}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Blur in animation (for hero sections, backgrounds)
interface BlurInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  className?: string;
}

export function BlurIn({
  children,
  delay = 0,
  duration = 1000,
  blurAmount = 10,
  className = '',
}: BlurInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blurAmount}px)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
