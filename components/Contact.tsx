"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";
import ContactInput from "./ContactInput";
import ModalForContact from "./ModalForContact";
import MapBox from "./MapBox";
import { useLanguageContext } from "@/context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguageContext();
  const [budget, setBudget] = useState(300);
  const [thisModal, setThisModal] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const sliderLevels = [100, 150, 200, 250, 300, 350, 400, 450, 500];

  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      const refCurrent = blockRef;
      if (refCurrent.current) observer.unobserve(refCurrent.current);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // window.grecaptcha를 통해 객체가 있는지 확인
    const recaptchaResponse = window.grecaptcha?.getResponse();
    if (!recaptchaResponse) {
      alert("reCAPTCHA를 확인해주세요.");
    } else {
      // reCAPTCHA가 확인된 경우, 폼을 제출하거나 다른 로직을 추가하세요
      console.log("폼 제출 처리");
    }
  };

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const loadRecaptcha = () => {
      if (typeof window !== "undefined" && !isRecaptchaLoaded) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js`;
        script.onload = () => setIsRecaptchaLoaded(true);
        document.body.appendChild(script);
      }
    };
    loadRecaptcha();
  }, [isRecaptchaLoaded]);

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div
      id="contact"
      className={`w-[90%] lg:w-[960px] mx-auto font-bold scrollTarget`}
    >
      <h2
        ref={blockRef}
        className={`mb-[60px] text-[2.2rem] lg:text-[4rem] opacity-0 ${
          isVisible ? "animate-fadeInFast" : ""
        }`}
      >
        Contact
      </h2>
      <div
        className={`w-full mb-[47px] text-[2.4rem] lg:text-[4.8rem] flex flex-col items-end opacity-0 ${
          isVisible ? "animate-fadeInFast" : ""
        }`}
      >
        <p className="w-auto lg:w-[503.91px]">
          <a href="tel:010-3469-7095">010-3469-7095</a>
        </p>
        <p className="w-fit">
          <a href="mailto:dyden119@gmail.com">dyden119@gmail.com</a>
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`opacity-0 ${isVisible ? "animate-slideIn" : ""}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-20`}>
          <ContactInput
            placeholder={lang === "KOR" ? "업체명" : "Company name"}
          />
          <ContactInput placeholder={lang === "KOR" ? "성명" : "Name"} />
          <ContactInput
            placeholder={lang === "KOR" ? "연락처" : "Phone Number"}
            type="email"
          />
          <ContactInput placeholder={lang === "KOR" ? "이메일" : "E-mail"} />
          <ContactInput placeholder={lang === "KOR" ? "제목" : "Title"} />
          <ContactInput
            required={false}
            placeholder={
              lang === "KOR"
                ? "현 사이트 / 앱 주소"
                : "Current site / App address"
            }
          />
        </div>
        <div className="my-[30px] flex flex-col md:flex-row justify-between">
          <h3 className="mb-10 md:mb-0 text-[2.2rem] font-bold">관심분야</h3>
          <div className="w-auto md:w-[650px] flex flex-wrap gap-y-10 justify-between">
            <CheckBox about="웹사이트 제작" width="w-auto md:w-[165px]" />
            <CheckBox
              about="SEO (검색엔진최적화)"
              width="w-auto md:w-[245px]"
            />
            <CheckBox about="모바일최적화" width="w-auto md:w-[160px]" />
            <CheckBox about="키워드광고" width="w-auto md:w-[165px]" />
            <CheckBox about="소셜미디어대행" width="w-auto md:w-[245px]" />
            <CheckBox about="로컬최적화" width="w-auto md:w-[160px]" />
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            <div className="w-full lg:w-auto flex gap-[16px] items-end">
              <h3 className="text-[2.0rem] lg:text-[2.2rem]">집행예산</h3>
              <h4 className="text-[1.5rem] lg:text-[1.6rem] opacity-85">
                월 예산
              </h4>
            </div>
            <div className="w-full lg:w-auto text-right text-[3.0rem] lg:text-[4.8rem]">
              {`${budget}만원 ${
                budget === 100 ? "이하" : budget === 500 ? "이상" : ""
              }`}
              <span className="text-[1.8rem] lg:text-[2.2rem] opacity-70">
                입니다.
              </span>
            </div>
          </div>
          <div className="mt-[36px] lg:mt-[48px] mb-[83px] lg:mb-[101px] relative">
            <input
              type="range"
              step={50}
              min={100}
              max={500}
              className="w-full lg:w-[80%] block mx-auto custom-range-slider"
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="w-full lg:w-[80%] mx-auto mt-3 flex justify-between lg:gap-[4.5%]">
              {sliderLevels.map((level, index) => (
                <div key={level}>
                  <span
                    className={`w-full block text-[1.2rem] lg:text-[1.6rem] text-gray-400 ${
                      level === budget && "opacity-0"
                    } ${
                      width < 765 &&
                      level !== 100 &&
                      level !== 300 &&
                      level !== 500
                        ? "opacity-0"
                        : ""
                    } ${index === 8 ? "text-right" : ""}`}
                  >
                    {level}
                  </span>
                  <h6
                    className={`px-2 lg:px-4 py-0 lg:py-1 bg-black rounded-full text-[1.4rem] lg:text-[2rem] text-white opacity-0 relative left-0 lg:-left-6 ${
                      level === budget && "opacity-100"
                    }`}
                  >
                    {`${level === 100 ? "~" : ""}${level}${
                      level === 500 ? "~" : ""
                    }`}
                  </h6>
                  <div
                    className={`w-4 h-4 bg-[#c0c0c0] rounded-full relative -top-[55px] lg:-top-[75px] left-3 lg:left-[10px] ${
                      index === 8
                        ? "float-right lg:float-none !left-0"
                        : "float-start"
                    } ${level === budget ? "opacity-0" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-[16px] relative">
          <textarea
            required
            placeholder="요청사항"
            className="w-full h-[272px] px-[30px] py-[28px] text-[1.6rem] lg:text-[2.2rem] border border-black rounded-2xl resize-none focus:outline-none overflow-hidden"
          />
          <span className="absolute w-[6px] h-[6px] bg-black rounded-full left-10 top-10"></span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-start lg:items-center">
          <CheckBox
            about="개인정보 수집 및 이용에 동의합니다."
            width="w-fit"
            policy
          />
          <span
            className="text-[1.6rem] lg:text-[1.8rem] underline cursor-pointer font-semibold"
            onClick={() => setThisModal((prev) => !prev)}
          >
            개인정보 취급방침
          </span>
        </div>
        {isRecaptchaLoaded && (
          <div className="w-fit mx-auto my-20">
            <div
              className="g-recaptcha"
              data-sitekey="6LevIEkqAAAAAEOhLk97u5uPS1Zed0olPzjWN3aI"
            ></div>
          </div>
        )}
        <button
          type="submit"
          className="mx-auto px-16 py-4 block text-[2.2rem] bg-black text-white rounded-2xl"
        >
          문의하기
        </button>
      </form>
      <ModalForContact thisModal={thisModal} setThisModal={setThisModal} />
      <MapBox />
    </div>
  );
}
