import Image from "next/image";
import { Weather } from "../types";

type Props = {
    weather: Weather;
};

function WeatherIcon(props: Props) {
    const { weather } = props;

    const { icon, description } = weather;

    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return <Image src={url} alt={description} width={48} height={48} />;
}

export default WeatherIcon;
