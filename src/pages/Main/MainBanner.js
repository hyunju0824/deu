import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./MainBanner.css";

export default function MainBanner() {
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    var setting = {
        infinite: true,
        dots: window.innerWidth <= 768 ? true : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // 자동 재생 옵션 추가
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: function (i) {
            return <div className="my-custom-dot">{i + 1}</div>;
        },
    };

    const slides = [
        {
            mbImage: "main_banner_01",
            bannerNum: "01",
            text1: "미래산업의 중심",
            text2: "동의대학교 조기취업형 계약학과",
            text3: "조기취업형 계약학과 입학과 동시에 취업을!",
            text4: "기업맞춤형 교육과정에 따라 전공교육을 실시합니다.",
            bannerBtn: "btn_arrow_left",
        },
        {
            mbImage: "main_banner_02",
            bannerNum: "02",
            text1: "4차 산업 시대를",
            text2: "선도하는 소프트웨어 융합학과",
            text3: "빅데이터, 스마트 팩토리, 사물인터넷 등 4차산업 필수 기술을",
            text4: "효율적으로 익히는 전문 교육과정을 제공합니다.",
            bannerBtn: "btn_arrow_left2",
        },
        {
            mbImage: "main_banner_03",
            bannerNum: "03",
            text1: "맞춤형 기술 인력 양성",
            text2: "미래형자동차학과",
            text3: "실무 중심의 교육과 산업 연계를 통해 미래 자동차 산업분야에서",
            text4: "성공적인 경력을 쌓을 수 있습니다.",
            bannerBtn: "btn_arrow_left2",
        },
        {
            mbImage: "main_banner_04",
            bannerNum: "04",
            text1: "현장 중심의 인재 육성",
            text2: "스마트호스피탈리티학과",
            text3: "비대면 서비스 역량 강화와 다양한 기업 연계 프로그램으로",
            text4: "현장 중심의 스마트호스피탈리티 인재를 육성합니다.",
            bannerBtn: "btn_arrow_left2",
        },
    ];

    return (
        <div>
            <Slider ref={sliderRef} {...setting}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`h-[500px] w-full lg:h-screen relative ${slide.mbImage}`}
                    ></div>
                ))}
            </Slider>
            {/* 메인배너 마진 */}
            <div className="mx-4 lg:mx-200 pt-[100px] md:pt-[200px] 2xl:pt-[300px] 2xl:pb-[310px] pb-[180px] text-left text-white absolute top-0">
                {/* 메인 배너 글자 */}
                <div className="flex items-center font-bold">
                    <div className="text-[14px] md:text-lg w-[24px]">
                        {slides[currentSlide].bannerNum}
                    </div>
                    <div className="px-4">——</div>
                    <div className="text-[14px] md:text-lg w-[24px]">04</div>
                    <button
                        className={`hidden md:block ml-5 mr-1 ${slides[currentSlide].bannerBtn}`}
                        onClick={previous}
                    ></button>
                    <button className="btn_arrow_right hidden md:block" onClick={next}></button>
                </div>
                <div className="pt-3 md:pt-7 pb-2 md:pb-4 text-[24px] md:text-64 leading-[px] md:leading-[84px]">
                    <p>{slides[currentSlide].text1}</p>
                    <p className="font-semibold">{slides[currentSlide].text2}</p>
                </div>
                <div className="text-[16px] md:text-2xl leading-[-0.24px] md:leading-[34px]">
                    <p>{slides[currentSlide].text3}</p>
                    <p>{slides[currentSlide].text4}</p>
                </div>
            </div>
            {/* 마우스 컨테이너 */}
            <div className="hidden md:block absolute bottom-[2%] left-[50%] translate-x-[-5px] flex flex-col items-center pb-[10px]">
                <div class="flex flex-col items-center py-[4px] px-[10px] h-[27px] w-[3px] border-[1.5px] rounded-full box-content">
                    <div className="scroller w-[2px] h-[7px] rounded-full bg-white"></div>
                </div>
                <div className="ic_scrolldown02"></div>
            </div>
        </div>
    );
}
