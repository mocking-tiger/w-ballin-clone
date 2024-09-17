import DDMBlock from "@/components/DDMBlock";
import HistoryCircle from "@/components/HistoryCircle";
import PartnersAndClients from "@/components/Parteners&Clients";

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
        <DDMBlock
          bg="bg-businessDesign"
          logo="/business/design-logo.webp"
          description="UI/UX 디자인 전문가로 이루어진 팀으로부터
트랜디한 디자인을 받아 보실 수 있습니다."
          icons={[
            "bg-[url('/business/ps-icon.webp')]",
            "bg-[url('/business/ai-icon.webp')]",
            "bg-[url('/business/ae-icon.webp')]",
            "bg-[url('/business/id-icon.webp')]",
            "bg-[url('/business/xd-icon.webp')]",
            "bg-[url('/business/zeplin-icon.webp')]",
            "bg-[url('/business/protopie-icon.webp')]",
          ]}
        />
        <DDMBlock
          bg="bg-businessDev"
          logo="/business/dev-logo.webp"
          description="원하시는 모든 분기의 반응형 웹, 다양한 효과를 가진 사이트
           등 상상하셨던 홈페이지를 현실로 만들어드립니다."
          icons={[
            "bg-[url('/business/html5-icon.webp')]",
            "bg-[url('/business/css3-icon.webp')]",
            "bg-[url('/business/js-icon.webp')]",
            "bg-[url('/business/php-icon.webp')]",
            "bg-[url('/business/nodejs-icon.webp')]",
            "bg-[url('/business/vue-icon.webp')]",
            "bg-[url('/business/sequelize-icon.webp')]",
            "bg-[url('/business/mysql-icon.webp')]",
            "bg-[url('/business/aws-icon.webp')]",
            "bg-[url('/business/centos-icon.webp')]",
            "bg-[url('/business/linux-icon.webp')]",
          ]}
        />
        <DDMBlock
          bg="bg-businessMarketing"
          logo="/business/mkt-logo.webp"
          description="SEO, SEM, 광고관리 등을 다양한 내/외부 솔루션을 통해
성과를 극대화하고, 철저하게 분석, 관리, 컨설팅 해드립니다."
          icons={[
            "bg-[url('/business/ads-icon.webp')]",
            "bg-[url('/business/analytics-icon.webp')]",
            "bg-[url('/business/tag-icon.webp')]",
            "bg-[url('/business/data-icon.webp')]",
            "bg-[url('/business/google-icon.webp')]",
            "bg-[url('/business/optimize-icon.webp')]",
            "bg-[url('/business/naver-icon.webp')]",
            "bg-[url('/business/kakao-icon.webp')]",
          ]}
        />
      </article>
      <article>
        <div className="w-[95%] lg:w-[960px] mx-auto py-[50px] lg:py-[120px]">
          <h2 className="mb-[20px] lg:mb-[50px] text-[2.2rem] lg:text-[4rem] font-bold">
            HISTORY
          </h2>
          <div className="flex flex-wrap lg:gap-24 justify-between lg:justify-center overflow-hidden">
            <HistoryCircle
              year="2012"
              innerCircle="회사 설립"
              square="JYP Network"
            />
            <HistoryCircle
              year="2014"
              innerCircle="R&D Center 확장"
              square="청담 센터"
            />
            <HistoryCircle
              year="2018"
              innerCircle="컨퍼런스 주최"
              square="With"
            />
            <HistoryCircle year="2021" innerCircle="상호 변경" square="" />
          </div>
        </div>
      </article>
    </section>
  );
}
