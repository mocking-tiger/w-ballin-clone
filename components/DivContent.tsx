import { ReactNode } from "react";

export default function DivContent({
  children,
  bg,
}: {
  children?: ReactNode;
  bg?: string;
}) {
  return (
    <div
      className={`w-full h-full border-black border-2 bg-white rounded-[1vw] relative cursor-pointer`}
      style={{
        backgroundImage: bg ? `url(${bg})` : "none",
        backgroundSize: "100%", // 백그라운드 이미지의 크기 조정
        backgroundPosition: "center", // 백그라운드 이미지의 위치 설정
      }}
    >
      {children}
    </div>
  );
}
