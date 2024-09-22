"use client";

import { useEffect, useRef, useState } from "react";
import KakaoMap from "./KakaoMap";

export default function MapBox() {
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
          7호선 면목역
          <br />
          3번 출구 700m 이내
        </div>
      </div>
      <div
        className={`aspect-[16/9] mt-20 opacity-0 ${
          isVisible ? "animate-slideIn" : ""
        }`}
        style={{ animationDelay: "0.4s" }}
      >
        <KakaoMap />
      </div>
    </div>
  );
}
