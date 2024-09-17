import Image from "next/image";

export default function HistoryCircle({
  year,
  innerCircle,
  square,
}: {
  year: string;
  innerCircle: string;
  square: string;
}) {
  return (
    <div className="w-[152px] lg:w-[192px] h-aut history-circle">
      <p className="w-fit mx-auto text-[1.4rem] lg:text-[1.8rem] font-bold">
        {year}
      </p>
      <div
        className={`w-full h-[152px] lg:h-[192px] my-[11px] border border-black rounded-full flex justify-center items-center ${
          square === "" ? "bg-black" : "bg-white"
        }`}
      >
        <p
          className={`text-[1.8rem] lg:text-[2.2rem] font-bold ${
            square === "" ? "text-white" : ""
          }`}
        >
          {innerCircle}
        </p>
      </div>
      <p
        className={`w-fit mx-auto px-2 py-1 text-[1.4rem] lg:text-[1.6rem] font-bold border border-black rounded-lg ${
          square === "" ? "bg-black" : ""
        }`}
      >
        {square}
        {square === "With" && (
          <>
            {" "}
            <Image
              className="inline"
              src="/business/hist-google.webp"
              width={50}
              height={19}
              alt="hist-google"
            />
          </>
        )}
        {square === "" && (
          <Image
            className="inline"
            src="/business/hist-weballin.webp"
            width={60}
            height={17}
            alt="hist-wballin"
          />
        )}
      </p>
    </div>
  );
}
