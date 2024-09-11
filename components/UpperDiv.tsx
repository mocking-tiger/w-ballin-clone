"use client";

import { useRef } from "react";
import DivContent from "./DivContent";

export default function UpperDiv() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="aspect-[1/1] lg:aspect-[16/5.5] grid grid-cols-6 lg:grid-rows-4">
      <div className="col-span-4 lg:col-span-3">
        <DivContent
          bg="WebAllin.webp"
          hoverBg="WebAllin_hover.webp"
          img="WebAllin_click.webp"
          description="Showing a lot of determination and a willingness to take your success."
        />
      </div>
      <div className="col-span-2 lg:col-span-1 row-span-2">
        <DivContent
          bg="23_default.webp"
          hoverBg="23_hover_L.webp"
          img="jordan_click.webp"
          description="Play Like Michael Jordan."
        />
      </div>
      <div className="col-span-3 lg:col-span-2 row-span-4 group relative order-1 lg:order-none">
        <DivContent bg="B-logo_default.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw]"
          src="/div/B-logo_hover_L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-4 lg:col-span-3">
        <DivContent bg="AllinPackage.webp" hoverBg="AllinPackage_hover.webp" />
      </div>
      <div className="col-span-3 lg:col-span-2 grid grid-cols-3">
        <div className="relative group">
          <DivContent bg="Geek_default_L.webp" />
          <video
            className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
            src="/div/Geek_hover.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="col-span-2" onClick={handlePlayAudio}>
          <DivContent bg="magnificent.webp" hoverBg="magnificent_hover.webp" />
          <audio src="/div/magnificent_audio.mp3" ref={audioRef} />
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 row-span-2 group relative order-2 lg:order-none">
        <DivContent
          bg="Ballin_default.png"
          description="A state of being extremely clients success and. likes to show off how clients are. Success."
          video="Ballin_click-L.webm"
        />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover pointer-events-none"
          src="/div/Ballin_hover-L.webm"
          autoPlay
          muted
          onMouseEnter={(e) => (e.currentTarget.currentTime = 0)}
        />
      </div>
      <div className="col-span-3 lg:col-span-2 group relative order-1 lg:order-none">
        <DivContent bg="Mustard_default.webp" />
        <a href="https://www.youtube.com/watch?v=YS0h2-hy9rw" target="_blank">
          <video
            className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
            src="/div/Mustard_hover_L.webm"
            autoPlay
            loop
            muted
          />
        </a>
      </div>
    </div>
  );
}
