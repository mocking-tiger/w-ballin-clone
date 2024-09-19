import CheckBox from "./CheckBox";
import ContactInput from "./ContactInput";

export default function Contact() {
  return (
    <div className="w-[960px] mx-auto font-bold">
      <h2 className="mb-[60px] text-[4rem]">Contact</h2>
      <div className="w-full mb-[47px] text-[4.8rem] flex flex-col items-end">
        <p className="w-[503.91px]">
          <a href="tel:010-3469-7095">010-3469-7095</a>
        </p>
        <p className="w-fit">
          <a href="mailto:dyden119@gmail.com">dyden119@gmail.com</a>
        </p>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-x-20">
          <ContactInput placeholder="업체명" />
          <ContactInput placeholder="성명" />
          <ContactInput placeholder="연락처" />
          <ContactInput placeholder="이메일" type="email" />
          <ContactInput placeholder="제목" />
          <ContactInput placeholder="현 사이트 / 앱 주소" required={false} />
        </div>
        <div className="my-[30px] flex justify-between">
          <h3 className="text-[2.2rem] font-bold">관심분야</h3>
          <div className="w-[650px] flex flex-wrap gap-y-10 justify-between">
            <CheckBox about="웹사이트 제작" width="w-[165px]" />
            <CheckBox about="SEO (검색엔진최적화)" width="w-[245px]" />
            <CheckBox about="모바일최적화" width="w-[160px]" />
            <CheckBox about="키워드광고" width="w-[165px]" />
            <CheckBox about="소셜미디어대행" width="w-[245px]" />
            <CheckBox about="로컬최적화" width="w-[160px]" />
          </div>
        </div>
      </form>
    </div>
  );
}
