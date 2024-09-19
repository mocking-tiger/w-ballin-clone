"use client";

import { useState } from "react";
import CheckBox from "./CheckBox";
import ContactInput from "./ContactInput";
import ModalForContact from "./ModalForContact";

export default function Contact() {
  const [budget, setBudget] = useState(300);
  const [thisModal, setThisModal] = useState(false);
  const sliderLevels = [100, 150, 200, 250, 300, 350, 400, 450, 500];

  return (
    <div className="w-[960px] mx-auto font-bold">
      <h2 className="mb-[60px] text-[4rem]">Contact</h2>
      <div className="w-full mb-[47px] text-[4.8rem] flex flex-col items-end">
        <p className="w-[503.91px]">
          <a href="tel:010-3469-7095">010-3469-7095</a>
        </p>
        <p className="w-fit">
          <a href="mailto:dyden119@gmail.com">dyden119@gmail.com</a>
        </p>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-x-20">
          <ContactInput placeholder="업체명" />
          <ContactInput placeholder="성명" />
          <ContactInput placeholder="연락처" />
          <ContactInput placeholder="이메일" type="email" />
          <ContactInput placeholder="제목" />
          <ContactInput placeholder="현 사이트 / 앱 주소" required={false} />
        </div>
        <div className="my-[30px] flex justify-between">
          <h3 className="text-[2.2rem] font-bold">관심분야</h3>
          <div className="w-[650px] flex flex-wrap gap-y-10 justify-between">
            <CheckBox about="웹사이트 제작" width="w-[165px]" />
            <CheckBox about="SEO (검색엔진최적화)" width="w-[245px]" />
            <CheckBox about="모바일최적화" width="w-[160px]" />
            <CheckBox about="키워드광고" width="w-[165px]" />
            <CheckBox about="소셜미디어대행" width="w-[245px]" />
            <CheckBox about="로컬최적화" width="w-[160px]" />
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="flex justify-between">
            <div className="flex gap-[16px] items-end">
              <h3 className="text-[2.2rem]">집행예산</h3>
              <h4 className="text-[1.6rem] opacity-85">월 예산</h4>
            </div>
            <div className="text-[4.8rem]">
              {`${budget}만원 ${
                budget === 100 ? "이하" : budget === 500 ? "이상" : ""
              }`}
              <span className="text-[2.2rem] opacity-70">입니다.</span>
            </div>
          </div>
          <div className="mt-[48px] mb-[101px] relative">
            <input
              type="range"
              step={50}
              min={100}
              max={500}
              className="w-[80%] block mx-auto custom-range-slider"
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="w-[80%] mx-auto mt-3 flex gap-[4.5%]">
              {sliderLevels.map((level) => (
                <div key={level}>
                  <span
                    className={`text-[1.6rem] text-gray-400 ${
                      level === budget && "opacity-0"
                    }`}
                  >
                    {level}
                  </span>
                  <h6
                    className={`px-4 py-1 bg-black rounded-full text-[2rem] text-white opacity-0 relative -left-6 ${
                      level === budget && "opacity-100"
                    }`}
                  >
                    {`${level === 100 ? "~" : ""}${level}${
                      level === 500 ? "~" : ""
                    }`}
                  </h6>
                  <div className="w-4 h-4 bg-[#c0c0c0] rounded-full relative -top-[75px] left-[10px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-[16px] relative">
          <textarea
            placeholder="요청사항"
            className="w-full h-[272px] px-[30px] py-[28px] text-[2.2rem] border border-black rounded-2xl resize-none focus:outline-none overflow-hidden"
          />
          <span className="absolute w-[6px] h-[6px] bg-black rounded-full left-10 top-10"></span>
        </div>
        <div className="flex gap-5 items-center">
          <CheckBox
            about="개인정보 수집 및 이용에 동의합니다."
            width="w-fit"
            policy
          />
          <span
            className="text-[1.8rem] underline cursor-pointer font-semibold"
            onClick={() => setThisModal((prev) => !prev)}
          >
            개인정보 취급방침
          </span>
        </div>
      </form>
      <ModalForContact thisModal={thisModal} setThisModal={setThisModal} />
    </div>
  );
}
