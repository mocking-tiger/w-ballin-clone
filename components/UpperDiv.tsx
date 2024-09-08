import DivContent from "./DivContent";

export default function UpperDiv() {
  return (
    <div className="w-full h-[600px] grid grid-cols-6 grid-rows-4">
      <div className="col-span-3">
        <DivContent>Web All In</DivContent>
      </div>
      <div className="col-span-1 row-span-2">
        <DivContent>23</DivContent>
      </div>
      <div className="col-span-2 row-span-4">
        <DivContent>B</DivContent>
      </div>
      <div className="col-span-3">
        <DivContent>All in Package</DivContent>
      </div>
      <div className="col-span-2 grid grid-cols-3">
        <div className="">
          <DivContent>Geek</DivContent>
        </div>
        <div className="col-span-2">
          <DivContent>Magnificent</DivContent>
        </div>
      </div>
      <div className="col-span-2 row-span-2">
        <DivContent>Ballin</DivContent>
      </div>
      <div className="col-span-2">
        <DivContent>Mustard</DivContent>
      </div>
    </div>
  );
}
