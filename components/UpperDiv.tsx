import DivContent from "./DivContent";

export default function UpperDiv() {
  return (
    <div className="aspect-[16/6] grid grid-cols-6 grid-rows-4">
      <div className="col-span-3">
        <DivContent bg="/div/WebAllin.webp" />
      </div>
      <div className="col-span-1 row-span-2">
        <DivContent bg="/div/23_default.webp" />
      </div>
      <div className="col-span-2 row-span-4">
        <DivContent bg="/div/B-logo_default.webp" />
      </div>
      <div className="col-span-3">
        <DivContent bg="/div/AllinPackage.webp" />
      </div>
      <div className="col-span-2 grid grid-cols-3">
        <div className="relative group">
          <DivContent bg="/div/Geek_default_L.webp" />
          <video
            className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-cover"
            src="/div/Geek_hover.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="col-span-2">
          <DivContent bg="/div/magnificent.webp" />
        </div>
      </div>
      <div className="col-span-2 row-span-2">
        <DivContent bg="/div/Ballin_default.webp" />
      </div>
      <div className="col-span-2">
        <DivContent bg="/div/Mustard_default.webp" />
      </div>
    </div>
  );
}
