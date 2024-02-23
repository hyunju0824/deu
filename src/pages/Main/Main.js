import { Link } from "react-router-dom"
import './Main.css';
import MainBanner from "./MainBanner";
import Introduce from "./Introduce"
import News from "./News";

export default function Main() {
    return (
        // overflow-x-hidden 여기 해서 사업단 소식 숨겼다!!!!!!
        <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full overflow-x-hidden">
        {/* // <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full "> */}
            {/* 메인 배너 배경 */}
            <MainBanner/>
            <Introduce/>
            <News/>
            

            

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
