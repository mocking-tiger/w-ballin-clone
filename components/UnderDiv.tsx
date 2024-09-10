import DivContent from "./DivContent";

export default function UnderDiv() {
  return (
    <div className="aspect-[12/16] lg:aspect-[16/5] grid grid-cols-6 lg:grid-cols-12 grid-rows-8 lg:grid-rows-4">
      <div className="col-span-6 row-span-2">
        <DivContent bg="weballin-logo_default_m.png" slide1 />
      </div>
      <div className="col-span-3 row-span-3 order-1 lg:order-none">
        <DivContent bg="gangnam_hover_L@2x.webp" filter />
      </div>
      <div className="col-span-2 row-span-3 order-1 lg:order-none">
        <DivContent bg="client_default_L.webp" slide2 />
      </div>
      <div className="col-span-1 row-span-1 order-1 lg:order-none">
        <DivContent
          bg="20180628_default_L.png"
          hoverBg="20180628_hover_L.webp"
        />
      </div>
      <div className="col-span-1 row-span-2 bg-white rounded-[1vw] order-1 lg:order-none">
        <DivContent bg="t1.png" hoverBg="t2.png" contain />
      </div>
      <div className="col-span-5 row-span-1 order-0 lg:order-none">
        <DivContent bg="email_default_L.webp" hoverBg="email_hover_L@2x.png" />
      </div>
      <div className="col-span-1 row-span-1 order-0 lg:order-none">
        <DivContent
          bg="Scratch_default_L.webp"
          hoverBg="Scratch_hover_L.webp"
        />
      </div>
      <div className="col-span-1 row-span-1 order-0 lg:order-none">
        <DivContent bg="Lucky_default_L.webp" hoverBg="Lucky_hover_L.webp" />
      </div>
      <div className="col-span-5 row-span-1 order-0 lg:order-none">
        <DivContent bg="phone_default_L.webp" hoverBg="phone_hover_L@2x.png" />
      </div>
      <div className="col-span-1 row-span-1 order-2 lg:order-none">
        <DivContent bg="ceo_default_L.webp" hoverBg="ceo-hover.png" />
      </div>
      <div className="col-span-2 row-span-1 relative group order-2 lg:order-none">
        <DivContent bg="partner_default_L.webp" />
        <video
          className="w-full h-full absolute inset-0 group-hover:block hidden rounded-[1vw] object-fill"
          src="/div/partner_hover_L.webm"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="col-span-3 row-span-1 order-2 lg:order-none">
        <DivContent bg="copyright_default_L.png" />
      </div>
    </div>
  );
}
