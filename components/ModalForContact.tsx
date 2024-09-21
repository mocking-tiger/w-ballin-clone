"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function ModalForContact({
  thisModal,
  setThisModal,
}: {
  thisModal: boolean;
  setThisModal: Dispatch<SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModalClose = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setThisModal(false);
    }
  };

  useEffect(() => {
    if (thisModal) {
      document.addEventListener("click", handleModalClose);
    } else {
      document.removeEventListener("click", handleModalClose);
    }

    return () => {
      document.removeEventListener("click", handleModalClose);
    };
    // eslint-disable-next-line
  }, [thisModal]);

  return (
    <div
      ref={modalRef}
      className={`w-[302px] md:w-[400px] lg:w-auto max-w-[800px] h-auto max-h-[732px] p-[16px] lg:p-[40px] fixed z-20 left-16 bottom-16 border-2 bg-black text-white rounded-[1vw] ${
        thisModal ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-full lg:w-[712px] h-auto max-h-[574px] border-2 rounded-[1vw] overflow-y-auto relative bg-white text-black`}
      >
        <div className="p-5">
          <div className="mb-10">
            <p className="text-[1.8rem] mb-5">개인정보 취급방침</p>
            <p className="text-[1.5rem] mb-10">
              (주)W볼린(이하’회사’라 함) 고객님의 개인정보를 중요시하며,
              ‘정보통신망 이용 촉진 및 정보보호’에관한 법률 을 준수합니다.
              회사는 고객문의 접수를 통해 작성해주신 고객님의 개인정보에
              대한수집, 이용, 보유기간을 아래와 같이 안내 하오며, 문의사항에
              대한 답변을 드리기 위해서는 개인정보 수집 및 이용에 고객님의
              동의가 필요하오니 아래 내용을 참고하여주시기 바랍니다.
            </p>
            <div className="flex flex-wrap justify-between text-[1.5rem]">
              <div className="mb-20 md:mb-0">
                <p className="mb-3">목적</p>
                <p className="mb-3">본인여부 확인</p>
                <p className="mb-3">문의에 대한 답변</p>
              </div>
              <div className="mb-20 md:mb-0">
                <p className="mb-3">항목</p>
                <p className="mb-3">성명</p>
                <p className="mb-3">
                  업체명, 연락처, 이메일, 제목, 현 사이트/맵 주소, 요청사항
                </p>
              </div>
              <div className="mb-20 md:mb-0">
                <p className="mb-3">보유기간</p>
                <p className="mb-3">답변완료 후 5일까지</p>
                <p className="mb-3">답변완료 후 5일까지</p>
              </div>
            </div>
          </div>
          <hr className="border-black mb-10" />
          <div className="pop-bottom">
            <p className="text-[1.4rem] text-[#6f6f6f]">
              *구색 갖추기용으로 작성한 글이며 개인정보를 저장하거나 사용하지
              않습니다.
            </p>
          </div>
        </div>
      </div>
      <p className="text-[2rem] lg:text-[2.4rem] tracking-tighter">{""}</p>
      <div
        className="px-[18px] py-[8px] absolute left-0 -top-28 bg-black border-2 rounded-[1vw] cursor-pointer underline text-[2rem]"
        onClick={(e) => {
          e.stopPropagation();
          setThisModal((prev) => !prev);
        }}
      >
        Click anywhere to Close
      </div>
    </div>
  );
}
