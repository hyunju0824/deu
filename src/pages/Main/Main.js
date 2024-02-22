import React, { useState } from "react"
import { Link } from "react-router-dom"

// 메인배너 슬라이드
const banner = [
    { image: "" }
];

export default function Main() {
    return (

        // max-w-7xl px-4 sm:px-6 lg:px-8

        // 메인배너 레이아웃
        <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full">
            {/* 메인 배너 배경 */}
            <div className="main_banner_01 h-screen">
                {/* 메인배너 마진 */}
                <div className="mx-200 pt-250 2xl:pb-[310px] pb-[180px] text-left text-white">
                    {/* 메인 배너 글자 */}
                    <div className="flex items-center font-bold">
                        <div className="text-lg">01</div>
                        <div className="px-4">——</div>
                        <div className="text-lg	">04</div>
                        <div className="btn_arrow_left ml-5 mr-1"></div>
                        <div className="btn_arrow_right"></div>
                    </div>
                    <div className="pt-7 pb-4 text-64 leading-[84px]">
                        <p>미래산업의 중심</p>
                        <p className="font-semibold">동의대학교 조기취업형 계약학과</p>
                    </div>
                    <div className="text-2xl leading-[34px]">
                        <p>조기취업형 계약학과 입학과 동시에 취업을!</p>
                        <p>기업맞춤형 교육과정에 따라 전공교육을 실시합니다.</p>
                    </div>
                </div>
                {/* 마우스 컨테이너 */}
                <div className="flex flex-col items-center">
                    <div className="ic_scrolldown"></div>
                    <div className="ic_scrolldown02"></div>
                </div>
            </div>

            {/* Introduce 조기취업형 계약학과 소개 */}
            <div className="mx-200 mt-[200px] mb-[180px]">
                <div className="text-[#1035D1] text-[22px] tracking-[0.3px]">Introduce</div>
                <div className="text-[40px] font-bold mb-[32px]">조기취업형 계약학과 소개</div>
                {/* 사진 3개 */}
                <div className="flex justify-between">
                    <div>
                        <div className="introduce1 w-[496px] h-[692px] px-[36px] pb-[63px] text-left flex flex-col flex-start justify-end text-white">
                            <div className="text-[32px] font-bold">스마트호스피탈리티학과</div>
                            <div className="text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">현장 실무형 스마트호스피탈리티 인재 육성을 위해 교과과정 및 실습교육을 진행합니다.</div>
                            <a><div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center hover:bg-white text-[18px] font-medium hover:bg-[blue] hover:border-opacity-0">학과 바로가기</div></a>
                        </div>
                    </div>
                    <div>
                        <div className="introduce2 w-[496px] h-[692px] px-[36px] pb-[63px] text-left flex flex-col flex-start justify-end text-white">
                            <div className="text-[32px] font-bold">미래형자동차학과</div>
                            <div className="text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">미래형자동차 핵심 부품 기업과 협업을 통해 지속가능한 기술을 선도합니다.</div>
                            <a><div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center hover:bg-white text-[18px] font-medium hover:bg-[blue] hover:border-opacity-0">학과 바로가기</div></a>
                        </div>
                    </div><div>
                        <div className="introduce3 w-[496px] h-[692px] px-[36px] pb-[63px] text-left flex flex-col flex-start justify-end text-white">
                            <div className="text-[32px] font-bold">소프트웨어융합학과</div>
                            <div className="text-[#D6D6D6] text-[20px] font-medium pt-[7px] pb-[35px]">IT 기술의 발전 흐름에 맞춰 전기전자, 컴퓨터, 기계 분야 중심으로 인재를 양성합니다.</div>
                            <a><div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center hover:bg-white text-[18px] font-medium hover:bg-[blue] hover:border-opacity-0">학과 바로가기</div></a>
                        </div>
                    </div>

                </div>
            </div>

            {/* news 사업단 소식 */}
            <div className="bg-[#F7F9FB] ">
                <div className="ml-200 text-left flex w-[2500px] pt-[184px] pb-[160px]">
                    <div className="mr-[120px]">
                        <div className="text-[#1035D1] text-[22px] tracking-[0.3px] font-medium">News</div>
                        <div className="text-[40px] font-semibold mb-[5px] mt-[2px]">사업단 소식</div>
                        <div className="text-[20px]">동의대학교 조기취업형 계약학과</div> <div className="text-[20px]">사업단의 소식을 알려드립니다.</div>
                        {/* 슬라이더 */}
                        <div className="flex text-base pt-8 text-center items-center place-content-between">
                            <div>01</div>
                            <div className="text-[#aaa] px-[10px]">/</div>
                            <div className="text-[#aaa] pr-[14px]">04</div>
                            {/* 작대기 */}
                            <div className="w-[120px] h-[2px] bg-[#ededed] mr-[14px]"><div className="w-[25%] h-[2px] bg-[#414141]"></div></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-[#cccccc] hover:text-black" width="24">
                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path>
                            </svg>
                            <div className="w-[1px] h-[12px] mx-[7px] bg-[#aaa]"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-[#cccccc] hover:text-black" width="24">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <a><div className="w-[155px] h-[60px] mt-[60px] border-[1px] border-[#1035D1] rounded-[28px] flex justify-center items-center text-[18px] text-[#1035D1] text-xl font-semibold hover:bg-[blue] hover:text-white">소식 더보기</div></a>
                    </div>
                    <div className="flex overflow-hidden">
                        <div className="w-[512px]">
                            <div className="w-[496px]">
                                <div className="news1 w-[496px] h-[336px] inline-block"></div>
                                <div className="text-[24px] font-medium pt-[12px] pb-[19px]">미래형자동차학과 현대차블루핸즈(부산광역권) 간의 우수 인재 양성을 위한 MOU체결식 개최</div>
                                <div className="text-xl text-[#aaa]">2023.12.07</div>
                            </div>
                        </div>
                        <div className="w-[512px]">
                            <div className="w-[496px]">
                                <div className="news2 w-[496px] h-[336px] inline-block"></div>
                                <div className="text-[24px] font-medium pt-[12px] pb-[19px]">스마트호스피탈리티학과 "제2회 호텔&레스토랑 산업전" 참가</div>
                                <div className="text-xl text-[#aaa]">2023.12.02</div>
                            </div>
                        </div>
                        <div className="w-[512px]">
                            <div className="w-[496px]">
                                <div className="news3 w-[496px] h-[336px] inline-block"></div>
                                <div className="text-[24px] font-medium pt-[12px] pb-[19px]">청년인턴이 바라본 규제 혁신현장-스마트호스피탈리티학과 김권동 교수 인터뷰</div>
                                <div className="text-xl text-[#aaa]">2023.11.14</div>
                            </div>
                        </div>
                        <div className="w-[512px]">
                            <div className="w-[496px]">
                                <div className="news4 w-[496px] h-[336px] inline-block"></div>
                                <div className="text-[24px] font-medium pt-[12px] pb-[19px]">2023학년 3개 학과 체육대회</div>
                                <div className="text-xl text-[#aaa]">2023.10.16</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 공지사항 */}
            <div className="mx-200">
                <div className="pt-[152px] text-[40px] font-bold">공지사항</div>
                <div>
                    <nav className="flex justify-center pt-[41px] pb-[53px] gap-[25px]">
                        <a><div className="px-[22px] h-[40px] rounded-[20px] bg-[#1035D1] flex justify-center items-center text-[18px] text-[#EDEDED] text-xl font-medium">전체</div></a>
                        <a><div className="px-[22px] h-[40px] rounded-[20px] flex justify-center items-center text-[18px] text-[#333333] text-xl font-medium">공지안내</div></a>
                        <a><div className="px-[22px] h-[40px] rounded-[20px] flex justify-center items-center text-[18px] text-[#333333] text-xl font-medium">입학설명회</div></a>
                        <a><div className="px-[22px] h-[40px] rounded-[20px] flex justify-center items-center text-[18px] text-[#333333] text-xl font-medium">모집요강</div></a>
                    </nav>
                </div>

                <div className="flex place-content-between text-left">
                    <div className="flex flex-col place-content-between w-[368px] h-[271px] px-[34px] py-[34px] bg-[#F5F8FA] rounded-[12px]">
                        <div>
                            <div className="text-[18px] text-[#1035D1] font-medium pb-[10px]">모집요강</div>
                            <div className="text-[22px] font-semibold">2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강</div>
                        </div>
                        <div className="text-[20px] text-[#AAA]">2023.12.11.</div>
                    </div>
                    <div className="flex flex-col place-content-between w-[368px] h-[271px] px-[34px] py-[34px] bg-[#F5F8FA] rounded-[12px]">
                        <div>
                            <div className="text-[18px] text-[#1035D1] font-medium pb-[10px]">모집요강</div>
                            <div className="text-[22px] font-semibold">2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강</div>
                        </div>
                        <div className="text-[20px] text-[#AAA]">2023.12.11.</div>
                    </div>
                    <div className="flex flex-col place-content-between w-[368px] h-[271px] px-[34px] py-[34px] bg-[#F5F8FA] rounded-[12px]">
                        <div>
                            <div className="text-[18px] text-[#1035D1] font-medium pb-[10px]">모집요강</div>
                            <div className="text-[22px] font-semibold">2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강</div>
                        </div>
                        <div className="text-[20px] text-[#AAA]">2023.12.11.</div>
                    </div>
                    <div className="flex flex-col place-content-between w-[368px] h-[271px] px-[34px] py-[34px] bg-[#F5F8FA] rounded-[12px]">
                        <div>
                            <div className="text-[18px] text-[#1035D1] font-medium pb-[10px]">모집요강</div>
                            <div className="text-[22px] font-semibold">2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강</div>
                        </div>
                        <div className="text-[20px] text-[#AAA]">2023.12.11.</div>
                    </div>
                </div>
                <div className="flex justify-center	">
                <a><div className="w-[152px] h-[60px] mt-[60px] mb-[130px] border-[1px] border-[#1035D1] rounded-[30px] flex justify-center items-center text-[18px] text-[#1035D1] text-xl font-semibold hover:bg-[blue] hover:text-white">더보기</div></a>
                </div>
            </div>

        </div>
    )
}
