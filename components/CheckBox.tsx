"use client";

import { useState } from "react";

export default function CheckBox({
  about,
  width,
  policy = false,
}: {
  about: string;
  width: string;
  policy?: boolean;
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${width} flex gap-3 items-center cursor-pointer group`}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <div
        className={`w-[29px] h-[29px] border border-black rounded-lg bg-gray-100 bg-center ${
          !isClicked && "group-hover:bg-[url('/business/form-chk-hover.png')]"
        }`}
        style={{
          backgroundImage: isClicked
            ? "url('/business/form-chk-active.png')"
            : "",
        }}
      ></div>
      <span
        className={`${
          policy ? "text-[1.8rem] text-[#6f6f6f]" : "text-[2.2rem]"
        } font-bold`}
      >
        {about}
      </span>
    </div>
  );
}
