import CompanyBlock from "./CompanyBlock";

export default function PartnersAndClients() {
  return (
    <div
      id="partners"
      className="w-[90%] lg:w-[960px] mx-auto mb-[100px] scrollTarget"
    >
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
  );
}
