import DivContent from "./DivContent";

export default function MiddleDiv() {
  return (
    <div className="grid grid-cols-9 grid-rows-9">
      <div className="col-span-5 row-span-3">
        <DivContent bg="" />
      </div>
    </div>
  );
}
