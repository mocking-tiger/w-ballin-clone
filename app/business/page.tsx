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
              index={3}
            />
            <HistoryCircle
              year="2014"
              innerCircle="R&D Center 확장"
              square="청담 센터"
              index={2}
            />
            <HistoryCircle
              year="2018"
              innerCircle="컨퍼런스 주최"
              square="With"
              index={1}
            />
            <HistoryCircle
              year="2021"
              innerCircle="상호 변경"
              square=""
              index={0}
            />
          </div>
        </div>
      </article>
      <article>
        <div className="w-full h-[342px] md:h-[378px] lg:h-[478px] bg-[url('/business/keyword-creative-bg-s.webp')] md:bg-[url('/business/keyword-creative-bg-ml.webp')] bg-cover bg-[center] rounded-xl">
          <div className="h-full mx-[16px] md:mx-[44px] lg:mx-[108px] text-white flex flex-col gap-5 md:gap-10 justify-start md:justify-center">
            <h2 className="mt-[20px] md:mt-0 text-[2.8rem] md:text-[4.8rem] lg:text-[6.4rem] font-bold">
              Creative
            </h2>
            <p className="w-full max-w-[550px] md:w-[500px] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
              각 분야별 최고의 Guru들로 구성된 회사로서 다년간 수행한 수많은
              실적을 바탕으로 탁월한 기획력, 신뢰와 창의를
              <br className="hidden md:block" /> 바탕으로 한 사명감과 신뢰가
              가득한 믿음직한 기업 위볼린
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
