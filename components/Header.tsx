import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-0 md:px-[34px] lg:px-[68px] bg-black">
      <div className="flex items-center">
        <div className="p-[12px] flex-grow">
          <Link className="w-[155px] block" href="/">
            {/* <Image src="/logo.svg" width={155} height={42} alt="logo" /> */}
            <div className="w-[109px] md:w-[155px] h-[30px] md:h-[42px] bg-[url('/logo.svg')] hover:bg-[url('/logo-color.svg')] bg-cover transition-all duration-500"></div>
          </Link>
        </div>
        <ul className="pr-[30px] flex gap-5 lg:gap-20 items-center text-white text-[2rem]">
          <li className="cursor-pointer hover:text-[#f2756b] relative group transition-colors duration-200 hidden lg:block">
            Design
            <Image
              className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              src="/header-arrow01.svg"
              width={8}
              height={8}
              alt="arrow-icon1"
            />
          </li>
          <li className="cursor-pointer hover:text-[#6bf27b] relative group transition-colors duration-200 hidden lg:block">
            Development
            <Image
              className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              src="/header-arrow02.svg"
              width={8}
              height={8}
              alt="arrow-icon1"
            />
          </li>
          <li className="cursor-pointer hover:text-[#6b6bf2] relative group transition-colors duration-200 hidden lg:block">
            Digital Marketing
            <Image
              className="absolute top-2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              src="/header-arrow03.svg"
              width={8}
              height={8}
              alt="arrow-icon1"
            />
          </li>
          <div className="w-[46px] md:w-[54px] h-[26px] md:h-[32px] border border-white rounded-full bg-[rgba(199,199,199,0.4)] cursor-pointer group relative">
            <div className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] bg-[#000] bg-toggle bg-cover rounded-full relative top-[3px] left-[3px] lg:group-hover:translate-x-2 transition-transform duration-300"></div>
            <div className="w-fit px-4 py-1 absolute top-[40px] -left-[60px] text-[1.6rem] font-semibold border rounded-full bg-black whitespace-nowrap hidden lg:group-hover:block z-10">
              비즈니스 ON
            </div>
          </div>
          <Image
            className="cursor-pointer lg:hidden"
            src="/header-menu.svg"
            width={40}
            height={40}
            alt="menu-icon"
          />
        </ul>
      </div>
    </header>
  );
}
