import Image from "next/image";

export default function DDMBlock({
  bg,
  logo,
  description,
  icons,
}: {
  bg: string;
  logo: string;
  description: string;
  icons: string[];
}) {
  return (
    <div
      className={`w-[960px] mx-auto mb-[24px] p-[32px] ${bg} rounded-lg relative`}
    >
      <Image
        className="mb-[18px]"
        src={logo}
        width={
          bg === "bg-businessDesign" ? 81 : bg === "bg-businessDev" ? 59 : 105
        }
        height={26}
        alt="design-logo"
      />
      <p
        className={`${
          bg === "bg-businessDesign"
            ? "lg:w-[420px]"
            : bg === "bg-businessDev"
            ? "lg:w-[550px]"
            : "lg:w-[530px]"
        } mb-[32px] text-[2.2rem] text-white font-bold`}
      >
        {description}
      </p>
      <span className="mb-[18px] block text-[2rem] text-white opacity-35">
        주요기술
      </span>
      <div className="flex gap-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`w-[64px] h-[64px] ${icon} rounded-full`}
          />
        ))}
      </div>
      <a
        href="#"
        className="text-[2rem] text-white absolute right-16 top-[35%] group"
      >
        <span
          className={`underline  underline-offset-4 ${
            bg === "bg-businessDesign"
              ? "underline-animation2"
              : bg === "bg-businessDev"
              ? "underline-animation3"
              : "underline-animation4"
          }`}
        >
          바로가기
        </span>
        <Image
          className="ml-3 inline group-hover:-translate-y-2 transition-all duration-300"
          src="/business/arrow-top-right.png"
          width={14}
          height={14}
          alt="arrow-icon"
        />
      </a>
    </div>
  );
}
