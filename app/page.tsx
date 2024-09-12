import MiddleDiv from "@/components/MiddleDiv";
import UnderDiv from "@/components/UnderDiv";
import UpperDiv from "@/components/UpperDiv";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <section className="mt-[54px] lg:mt-[66px]">
        <UpperDiv />
        <MiddleDiv />
        <UnderDiv />
      </section>
    </div>
  );
}
