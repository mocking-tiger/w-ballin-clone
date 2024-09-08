import Image from "next/image";
import { ReactNode } from "react";

export default function DivContent({
  children,
  arrow,
}: {
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <div className="w-full h-full border-black border-2 bg-white rounded-[1vw] relative">
      {children}
      {arrow && (
        <Image
          className="absolute top-0 right-0"
          src="/div-arrow.svg"
          width={18}
          height={18}
          alt="arrow-icon"
        />
      )}
    </div>
  );
}
