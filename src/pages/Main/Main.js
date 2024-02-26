import { Link } from "react-router-dom"
import './Main.css';
import MainBanner from "./MainBanner";
import Introduce from "./Introduce"
import News from "./News";
import Notice from "./Notice";

export default function Main() {
    return (
        // overflow-x-hidden 여기 해서 사업단 소식 숨겼다!!!!!!
        <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full overflow-x-hidden">
        {/* // <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full "> */}
            {/* 메인 배너 배경 */}
            <MainBanner/>
            <Introduce/>
            <News/>
            <Notice/>
        </div>
    )
}
