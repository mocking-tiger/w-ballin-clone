"use client";

import { useEffect, useRef, useState } from "react";

export default function CompanyBlock() {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      const refCurrent = blockRef;
      if (refCurrent.current) observer.unobserve(refCurrent.current);
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className={`border border-black lg:border-transparent lg:hover:bg-black rounded-xl lg:rounded-none lg:transition-all duration-1000 ${
        isVisible ? "lg:animate-slideIn" : "lg:opacity-0"
      }`}
    >
      <div className="aspect-[16/8] rounded-3xl bg-cover bg-company bg-[url('/business/company-hover.png')] lg:bg-[url('/business/company.png')] hover:bg-[url('/business/company-hover.png')] transition-all duration-500" />
    </div>
  );
}
