"use client";

import { ReactNode, useState } from "react";

export default function DivContent({
  children,
  bg = "none",
  hoverBg,
}: {
  children?: ReactNode;
  bg?: string;
  hoverBg?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full h-full border border-black rounded-[1vw] relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${
          isHovered && hoverBg ? `/div/${hoverBg}` : `/div/${bg}`
        })`,
      }}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      {children}
    </div>
  );
}
