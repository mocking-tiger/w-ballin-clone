import CompanyBlock from "@/components/CompanyBlock";

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
        <div className="w-[90%] lg:w-[960px] mx-auto mb-[100px]">
          <h2 className="my-[24px] lg:my-[56px] text-[2rem] lg:text-[4rem] font-bold">
            Partners & Clients
          </h2>
          <h3 className="w-fit px-3 py-1 text-[1.6rem] border border-black rounded-xl">
            Partners
          </h3>
          <div className="my-[20px] lg:my-[32px] grid grid-cols-3 md:grid-cols-4">
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
          </div>
          <h3 className="w-fit px-3 py-1 text-[1.6rem] border border-black rounded-xl">
            Clients
          </h3>
          <div className="my-[12px] lg:my-[32px] grid grid-cols-3 md:grid-cols-4 lg:gap-y-14">
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
            <CompanyBlock />
          </div>
        </div>
      </article>
    </section>
  );
}
