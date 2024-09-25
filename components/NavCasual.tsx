"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function NavCasual({
  isClick,
  setIsClick,
  page,
}: {
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
  page: string;
}) {
  const router = useRouter();

  const handleSetClick = () => {
    const width = window.innerWidth;
    if (width > 1023) {
      setIsClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetClick);

    return () => window.removeEventListener("resize", handleSetClick);
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="pr-[30px] flex gap-5 lg:gap-20 items-center text-white text-[2rem]">
      <li className="cursor-pointer hover:text-[#f2756b] relative group transition-colors duration-200 hidden lg:block">
        Design
        <Image
          className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          src="/header-arrow01.svg"
          width={8}
          height={8}
          alt="arrow-icon1"
        />
      </li>
      <li className="cursor-pointer hover:text-[#6bf27b] relative group transition-colors duration-200 hidden lg:block">
        Development
        <Image
          className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          src="/header-arrow02.svg"
          width={8}
          height={8}
          alt="arrow-icon2"
        />
      </li>
      <li className="cursor-pointer hover:text-[#6b6bf2] relative group transition-colors duration-200 hidden lg:block">
        Digital Marketing
        <Image
          className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          src="/header-arrow03.svg"
          width={8}
          height={8}
          alt="arrow-icon3"
        />
      </li>
      <div
        className={`w-[46px] md:w-[54px] h-[28px] md:h-[32px] border border-white rounded-full bg-[rgba(199,199,199,0.4)] cursor-pointer group relative ${
          isClick ? "hidden" : ""
        }`}
        onClick={() => {
          router.push("/business");
        }}
      >
        {page === "/" ? (
          <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#000] bg-toggle bg-cover rounded-full relative top-[3px] left-[3px] lg:group-hover:translate-x-2 transition-transform duration-300"></div>
        ) : (
          <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#fff] bg-toggleBusiness bg-cover rounded-full absolute top-[3px] right-1 lg:group-hover:-translate-x-2 transition-transform duration-300"></div>
        )}
        <div className="w-fit px-4 py-1 absolute top-[40px] -left-[60px] text-[1.6rem] font-semibold border rounded-full bg-black whitespace-nowrap hidden lg:group-hover:block z-10">
          {"비즈니스 ON"}
        </div>
      </div>
      <Image
        className="cursor-pointer lg:hidden"
        src={isClick ? "/menu-close@2x.png" : "/header-menu.svg"}
        width={isClick ? 52 : 40}
        height={40}
        alt="menu-icon"
        onClick={() => setIsClick((prev) => !prev)}
      />
    </ul>
  );
}
