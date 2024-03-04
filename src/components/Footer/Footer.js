export default function Footer() {
    return (
        <div className="bg-gray-800 text-[#EDEDED] min-w-[375px]">
            <div className="mx-4 md:mx-200 pb-[16px] md:pb-[32px]">
                <div className="flex justify-between pt-[48px] pb-[25px]">
                    <div className="deuFooterLogo w-[180px] md:w-[293px] h-[39px] md:h-[63px]"></div>
                    <div className="hidden md:flex gap-[48px] items-end mb-[15px] font-medium">
                        <a>
                            <div>동의대학교</div>
                        </a>
                        <a>
                            <div>학생서비스센터</div>
                        </a>
                        <a>
                            <div>중앙도서관</div>
                        </a>
                        <a>
                            <div>종합정보시스템</div>
                        </a>
                        <a>
                            <div>취업정보</div>
                        </a>
                        <a>
                            <div>입학정보</div>
                        </a>
                        <a>
                            <div>상담</div>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block mb-[32px] h-[1px] bg-[#363945]"></div>
                <div className="md:hidden flex items-center w-[178px] h-[40px] bg-[#15202E] pl-3 mb-4">
                    관련기관 사이트
                </div>
                <div className="text-left font-medium text-[#D6D6D6]">
                    <div className="pb-[15px] text-[13px] md:text-[16px]">
                        부산광역시 부산진구 엄광로176 (가야동 산24번지) 동의대학교 조기취업형
                        계약학과 생활과학관(16호관)
                    </div>
                    <div className="md:flex gap-[20px]">
                        <div className="md:pb-[39px] text-[13px] md:text-[16px]">
                            TEL. 051-890-3381
                        </div>
                        <div className="text-[13px] md:text-[16px] pb-[24px] md:pb-0">
                            FAX. 0505-182-6982
                        </div>
                    </div>
                    <div className="text-[13px] md:text-[16px] text-[#7F8080]">
                        copyright 2008 dong-eui university leisure-sports all gight reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
