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
    </section>
  );
}
