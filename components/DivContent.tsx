"use client";

import { ReactNode, useState } from "react";

export default function DivContent({
  children,
  bg = "none",
  hoverBg,
  filter = false,
  contain = false,
}: {
  children?: ReactNode;
  bg?: string;
  hoverBg?: string;
  filter?: boolean;
  contain?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-full border border-black rounded-[1vw] relative bg-center bg-no-repeat ${
        contain ? "bg-contain" : "bg-cover"
      }`}
      style={{
        backgroundImage: `url(${
          isHovered && hoverBg ? `/div/${hoverBg}` : `/div/${bg}`
        })`,
        filter: filter ? (isHovered ? "none" : "grayscale(100%)") : "",
      }}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      {children}
    </div>
  );
}
