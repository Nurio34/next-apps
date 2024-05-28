import {
    dateReguletor,
    dateToDayConverter,
    dateToHour,
} from "@/app/utils/functions";
import { WeatherResponse } from "../types";
import Details from "./Details";
import TodayLatestInfo from "./TodayLatestInfo";
import WeatherIcon from "./WeatherIcon";

type Props = {
    data: WeatherResponse;
};

function Forecast(props: Props) {
    const { data } = props;

    const list = data.list;
    const today = data.list[0].dt_txt.split(" ")[0].split("-")[2];
    const nextDays = list.filter(
        (item) =>
            !item.dt_txt.includes(today) && item.dt_txt.includes("12:00:00"),
    );

    return (
        <section className=" grid gap-[2vh] grid-cols-1">
            <h2 className=" text-xl font-semibold">Forecast ( 5 Days )</h2>
            <ul className="grid gap-[2vh] grid-cols-1">
                {nextDays.map((day, ind) => {
                    return (
                        <li
                            key={ind}
                            className="grid gap-[1vw] grid-cols-[90px,0.1fr,1fr] sm:grid-cols-[140px,0.1fr,1fr]"
                        >
                            <article
                                className="grid justify-items-center items-center py-[2vh] px-[2vw] border-2 border-secondary rounded-md text-center capitalize "
                                style={{ fontVariant: "small-caps" }}
                            >
                                <div>{day.weather[0].description}</div>
                                <WeatherIcon weather={day.weather[0]} />
                                <p>
                                    {dateReguletor(new Date(day.dt_txt))
                                        .split(".")
                                        .filter((_, ind) => ind < 2)
                                        .join(".")}
                                </p>
                            </article>
                            <TodayLatestInfo todaysInfo={day} />
                            <Details
                                visibility={day.visibility}
                                humidity={day.main.humidity}
                                windSpeed={day.wind.speed}
                                airPressure={day.main.pressure}
                                sunrise={data.city.sunrise}
                                sunset={data.city.sunset}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Forecast;
