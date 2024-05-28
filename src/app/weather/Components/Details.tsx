import { timeStamp_To_FormattedTime } from "@/app/utils/functions";
import { FaCrosshairs, FaWind } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";

type Props = {
    visibility: number;
    humidity: number;
    windSpeed: number;
    airPressure: number;
    sunrise: number;
    sunset: number;
};

function Details(props: Props) {
    const { visibility, humidity, windSpeed, airPressure, sunrise, sunset } =
        props;

    const detailsArray = [
        {
            title: "visibility",
            label: "visibility",
            value: (
                <p className=" min-w-max">
                    {visibility / 1000}
                    <span
                        className=" capitalize text-xs"
                        style={{ fontVariant: "small-caps" }}
                    >
                        {" "}
                        km.
                    </span>
                </p>
            ),
            icon: <MdOutlineVisibility />,
        },
        {
            title: "humidity",
            label: "humidity",
            value: (
                <p className=" min-w-max">
                    {humidity}
                    <span className="text-xs"> %</span>
                </p>
            ),
            icon: <WiHumidity />,
        },
        {
            title: "windSpeed",
            label: "Wind Speed",
            value: (
                <p className=" min-w-max">
                    {windSpeed}
                    <span
                        className=" capitalize text-xs"
                        style={{ fontVariant: "small-caps" }}
                    >
                        {" "}
                        km/h
                    </span>
                </p>
            ),
            icon: <FaWind />,
        },
        {
            title: "airPressure",
            label: "Air Preasure",
            value: (
                <p className=" min-w-max">
                    {windSpeed}
                    <span
                        className=" capitalize text-xs"
                        style={{ fontVariant: "small-caps" }}
                    >
                        {" "}
                        <span className=" lowercase">h</span>Pa
                    </span>
                </p>
            ),
            icon: <FaCrosshairs />,
        },
        {
            title: "sunrise",
            label: "sunrise",
            value: timeStamp_To_FormattedTime(sunrise),
            icon: <WiSunrise />,
        },
        {
            title: "sunset",
            label: "sunset",
            value: timeStamp_To_FormattedTime(sunset),
            icon: <WiSunset />,
        },
    ];

    return (
        <ul className="flex justify-between gap-[4vw] border-2 border-secondary rounded-md py-[2vh] px-[4vw] overflow-x-auto grow">
            {detailsArray.map((object, ind) => {
                return (
                    <li
                        key={ind}
                        className="grid gap-[0.5vh] justify-items-center sm:text-lg bg-primary text-primary-content py-[1vh] px-[2vw] rounded-md "
                    >
                        <p
                            className=" min-w-max capitalize font-semibold text-sm sm:text-base"
                            style={{ fontVariant: "small-caps" }}
                        >
                            {object.label}
                        </p>
                        {object.icon}

                        {object.value}
                    </li>
                );
            })}
        </ul>
    );
}

export default Details;
