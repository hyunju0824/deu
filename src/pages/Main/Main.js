import Introduce from "./Introduce";
import "./Main.css";
import MainBanner from "./MainBanner";
import News from "./News";
import Notice from "./Notice";

export default function Main() {
    return (
        <div className="mx-auto min-w-[375px] 3xl:w-1920 3xl:h-1000 w-full h-full overflow-x-hidden">
            {/* // <div className="mx-auto 3xl:w-1920 3xl:h-1000 w-full h-full "> */}
            {/* 메인 배너 배경 */}
            <MainBanner />
            <Introduce />
            <News />
            <Notice />
        </div>
    );
}
