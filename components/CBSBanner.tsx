export default function CBSBanner({ title }: { title: string }) {
  return (
    <div
      className={`w-full h-[342px] md:h-[378px] lg:h-[478px] bg-cover bg-[center] rounded-xl ${
        title === "Creative"
          ? "bg-[url('/business/keyword-creative-bg-s.webp')] md:bg-[url('/business/keyword-creative-bg-ml.webp')]"
          : title === "Best Partner"
          ? "bg-[url('/business/keyword-partner-bg-s.webp')] md:bg-[url('/business/keyword-partner-bg-ml.webp')]"
          : "bg-[url('/business/keyword-success-bg-s.webp')] md:bg-[url('/business/keyword-success-bg-ml.webp')]"
      }`}
    >
      <div
        className={`w-auto lg:w-[960px] h-full mx-[16px] md:mx-[44px] lg:mx-auto flex flex-col gap-5 md:gap-10 justify-start md:justify-center ${
          title === "Creative" ? "text-white" : ""
        }`}
      >
        <h2 className="mt-[20px] md:mt-0 text-[2.8rem] md:text-[4.8rem] lg:text-[6.4rem] font-bold">
          {title}
        </h2>
        {title === "Creative" && (
          <p className="w-full max-w-[550px] md:w-[500px] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
            각 분야별 최고의 Guru들로 구성된 회사로서 다년간 수행한 수많은
            실적을 바탕으로 탁월한 기획력, 신뢰와 창의를
            <br className="hidden md:block" /> 바탕으로 한 사명감과 신뢰가
            가득한 믿음직한 기업 W볼린
          </p>
        )}
        {title === "Best Partner" && (
          <p className="w-full max-w-[550px] md:w-[500px] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
            항상 고객을 먼저 생각하는 기업이 되고자 합니다. 앞으로도
            <br className="hidden md:block" />
            W볼린은 고객의 가치 및 매출을 극대화하기 위해 늘 고민하고 성실한
            자세로 최선을 다하겠습니다.
          </p>
        )}
        {title === "Success" && (
          <p className="w-full max-w-[550px] md:w-[500px] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
            보다 열정적으로, 보다 전문적으로, 보다 창조적으로, 보다 고객
            만족적으로, 더욱 상호작용적인 기업이 되고자 하는
            <br className="hidden md:block" />
            W볼린의 노력은 계속될 것입니다.
          </p>
        )}
      </div>
    </div>
  );
}
