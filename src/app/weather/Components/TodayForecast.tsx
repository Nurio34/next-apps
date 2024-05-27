import { dateToHour, kelvinToCelsius } from "@/app/utils/functions";
import { WeatherResponse } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
    data: WeatherResponse;
};

function TodaysForecast(props: Props) {
    const { data } = props;
    const { list } = data;

    const today = list[0].dt_txt.split(" ")[0].split("-")[2];
    const todaysPartofList = list.filter((item) => item.dt_txt.includes(today));

    return (
        <div
            className="grow flex justify-between  gap-[4vw] overflow-x-auto border-2 border-secondary rounded-md py-[1vh] px-[2vw]
            
        "
        >
            {todaysPartofList.map((item) => {
                return (
                    <div
                        key={item.dt}
                        className=" grid justify-items-center bg-base-300 text-base-content rounded-md py-[1vh] px-[2vw]"
                    >
                        <p className=" text-xs sm:text-base w-max">
                            {dateToHour(new Date(item.dt_txt))}
                        </p>
                        <WeatherIcon weather={item.weather[0]} />
                        <p>
                            {Math.round(kelvinToCelsius(item.main.temp))}&deg;
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default TodaysForecast;
