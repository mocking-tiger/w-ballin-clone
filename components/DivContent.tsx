"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function DivContent({
  children,
  bg = "none",
  hoverBg,
  contain = false,
  slide1 = false,
  slide2 = false,
  img,
  description = "",
  video,
}: {
  children?: ReactNode;
  bg?: string;
  hoverBg?: string;
  contain?: boolean;
  slide1?: boolean;
  slide2?: boolean;
  img?: string;
  description?: string;
  video?: string;
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
        // filter: filter ? (isHovered ? "none" : "grayscale(100%)") : "",
      }}
      onClick={() => setThisModal(true)}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      {children}
      <div
        className={`w-[400px] lg:w-auto max-w-[800px] h-auto max-h-[732px] p-[16px] lg:p-[40px] fixed z-20 left-16 bottom-16 border-2 bg-black text-white rounded-[1vw] ${
          description && thisModal ? "block" : "hidden"
        }`}
      >
        <div className="w-full lg:w-[712px] h-auto max-h-[574px] mb-[16px] lg:mb-[40px] border-2 rounded-[1vw] overflow-hidden relative">
          {img && (
            // eslint-disable-next-line
            <img
              src={`/div/${img}`}
              style={{ width: "auto", height: "auto" }}
              alt="popup-image"
            />
          )}
          {video && (
            <video
              src={`/div/${video}`}
              autoPlay
              loop
              className="w-full h-auto object-cover"
            />
          )}
        </div>
        <p className="text-[2rem] lg:text-[2.4rem] tracking-tighter">
          {description}
        </p>
        <div
          className="px-[18px] py-[8px] absolute left-0 -top-28 bg-black border-2 rounded-[1vw] cursor-pointer underline text-[2rem]"
          onClick={(e) => {
            e.stopPropagation();
            setThisModal((prev) => !prev);
          }}
        >
          Click anywhere to Close
        </div>
      </div>
    </div>
  );
}
