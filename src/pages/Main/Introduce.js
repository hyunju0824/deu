import React from "react";

export default function Introduce() {
    return (
        <div>
            {/* Introduce 조기취업형 계약학과 소개 */}
            <div className="md:mx-2 2xl:mx-[200px] mt-[50px] md:mt-[200px] mb-[50px] md:mb-[180px]">
                <div className="text-[#1035D1] text-[14px] md:text-[22px] tracking-[0.3px]">
                    Introduce
                </div>
                <div className="text-[22px] md:text-[40px] font-bold mb-4 md:mb-[32px]">
                    조기취업형 계약학과 소개
                </div>
                {/* 사진 3개 */}
                <div className="mx-[4%] md:mx-0 md:flex justify-between">
                    <div className="md:w-[32.5%]">
                        <div className="introduce1 h-[240px] md:h-[692px] md:px-[36px] md:pb-[63px] md:text-left flex flex-col flex-start justify-center md:justify-end items-center md:items-start text-white gap-3 md:gap-0">
                            <div className="text-[20px] md:text-[32px] font-bold">
                                스마트호스피탈리티학과
                            </div>
                            <div className="hidden md:block text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">
                                현장 실무형 스마트호스피탈리티 인재 육성을 위해 교과과정 및
                                실습교육을 진행합니다.
                            </div>
                            <a>
                                <div className="w-[116px] md:w-[162px] h-[40px] md:h-[57px] border-2 border-white border-opacity-30 rounded-[20px] md:rounded-[28px] flex justify-center items-center text-[14px] md:text-[18px] font-medium hover:bg-[#1035D1] hover:border-opacity-0 cursor-pointer">
                                    학과 바로가기
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[32.5%] my-[3%] md:my-0">
                        <div className="introduce2 h-[240px] md:h-[692px] md:px-[36px] md:pb-[63px] md:text-left flex flex-col flex-start justify-center md:justify-end items-center md:items-start text-white gap-3 md:gap-0">
                            <div className="text-[20px] md:text-[32px] font-bold">
                                미래형자동차학과
                            </div>
                            <div className="hidden md:block text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">
                                미래형자동차 핵심 부품 기업과 협업을 통해 지속가능한 기술을
                                선도합니다.
                            </div>
                            <a>
                                <div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center text-[18px] font-medium hover:bg-[#1035D1] hover:border-opacity-0 cursor-pointer">
                                    학과 바로가기
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[32.5%]">
                        <div className="introduce3 h-[240px] md:h-[692px] md:px-[36px] md:pb-[63px] md:text-left flex flex-col flex-start justify-center md:justify-end items-center md:items-start text-white gap-3 md:gap-0">
                            <div className="text-[20px] md:text-[32px] font-bold">
                                소프트웨어융합학과
                            </div>
                            <div className="hidden md:block text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">
                                IT 기술의 발전 흐름에 맞춰 전기전자, 컴퓨터, 기계 분야 중심으로
                                인재를 양성합니다.
                            </div>
                            <a>
                                <div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center text-[18px] font-medium hover:bg-[#1035D1] hover:border-opacity-0 cursor-pointer">
                                    학과 바로가기
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
