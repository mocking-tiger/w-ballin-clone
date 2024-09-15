import PartnersAndClients from "@/components/Parteners&Clients";
import Image from "next/image";

export default function Business() {
  return (
    <section className="mt-[54px] md:mt-[66px] font-[SpoqaHanSansNeo-Regular]">
      <article className="w-full h-[240px] md:h-[400px] lg:h-[600px] bg-business1 bg-cover bg-[center]">
        <div className="w-full h-full flex flex-col justify-center bg-businessShadow">
          <h2 className="w-[90%] lg:w-[60%] mx-auto relative top-0 lg:-top-[30px] text-[2.4rem] md:text-[3.2rem] lg:text-[5.6rem] font-bold text-white animate-slideIn">
            Web all in
          </h2>
          <p className="w-[90%] lg:w-[60%] mx-auto text-[1.4rem] md:text-[1.6rem] lg:text-[2rem] text-white opacity-0 animate-fadeIn">
            We ballin on a Design, Marketing, and Development
          </p>
        </div>
      </article>
      <article className="w-full">
        <PartnersAndClients />
      </article>
      <article className="py-[80px] bg-black">
        <div className="w-[960px] mx-auto p-[32px] bg-businessDesign rounded-lg relative">
          <Image
            className="mb-[18px]"
            src="/business/design-logo.webp"
            width={81}
            height={26}
            alt="design-logo"
          />
          <p className="mb-[32px] text-[2.2rem] text-white font-bold">
            UI/UX 디자인 전문가로 이루어진 팀으로부터
            <br /> 트랜디한 디자인을 받아 보실 수 있습니다.
          </p>
          <span className="mb-[18px] block text-[2rem] text-white opacity-35">
            주요기술
          </span>
          <div className="flex gap-8">
            <div className="w-[64px] h-[64px] bg-[url('/business/ps-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/ai-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/ae-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/id-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/xd-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/zeplin-icon.webp')] rounded-full" />
            <div className="w-[64px] h-[64px] bg-[url('/business/protopie-icon.webp')] rounded-full" />
          </div>
          <a
            href="#"
            className="text-[2rem] text-white absolute right-16 top-[35%] group"
          >
            <span className="underline underline-animation2 underline-offset-4">
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
      </article>
    </section>
  );
}
