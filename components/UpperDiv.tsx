"use client";

import DivContent from "./DivContent";

export default function UpperDiv() {
  return (
    <div className="aspect-[16/5.5] grid grid-cols-6 grid-rows-4">
      <div className="col-span-3">
        <DivContent
          bg="/div/WebAllin.webp"
          hoverBg="/div/WebAllin_hover.webp"
        />
      </div>
      <div className="col-span-1 row-span-2">
        <DivContent bg="/div/23_default.webp" hoverBg="/div/23_hover_L.webp" />
      </div>
      <div className="col-span-2 row-span-4 group relative">
        <DivContent bg="/div/B-logo_default.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw]"
          src="/div/B-logo_hover_L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-3">
        <DivContent
          bg="/div/AllinPackage.webp"
          hoverBg="/div/AllinPackage_hover.webp"
        />
      </div>
      <div className="col-span-2 grid grid-cols-3">
        <div className="relative group">
          <DivContent bg="/div/Geek_default_L.webp" />
          <video
            className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
            src="/div/Geek_hover.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="col-span-2">
          <DivContent
            bg="/div/magnificent.webp"
            hoverBg="/div/magnificent_hover.webp"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-2 group relative">
        <DivContent bg="/div/Ballin_default.png" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
          src="/div/Ballin_hover-L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-2 group relative">
        <DivContent bg="/div/Mustard_default.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
          src="/div/Mustard_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
