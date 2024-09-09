import DivContent from "./DivContent";

export default function MiddleDiv() {
  return (
    <div className="aspect-[16/13] grid grid-cols-12 grid-rows-9">
      <div className="col-span-7 row-span-3">
        <DivContent bg="Design_default_L.webp" />
      </div>
      <div className="col-span-5 row-span-4">
        <DivContent bg="Dev_default_L.webp" />
      </div>
      <div className="col-span-7 row-span-3">
        <DivContent bg="DigitalMarketing_default_L.webp" />
      </div>
      <div className="col-span-5 row-span-6">
        <DivContent bg="DataDriven_default_L.webp" />
      </div>
      <div className="col-span-2 row-span-3">
        <DivContent bg="Rad-Design_default_L.webp" />
      </div>
      <div className="col-span-2 row-span-3">
        <DivContent bg="Rad-Dev_default_L.webp" />
      </div>
      <div className="col-span-2 row-span-3">
        <DivContent bg="Rad-Marketing_default_L.webp" />
      </div>
      <div className="col-span-1 row-span-1">
        <DivContent bg="20151015_default_L.webp" />
      </div>
      <div className="col-span-1 row-span-2 px-3">
        <DivContent bg="cocacola_default_L.webp" />
      </div>
    </div>
  );
}
