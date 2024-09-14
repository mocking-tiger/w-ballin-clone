export default function CompanyBlock() {
  return (
    <div className="border border-black lg:border-transparent lg:hover:bg-black rounded-xl lg:rounded-none">
      <div className="aspect-[16/8] rounded-3xl bg-cover bg-company bg-[url('/business/company-hover.png')] lg:bg-[url('/business/company.png')] hover:bg-[url('/business/company-hover.png')] transition-all duration-500" />
    </div>
  );
}
