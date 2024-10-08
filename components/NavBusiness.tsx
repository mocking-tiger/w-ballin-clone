"use client";

import { useLanguageContext } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

export default function NavBusiness({
  isClick,
  setIsClick,
  page,
}: {
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
  page: string;
}) {
  const router = useRouter();
  const { lang, changeLanguage } = useLanguageContext();
  const [isHover, setIsHover] = useState(false);

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
    <ul className="pr-[30px] flex gap-5 lg:gap-20 items-center text-white text-[2rem] font-[SpoqaHanSansNeo-Regular]">
      <a href="#partners">
        <li className="cursor-pointer hidden lg:block underline-animation">
          {lang === "KOR" ? "클라이언트" : "Clients"}
        </li>
      </a>
      <a href="#DDM">
        <li className="cursor-pointer hidden lg:block underline-animation">
          {lang === "KOR" ? "서비스" : "Service"}
        </li>
      </a>
      <a href="#history">
        <li className="cursor-pointer hidden lg:block underline-animation">
          {lang === "KOR" ? "연혁" : "History"}
        </li>
      </a>
      <a href="#contact">
        <li className="-mr-10 cursor-pointer hidden lg:block underline-animation">
          {lang === "KOR" ? "문의하기" : "Contact"}
        </li>
      </a>
      <li
        className="underline text-gray-300 items-center gap-10 cursor-pointer hidden lg:flex relative"
        onMouseEnter={() => setIsHover(true)}
      >
        <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
        {lang === "KOR" ? "KR" : "EN"}
        {isHover && (
          <div
            className={`p-5 absolute bg-white rounded-2xl -bottom-[90px] right-0 border border-black text-[1.8rem] flex flex-col gap-3`}
            onMouseLeave={() => setIsHover(false)}
          >
            <span
              className={`${lang === "ENG" ? "text-black" : "underline"}`}
              onClick={() => changeLanguage("KOR")}
            >
              한국어
            </span>
            <span
              className={`${lang === "KOR" ? "text-black" : "underline"}`}
              onClick={() => changeLanguage("ENG")}
            >
              ENGLISH
            </span>
          </div>
        )}
      </li>
      <div
        className={`w-[46px] md:w-[54px] h-[28px] md:h-[32px] border border-white rounded-full bg-[rgba(199,199,199,0.4)] cursor-pointer group relative ${
          isClick ? "hidden" : ""
        }`}
        onClick={() => {
          page === "/business";
          router.push("/");
        }}
      >
        {page === "/" ? (
          <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#000] bg-toggle bg-cover rounded-full relative top-[3px] left-[3px] lg:group-hover:translate-x-2 transition-transform duration-300"></div>
        ) : (
          <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#fff] bg-toggleBusiness bg-cover rounded-full absolute top-[3px] right-1 lg:group-hover:-translate-x-2 transition-transform duration-300"></div>
        )}
        <div className="w-fit px-4 py-1 absolute top-[40px] -left-[60px] text-[1.6rem] font-semibold border rounded-full bg-black whitespace-nowrap hidden lg:group-hover:block z-10">
          {"캐쥬얼 ON"}
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
