import React, {useRef} from "react";
import Slider from "react-slick";

export default function MainBanner() {

    const sliderRef = useRef();

    const next = () => {
        sliderRef.current.slickNext();
      }
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }

    var setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        { mbImage: "main_banner_01" },
        { mbImage: "main_banner_02" },
        { mbImage: "main_banner_03" },
        { mbImage: "main_banner_04" },
    ]

    return (
        <div>
           <Slider ref={sliderRef} {...setting}>
                {slides.map((slide, index) => (
                <div key={index} className={`h-screen ${slide.mbImage}`}>
                    {/* 메인배너 마진 */}
                    <div className="mx-200 pt-250 2xl:pb-[310px] pb-[180px] text-left text-white">
                        {/* 메인 배너 글자 */}
                        <div className="flex items-center font-bold">
                            <div className="text-lg">01</div>
                            <div className="px-4">——</div>
                            <div className="text-lg">04</div>
                            <button
                            className={` ml-5 mr-1 btn_arrow_left`}
                            onClick={previous}
                            >
                            </button>
                            <button className="btn_arrow_right" onClick={next}></button>
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
                ))}
            </Slider>

        </div>
    );
}