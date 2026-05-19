'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === 'left'  ? 'reveal-left'  :
    direction === 'right' ? 'reveal-right' :
    'reveal';

  const delayClass = delay >= 1 && delay <= 6 ? ` reveal-d${delay}` : '';

  return (
    <Tag ref={ref} className={`${dirClass}${delayClass}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}
