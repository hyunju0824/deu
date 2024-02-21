import { Link } from "react-router-dom"
import './Main.css';

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
            <div className="mx-200 mt-[200px]">
                <div className="text-[#1035D1] text-[22px] tracking-[0.3px]">Introduce</div>
                <div className="text-[40px]">조기취업형 계약학과 소개</div>
                {/* 사진 3개 */}
                <div>

                    <div>
                        <div className="introduce1 w-[496px] h-[692px] px-[36px] pb-[63px] text-left flex flex-col flex-start justify-end text-white">
                            <div className="text-[32px] font-bold">스마트호스피탈리티학과</div>
                            <div>현장 실무형 스마트호스피탈리티 인재 육성을 위해 교과과정 및 실습교육을 진행합니다.</div>
                            <a><div className="w-[162px] h-[57px] border-2 border-white border-opacity-30 rounded-[28px] flex justify-center items-center hover:bg-white ">학과 바로가기</div></a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
