"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DDMBlock({
  bg,
  logo,
  description,
  icons,
}: {
  bg: string;
  logo: string;
  description: string;
  icons: string[];
}) {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeInIcons, setFadeInIcons] = useState(false);

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
        threshold: 0.3,
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setFadeInIcons(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div
      id="DDM"
      ref={blockRef}
      className={`w-[90%] lg:w-[960px] mx-auto mb-[24px] p-[32px] rounded-lg relative scrollTarget ${bg} ${
        isVisible ? "animate-slideIn" : "opacity-0"
      }`}
    >
      <Image
        className="mb-[18px]"
        src={logo}
        width={
          bg === "bg-businessDesign" ? 81 : bg === "bg-businessDev" ? 59 : 105
        }
        height={26}
        alt="design-logo"
      />
      <p
        className={`${
          bg === "bg-businessDesign"
            ? "w-full md:w-[290px] lg:w-[420px]"
            : bg === "bg-businessDev"
            ? "w-full md:w-[390px] lg:w-[550px]"
            : "w-full md:w-[360px] lg:w-[530px]"
        } mb-[32px] text-[1.5rem] lg:text-[2.2rem] text-white font-bold text-wrap`}
      >
        {description}
      </p>
      <a href="#" className="mb-7 block text-[2rem] text-white md:hidden">
        <span className="underline text-[1.8rem]">바로가기</span>
        <Image
          className="ml-3 inline group-hover:-translate-y-2 transition-all duration-300"
          src="/business/arrow-top-right.png"
          width={14}
          height={14}
          alt="arrow-icon"
        />
      </a>
      <span className="mb-[18px] block text-[2rem] text-white opacity-35">
        주요기술
      </span>
      <div className="flex gap-8 flex-wrap">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`w-[52px] lg:w-[64px] h-[52px] lg:h-[64px] bg-center rounded-full transition-opacity duration-500 ease-in ${icon} ${
              fadeInIcons ? `lg:opacity-100` : `lg:opacity-0`
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
      <a
        href="#"
        className="text-[2rem] text-white hidden md:block absolute right-16 top-[35%] group"
      >
        <span
          className={`underline  underline-offset-4 ${
            bg === "bg-businessDesign"
              ? "underline-animation2"
              : bg === "bg-businessDev"
              ? "underline-animation3"
              : "underline-animation4"
          }`}
        >
          바로가기
        </span>
        <Image
          className="ml-3 inline group-hover:-translate-y-2 transition-all duration-300"
          src="/business/arrow-top-right.png"
          width={14}
          height={14}
          alt="arrow-icon"
        />
      </a>
    </div>
  );
}
