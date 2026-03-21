'use client';

import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'in-view' : ''} ${className}`}
      style={{
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}
