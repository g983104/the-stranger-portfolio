'use client';

import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR / 봇 환경: in-view 클래스를 기본으로 적용해 콘텐츠 노출
  if (!mounted) {
    return (
      <Tag className={`animate-on-scroll in-view ${className}`}>
        {children}
      </Tag>
    );
  }

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
