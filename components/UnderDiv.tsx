import DivContent from "./DivContent";

export default function UnderDiv() {
  return (
    <div className="aspect-[16/5] grid grid-cols-12 grid-rows-4">
      <div className="col-span-6 row-span-2">
        <DivContent bg="weballin-logo_default_m.png" slide1 />
      </div>
      <div className="col-span-3 row-span-3">
        <DivContent bg="gangnam_hover_L@2x.webp" filter />
      </div>
      <div className="col-span-2 row-span-3">
        <DivContent bg="client_default_L.webp" slide2 />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent
          bg="20180628_default_L.webp"
          hoverBg="20180628_hover_L.webp"
        />
      </div>
      <div className="col-span-1 row-span-2 bg-white rounded-[1vw]">
        <DivContent bg="t1.png" hoverBg="t2.png" contain />
      </div>
      <div className="col-span-5 row-span-1">
        <DivContent bg="email_default_L.webp" hoverBg="email_hover_L@2x.png" />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent
          bg="Scratch_default_L.webp"
          hoverBg="Scratch_hover_L.webp"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent bg="Lucky_default_L.webp" hoverBg="Lucky_hover_L.webp" />
      </div>
      <div className="col-span-5 row-span-1">
        <DivContent bg="phone_default_L.webp" hoverBg="phone_hover_L@2x.png" />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent bg="ceo_default_L.webp" hoverBg="ceo-hover.png" />
      </div>
      <div className="col-span-2 row-span-1 relative group">
        <DivContent bg="partner_default_L.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/partner_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-3 row-span-1">
        <DivContent bg="copyright_default_L.png" />
      </div>
    </div>
  );
}
