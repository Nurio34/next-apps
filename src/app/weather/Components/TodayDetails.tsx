import { WeatherResponse } from "../types";
import Details from "./Details";
import WeatherIcon from "./WeatherIcon";

type Props = {
    data: WeatherResponse;
};

function TodayDetails(props: Props) {
    const { data } = props;

    const today = data.list[0];
    const weather = today.weather[0];

    return (
        <section className="flex gap-[2vw]">
            <article
                className="grid justify-items-center items-center py-[2vh] px-[2vw] border-2 border-secondary rounded-md text-center capitalize min-w-[95.39px]"
                style={{ fontVariant: "small-caps" }}
            >
                <div>{weather.description}</div>
                <WeatherIcon weather={weather} />
            </article>
            <Details
                visibility={today.visibility}
                humidity={today.main.humidity}
                windSpeed={today.wind.speed}
                airPressure={today.main.pressure}
                sunrise={data.city.sunrise}
                sunset={data.city.sunset}
            />
        </section>
    );
}

export default TodayDetails;
