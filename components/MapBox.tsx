"use client";

import { useEffect, useRef, useState } from "react";
import KakaoMap from "./KakaoMap";
import Image from "next/image";
import { useLanguageContext } from "@/context/LanguageContext";

export default function MapBox() {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguageContext();
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
        threshold: 0.4,
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
    <div>
      <div
        ref={blockRef}
        className={`mt-[100px] flex flex-col md:flex-row justify-between items-center opacity-0 ${
          isVisible ? "animate-fadeInFast" : ""
        }`}
      >
        <div className="w-full text-[4.8rem] text-left lg:text-[8rem] leading-[50px] lg:leading-[90px]">
          WHERE
          <br />I<br />
          AM
        </div>
        <div className="w-full text-[2rem] text-right lg:text-[2.4rem]">
          {lang === "KOR" ? "7호선 면목역" : "Line no.7 Myeon-mok station"}
          <br />
          {lang === "KOR" ? "3번 출구 700m 이내" : "Within 700M from Exit 3"}
        </div>
      </div>
      <div
        className={`aspect-[16/9] mt-20 mb-[18px] opacity-0 ${
          isVisible ? "animate-slideIn" : ""
        }`}
        style={{ animationDelay: "0.4s" }}
      >
        <KakaoMap />
      </div>
      <div className="w-full p-[16px] lg:px-[26px] lg:py-[23px] bg-[#f2f2f2] rounded-xl text-[1.6rem] flex flex-wrap justify-start lg:justify-center items-center gap-y-1 gap-[20px]">
        {lang === "KOR"
          ? "[7호선] 면목역 3번 출구"
          : "[Line No.7] Myeon-mok Station Exit #3"}
        <Image
          width={22}
          height={22}
          src="/business/map-arrow.png"
          alt="arrow-icon"
        />
        {lang === "KOR" ? "건물 이름은 따로 없음" : "The Building with no-name"}
      </div>
    </div>
  );
}
