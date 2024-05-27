import { kelvinToCelsius } from "@/app/utils/functions";
import { ListItem, WeatherResponse } from "../types";

type Props = {
    todaysInfo: ListItem;
};

function TodayLatestInfo(props: Props) {
    const { todaysInfo } = props;

    const { temp, feels_like, temp_min, temp_max } = todaysInfo.main;

    return (
        <div className=" border-2 border-secondary py-[1vh] px-[2vw] rounded-md grid place-content-center gap-[0.5vh] ">
            <p className=" font-bold text-4xl text-center tracking-widest">
                {Math.floor(kelvinToCelsius(temp))}&deg;
            </p>
            <p className=" text-xs w-max">
                Feels like {Math.floor(kelvinToCelsius(feels_like))}&deg;
            </p>
            <div className="flex justify-between text-xs">
                <p>
                    {Math.floor(kelvinToCelsius(temp_min))}&deg;
                    <span className=" text-secondary">&darr;</span>
                </p>
                <p>
                    {Math.ceil(kelvinToCelsius(temp_max))}&deg;{" "}
                    <span className=" text-secondary">&uarr;</span>
                </p>
            </div>
        </div>
    );
}

export default TodayLatestInfo;
