import { dateToHour, kelvinToCelsius } from "@/app/utils/functions";
import { WeatherResponse } from "../types";
import WeatherIcon from "./WeatherIcon";

type Props = {
    data: WeatherResponse;
};

function TodaysForecast(props: Props) {
    const { data } = props;
    const { list } = data;

    const forecastList = list.filter((_, ind) => ind <= 7);

    return (
        <div className="grow flex justify-between  gap-[4vw] overflow-x-auto border-2 border-secondary rounded-md py-[1vh] px-[2vw]">
            {forecastList.map((item) => {
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
