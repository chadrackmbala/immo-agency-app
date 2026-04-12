import { useEffect, useRef } from 'react';

export const ScrollFadeIn = ({ children }: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current) {
        ref.current.classList.add("animate-fadein-up"); // ✅ correction ici
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
};
