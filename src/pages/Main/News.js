export default function News() {
    return(
        <div>
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
        </div>
    )
}