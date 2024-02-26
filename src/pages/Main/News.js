import React, { useRef, useState } from "react";
import Slider from "react-slick";

export default function News() {

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const next = () => {
        sliderRef.current.slickNext();
    }

    const previous = () => {
        sliderRef.current.slickPrev();
    }

    var setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const slides = [
        {
            bannerNum: "01",
            bannerBar: "new_bar1",
            newsImage: "news1",
            text1: "미래형자동차학과 현대차블루핸즈(부산광역권) 간의 우수 인재 양성을 위한 MOU체결식 개최",
            text2: "2023.12.07",
        },
        {
            bannerNum: "02",
            bannerBar: "new_bar2",
            newsImage: "news2",
            text1: `스마트호스피탈리티학과 "제2회 호텔&레스토랑 산업전" 참가`,
            text2: "2023.12.02",
        },
        {
            bannerNum: "03",
            bannerBar: "new_bar3",
            newsImage: "news3",
            text1: "청년인턴이 바라본 규제 혁신현장-스마트호스피탈리티학과 김권동 교수 인터뷰",
            text2: "2023.11.14",
        },
        {

            bannerNum: "04",
            bannerBar: "new_bar4",
            newsImage: "news4",
            text1: "2023학년 3개 학과 체육대회",
            text2: "2023.10.16",
        },
    ]

    return (
        <div>
            {/* news 사업단 소식 */}
            <div className="bg-[#F7F9FB]">
                <div className="ml-200 text-left flex w-[1945px] pt-[184px] pb-[160px]">
                    <div className="mr-[110px]">
                        <div className="text-[#1035D1] text-[22px] tracking-[0.3px] font-medium">News</div>
                        <div className="text-[40px] font-semibold mb-[5px] mt-[2px]">사업단 소식</div>
                        <div className="text-[20px]">동의대학교 조기취업형 계약학과</div> <div className="text-[20px]">사업단의 소식을 알려드립니다.</div>
                        {/* 슬라이더 */}
                        <div className="flex text-base pt-8 text-center items-center place-content-between">
                            <div className="w-[34px]">{slides[currentSlide].bannerNum}</div>
                            <div className=" text-[#aaa] px-[10px]">/</div>
                            <div className="w-[34px] text-[#aaa] pr-[14px]">04</div>
                            {/* 작대기 */}
                            <div className="w-[120px] h-[2px] bg-[#ededed] mr-[14px]"><div className={`${slides[currentSlide].bannerBar}`}></div></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-[#cccccc] hover:text-black" width="24" onClick={previous}>
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"></path>
                            </svg>
                            <div className="w-[1px] h-[12px] mx-[7px] bg-[#aaa]"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-[#cccccc] hover:text-black" width="24" onClick={next}>
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <a><div className="w-[155px] h-[60px] mt-[60px] border-[1px] border-[#1035D1] rounded-[28px] flex justify-center items-center text-[18px] text-[#1035D1] text-xl font-semibold hover:bg-[blue] hover:text-white cursor-pointer">소식 더보기</div></a>
                    </div>
                    <div className="flex overflow-hidden">
                        {/* <div className="flex"> */}

                        {/* <div className="w-[512px]"> */}
                        <div className="w-full">
                            <div className="w-full">
                                <Slider ref={sliderRef} {...setting}>
                                    {slides.map((slide, index) => (
                                        <div key={index} className="w-[512px]">
                                            <div className={`w-[496px] h-[336px] inline-block ${slide.newsImage}`}></div>
                                            <div className="w-[496px] text-[24px] font-medium pt-[12px] pb-[19px]">{slide.text1}</div>
                                            <div className="text-xl text-[#aaa]">{slide.text2}</div>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}