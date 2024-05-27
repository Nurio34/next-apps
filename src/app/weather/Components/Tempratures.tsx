import { WeatherResponse } from "../types";
import TodayForecast from "./TodayForecast";
import TodayLatestInfo from "./TodayLatestInfo";

type Props = {
    data: WeatherResponse;
};

function Tempratures(props: Props) {
    const { data } = props;

    const todaysInfo = data.list[0];

    return (
        <article className="flex gap-[2vw]">
            <TodayLatestInfo todaysInfo={todaysInfo} />
            <TodayForecast data={data} />
        </article>
    );
}

export default Tempratures;
