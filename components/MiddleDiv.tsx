"use client";

import { useEffect, useState } from "react";
import DivContent from "./DivContent";
//cp
export default function MiddleDiv() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="aspect-[10/16] lg:aspect-[16/12] grid grid-cols-10 lg:grid-cols-12 grid-rows-17 lg:grid-rows-9">
      <div className="col-span-6 lg:col-span-7 row-span-4 lg:row-span-3">
        <DivContent bg="Design_default_L.webp" hoverBg="Design_hover_L.webp" />
      </div>
      <div className="col-span-4 lg:col-span-5 row-span-6 lg:row-span-4">
        <DivContent bg="Dev_default_L.webp" hoverBg="Dev_hover_L.webp" />
      </div>
      <div className="col-span-6 lg:col-span-7 row-span-4 lg:row-span-3">
        <DivContent
          bg="DigitalMarketing_default_L.webp"
          hoverBg="DigitalMarketing_hover_L.webp"
        />
      </div>
      <div className="col-span-4 lg:col-span-5 row-span-7 lg:row-span-5 group relative">
        <DivContent
          bg={
            screenWidth > 1023
              ? "DataDriven_default_L.webp"
              : "DataDriven_default_m@2x.webp"
          }
        />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/DataDriven_hover_L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-4 lg:col-span-2 row-span-5 lg:row-span-3 group relative">
        <DivContent
          bg={
            screenWidth > 1023
              ? "Rad-Design_default_L.webp"
              : "Rad-Design_default_m@2x.webp"
          }
        />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/Rad-Design_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-5 lg:col-span-2 row-span-4 group relative order-1 lg:order-none">
        <DivContent
          bg={
            screenWidth > 1023
              ? "Rad-Dev_default_L.webp"
              : "Rad-Dev_default_m@2x.webp"
          }
        />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/Rad-Dev_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-5 lg:col-span-2 row-span-4 group relative order-1 lg:order-none">
        <DivContent
          bg={
            screenWidth > 1023
              ? "Rad-Marketing_default_L.webp"
              : "Rad-Marketing_default_m@2x.webp"
          }
        />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/Rad-Marketing_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
        <DivContent
          bg="20151015_default_L.webp"
          hoverBg="20151015_hover_L.webp"
        />
      </div>
      <div className="col-span-2 lg:col-span-1 row-span-3 lg:row-span-2 px-3 py-1">
        <DivContent
          bg={
            screenWidth > 1023
              ? "cocacola_default_L.webp"
              : "cocacola_default_m.webp"
          }
          hoverBg={
            screenWidth > 1023
              ? "cocacola_hover_L@2x.webp"
              : "cocacola_hover_m.webp"
          }
        />
      </div>
    </div>
  );
}
