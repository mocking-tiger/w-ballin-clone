import KakaoMap from "./KakaoMap";

export default function MapBox() {
  return (
    <div>
      <div className="mt-[100px] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full text-[4.8rem] text-left lg:text-[8rem] leading-[50px] lg:leading-[90px]">
          WHERE
          <br />I<br />
          AM
        </div>
        <div className="w-full text-[2rem] text-right lg:text-[2.4rem]">
          7호선 면목역
          <br />
          3번 출구 700m 이내
        </div>
      </div>
      <div className="aspect-[16/9] mt-20">
        <KakaoMap />
      </div>
    </div>
  );
}
