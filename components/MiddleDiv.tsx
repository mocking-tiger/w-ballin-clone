"use client";

import DivContent from "./DivContent";

export default function MiddleDiv() {
  return (
    <div className="aspect-[16/12] grid grid-cols-12 grid-rows-9">
      <div className="col-span-7 row-span-3">
        <DivContent bg="Design_default_L.webp" hoverBg="Design_hover_L.webp" />
      </div>
      <div className="col-span-5 row-span-4">
        <DivContent bg="Dev_default_L.webp" hoverBg="Dev_hover_L.webp" />
      </div>
      <div className="col-span-7 row-span-3">
        <DivContent
          bg="DigitalMarketing_default_L.webp"
          hoverBg="DigitalMarketing_hover_L.webp"
        />
      </div>
      <div className="col-span-5 row-span-6 group relative">
        <DivContent bg="DataDriven_default_L.webp" />
        <video
          className="w-full h-auto absolute inset-0 group-hover:block hidden rounded-[1vw]"
          src="/div/DataDriven_hover_L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-2 row-span-3 group relative">
        <DivContent bg="Rad-Design_default_L.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
          src="/div/Rad-Design_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-2 row-span-3 group relative">
        <DivContent bg="Rad-Dev_default_L.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
          src="/div/Rad-Dev_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-2 row-span-3 group relative">
        <DivContent bg="Rad-Marketing_default_L.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
          src="/div/Rad-Marketing_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent
          bg="20151015_default_L.webp"
          hoverBg="20151015_hover_L.webp"
        />
      </div>
      <div className="col-span-1 row-span-2 px-3">
        <DivContent
          bg="cocacola_default_L.webp"
          hoverBg="cocacola_hover_L@2x.webp"
        />
      </div>
    </div>
  );
}
