import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[32px] py-[22px] bg-black">
      <div className="text-white text-[1.6rem]">
        <Link href="#" className="hover:underline tracking-tighter">
          이용약관
        </Link>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <Link href="#" className="hover:underline tracking-tighter">
          개인정보처리방침
        </Link>
      </div>
    </footer>
  );
}
