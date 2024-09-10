"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function DivContent({
  children,
  bg = "none",
  hoverBg,
  filter = false,
  contain = false,
  slide1 = false,
  slide2 = false,
}: {
  children?: ReactNode;
  bg?: string;
  hoverBg?: string;
  filter?: boolean;
  contain?: boolean;
  slide1?: boolean;
  slide2?: boolean;
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [thisModal, setThisModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides1 = [
    "slide0.png",
    "slide1.png",
    "slide2.png",
    "slide3.png",
    "slide4.png",
    "slide5.png",
    "slide6.png",
    "slide7.png",
  ];

  const slides2 = [
    "slide2-0.png",
    "slide2-1.png",
    "slide2-2.png",
    "slide2-3.png",
    "slide2-4.png",
    "slide2-5.png",
    "slide2-6.png",
    "slide2-7.png",
  ];

  const closeModal = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setThisModal(false);
    }
  };

  useEffect(() => {
    let slideInterval = null;

    if ((isHovered && slide1) || (isHovered && slide2)) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides1.length);
      }, 300);
    } else {
      setCurrentSlide(0);
    }

    return () => {
      if (slideInterval) {
        console.log("인터벌 정리 되는지 확인");
        clearInterval(slideInterval);
      }
    };
    // eslint-disable-next-line
  }, [isHovered, slide1, slide2]);

  useEffect(() => {
    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`w-full h-full border border-black rounded-[1vw] relative bg-center bg-no-repeat ${
        contain ? "bg-contain" : "bg-cover"
      }`}
      style={{
        backgroundImage: `url(${
          slide1 && isHovered
            ? `/div/${slides1[currentSlide]}`
            : slide2 && isHovered
            ? `/div/${slides2[currentSlide]}`
            : isHovered && hoverBg
            ? `/div/${hoverBg}`
            : `/div/${bg}`
        })`,
        filter: filter ? (isHovered ? "none" : "grayscale(100%)") : "",
      }}
      onClick={() => setThisModal((prev) => !prev)}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      {children}
      <div
        className={`w-[500px] h-[500px] fixed z-20 left-20 bottom-20 bg-black text-white ${
          thisModal ? "block" : "hidden"
        }`}
      >
        {`${bg}`}
      </div>
    </div>
  );
}
