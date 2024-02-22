export default function Footer() {
    return (
        <div className="bg-gray-800 text-[#EDEDED]">
            <div className="mx-200 pb-[32px]">
                <div className="flex justify-between pt-[48px] pb-[25px]">
                    <div className="deuFooterLogo w-[293px] h-[63px]"></div>
                    <div className="flex gap-[48px] items-end mb-[15px] font-medium">
                        <a><div>동의대학교</div></a>
                        <a><div>학생서비스센터</div></a>
                        <a><div>중앙도서관</div></a>
                        <a><div>종합정보시스템</div></a>
                        <a><div>취업정보</div></a>
                        <a><div>입학정보</div></a>
                        <a><div>상담</div></a>
                    </div>
                </div>
                <div className="mb-[32px] h-[1px] bg-[#363945]"></div>
                <div className="text-left font-medium text-[#D6D6D6]">
                    <div className="pb-[15px]">부산광역시 부산진구 엄광로176 (가야동 산24번지) 동의대학교 조기취업형 계약학과 생활과학관(16호관)</div>
                    <div className="flex gap-[20px]">
                        <div className="pb-[39px]">TEL. 051-890-3381</div>
                        <div>FAX. 0505-182-6982</div>
                    </div>
                    <div className="text-[#7F8080]">copyright 2008 dong-eui university leisure-sports all gight reserved.</div>
                </div>
            </div>
        </div>
    )
}