import { useState } from "react";

{
    /* 공지사항 */
}
export default function Notice() {
    const tabs = [
        { name: "전체", href: "#", current: true },
        { name: "공지안내", href: "#", current: false },
        { name: "입학설명회", href: "#", current: false },
        { name: "모집요강", href: "#", current: false },
    ];

    const [currentTab, setCurrentTab] = useState("전체");

    const tabContents1 = [
        {
            text1: "모집요강",
            text2: "2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강",
            text3: "2023.12.11",
        },
        {
            text1: "모집요강",
            text2: "2024학년도 동의대학교 조기취업형계약학과 수시모집 요강",
            text3: "2023.08.01",
        },
        {
            text1: "모집요강",
            text2: "2023학년도 동의대학교 조기취업형계약학과 정시모집 안내",
            text3: "2022.12.09",
        },
        {
            text1: "입학설명회",
            text2: "2023학년도 동의대학교 조기취업형 계약학과 6월 입학설명회(3차) 개최",
            text3: "2022.06.22",
        },
    ];
    const tabContents2 = [
        {
            text1: "공지 안내",
            text2: "[KNN]조기취업형계약학과 뉴스영상",
            text3: "2021.06.01",
        },
        {
            text1: "공지 안내",
            text2: "[헬로 이슈토크]조기취업형계약학과, 입학이 곧 취업 (YOUTUBE영상 게시)",
            text3: "2020.11.25",
        },
        {
            text1: "공지 안내",
            text2: "동의대, 조기취업형 계약학과-우수 관광 관련 기업 업무 협약 (YOUTUBE 영상 게시)",
            text3: "2020.11.05",
        },
        {
            text1: "공지 안내",
            text2: "[한국산업기술진흥원] 조기취업형 계약학과 종합포털 오픈 안내",
            text3: "2020.09.24",
        },
    ];
    const tabContents3 = [
        {
            text1: "입학설명회",
            text2: "2023학년도 동의대학교 조기취업형 계약학과 6월 입학설명회(3차) 개최",
            text3: "2022.06.22.",
        },
        {
            text1: "입학설명회",
            text2: "2023학년도 동의대학교 조기취업형 계약학과 7월 입학설명회(4차) 개최",
            text3: "2022.06.22",
        },
        {
            text1: "입학설명회",
            text2: "2023학년도 동의대학교 조기취업형 계약학과 5월 입학설명회(2차) 개최",
            text3: "2022.05.17",
        },
        {
            text1: "입학설명회",
            text2: "동의대학교 조기취업형 계약학과 6월 입학설명회 개최",
            text3: "2021.06.03",
        },
    ];
    const tabContents4 = [
        {
            text1: "모집요강",
            text2: "2024학년도 동의대학교 조기취업형계약학과 정시 모집 요강",
            text3: "2023.12.11",
        },
        {
            text1: "모집요강",
            text2: "2024학년도 동의대학교 조기취업형계약학과 수시모집 요강",
            text3: "2023.08.01",
        },
        {
            text1: "모집요강",
            text2: "2023학년도 동의대학교 조기취업형계약학과 정시모집 안내",
            text3: "2022.12.09",
        },
        {
            text1: "모집요강",
            text2: "동의대학교 조기취업형계약학과 2023학년도 수시모집요강",
            text3: "2021.06.13",
        },
    ];

    const tabContents = {
        전체: tabContents1,
        공지안내: tabContents2,
        입학설명회: tabContents3,
        모집요강: tabContents4,
    };

    return (
        <div className="md:mx-200">
            <div className="pt-[54px] md:pt-[152px] text-[22px] md:text-[40px] font-bold">
                공지사항
            </div>
            <div>
                <nav className="flex justify-center pt-[30px] md:pt-[41px] pb-[28px] md:pb-[53px] gap-[7px] md:gap-[25px]">
                    {tabs.map((tab, index) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={index}
                            onClick={() => setCurrentTab(tab.name)}
                            className="cursor-pointer"
                        >
                            <div
                                className={
                                    tab.name === currentTab
                                        ? "px-[16px] md:px-[22px] h-[33px] md:h-[40px] rounded-[20px] bg-[#1035D1] flex justify-center items-center text-[#EDEDED] text-[14px] md:text-xl font-medium"
                                        : "px-[16px] md:px-[22px] h-[33px] md:h-[40px] rounded-[20px] flex justify-center items-center text-[#333333] text-[14px] md:text-xl font-medium border-[1px] border-[#d6d6d6] md:border-0"
                                }
                            >
                                {tab.name}
                            </div>
                        </a>
                    ))}
                </nav>
            </div>

            <div className="md:flex mx-4 md:mx-0 place-content-between text-left">
                <div className="flex flex-col md:place-content-between md:w-[24%] md:h-[271px] mb-6 md:mb-0 px-[16px] md:px-[34px] py-[20px] md:py-[34px] bg-[#F5F8FA] rounded-[12px]">
                    <div>
                        <div className="text-[14px] md:text-[18px] text-[#1035D1] font-medium pb-[10px]">
                            {tabContents[currentTab][0].text1}
                        </div>
                        <div className="pb-[30px] md:pb-0 text-[18px] md:text-[22px] font-semibold">
                            {tabContents[currentTab][0].text2}
                        </div>
                    </div>
                    <div className="text-[14px] md:text-[20px] text-[#AAA]">
                        {tabContents[currentTab][0].text3}
                    </div>
                </div>
                <div className="flex flex-col md:place-content-between md:w-[24%] md:h-[271px] mb-6 md:mb-0 px-[16px] md:px-[34px] py-[20px] md:py-[34px] bg-[#F5F8FA] rounded-[12px]">
                    <div>
                        <div className="text-[14px] md:text-[18px] text-[#1035D1] font-medium pb-[10px]">
                            {tabContents[currentTab][1].text1}
                        </div>
                        <div className="pb-[30px] md:pb-0 text-[18px] md:text-[22px] font-semibold">
                            {tabContents[currentTab][1].text2}
                        </div>
                    </div>
                    <div className="text-[14px] md:text-[20px] text-[#AAA]">
                        {tabContents[currentTab][1].text3}
                    </div>
                </div>
                <div className="flex flex-col md:place-content-between md:w-[24%] md:h-[271px] mb-6 md:mb-0 px-[16px] md:px-[34px] py-[20px] md:py-[34px] bg-[#F5F8FA] rounded-[12px]">
                    <div>
                        <div className="text-[14px] md:text-[18px] text-[#1035D1] font-medium pb-[10px]">
                            {tabContents[currentTab][2].text1}
                        </div>
                        <div className="pb-[30px] md:pb-0 text-[18px] md:text-[22px] font-semibold">
                            {tabContents[currentTab][2].text2}
                        </div>
                    </div>
                    <div className="text-[14px] md:text-[20px] text-[#AAA]">
                        {tabContents[currentTab][2].text3}
                    </div>
                </div>
                <div className="flex flex-col md:place-content-between md:w-[24%] md:h-[271px] px-[16px] md:px-[34px] py-[20px] md:py-[34px] bg-[#F5F8FA] rounded-[12px]">
                    <div>
                        <div className="text-[14px] md:text-[18px] text-[#1035D1] font-medium pb-[10px]">
                            {tabContents[currentTab][3].text1}
                        </div>
                        <div className="pb-[30px] md:pb-0 text-[18px] md:text-[22px] font-semibold">
                            {tabContents[currentTab][3].text2}
                        </div>
                    </div>
                    <div className="text-[14px] md:text-[20px] text-[#AAA]">
                        {tabContents[currentTab][3].text3}
                    </div>
                </div>
            </div>
            <div className="flex justify-center	">
                <a>
                    <div className="w-[84px] md:w-[152px] h-[40px] md:h-[60px] mt-[28px] md:mt-[60px] mb-[57px] md:mb-[130px] border-[1px] border-[#1035D1] rounded-[30px] flex justify-center items-center text-[#1035D1] text-[14px] md:text-xl font-semibold hover:bg-[blue] hover:text-white cursor-pointer">
                        더보기
                    </div>
                </a>
            </div>
        </div>
    );
}
