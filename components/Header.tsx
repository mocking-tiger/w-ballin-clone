"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import NavCasual from "./NavCasual";
import NavBusiness from "./NavBusiness";

export default function Header() {
  const page = usePathname();
  const router = useRouter();
  const { lang, changeLanguage } = useLanguageContext();
  const [isClick, setIsClick] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <header className="w-full px-0 fixed top-0 z-10 md:px-[34px] lg:px-[68px] bg-black">
      <div className="flex items-center">
        <div className="p-[12px] flex-grow">
          <Link className="w-[155px] block" href="/">
            {/* <Image src="/logo.svg" width={155} height={42} alt="logo" /> */}
            <div className="w-[109px] md:w-[155px] h-[30px] md:h-[42px] bg-[url('/logo.svg')] hover:bg-[url('/logo-color.svg')] bg-cover transition-all duration-500"></div>
          </Link>
        </div>
        {page === "/" ? (
          <NavCasual isClick={isClick} setIsClick={setIsClick} page={page} />
        ) : (
          <NavBusiness isClick={isClick} setIsClick={setIsClick} page={page} />
        )}
      </div>
      {isClick && (
        <div className="w-full h-screen mt-[54px] lg:mt-[66px] px-[20px] lg:px-[46px] text-white fixed inset-0 bg-black z-50 flex flex-col gap-[30px] lg:hidden">
          <div
            className={`w-[54px] h-[28px] md:h-[32px] mt-[10px] border border-white rounded-full bg-[rgba(199,199,199,0.4)] cursor-pointer relative`}
            onClick={() => {
              page === "/business"
                ? router.push("/")
                : router.push("/business");
              setIsClick(false);
            }}
          >
            {page === "/" ? (
              <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#000] bg-toggle bg-cover rounded-full relative top-[3px] left-[3px] lg:group-hover:translate-x-2 transition-transform duration-300"></div>
            ) : (
              <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#fff] bg-toggleBusiness bg-cover rounded-full absolute top-[3px] right-1 lg:group-hover:-translate-x-2 transition-transform duration-300"></div>
            )}{" "}
          </div>
          <div
            className="w-fit underline text-gray-300 items-center gap-7 cursor-pointer flex absolute left-[90px] top-[7px] md:top-[10px]"
            onMouseEnter={() => setIsHover(true)}
          >
            <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
            <span className="text-[2rem]">KR</span>
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
          </div>
          {page === "/" ? (
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>Design</span>
                <Image
                  className="relative -top-5 -right-5"
                  src="/header-arrow01.svg"
                  width={12}
                  height={12}
                  alt="arrow-icon1"
                />
              </div>
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>Development</span>
                <Image
                  className="relative -top-5 -right-5"
                  src="/header-arrow02.svg"
                  width={12}
                  height={12}
                  alt="arrow-icon2"
                />
              </div>
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>Digital Marketing</span>
                <Image
                  className="relative -top-5 -right-5"
                  src="/header-arrow03.svg"
                  width={12}
                  height={12}
                  alt="arrow-icon3"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[30px] ">
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>클라이언트</span>
              </div>
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>서비스</span>
              </div>
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>연혁</span>
              </div>
              <div className="text-[2rem] md:text-[3.2rem] font-bold flex cursor-pointer">
                <span>문의하기</span>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
