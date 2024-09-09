import MiddleDiv from "@/components/MiddleDiv";
import UpperDiv from "@/components/UpperDiv";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <section>
        <UpperDiv />
        <MiddleDiv />
      </section>
    </div>
  );
}
