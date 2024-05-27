"use client";

import Header from "./Components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { WeatherResponse, WeatherResponseSchema } from "./types";
import Main from "./Components/Main";

const gitUrl = "https://api.github.com/repos/TanStack/query";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=istanbul&appid=${process.env.NEXT_PUBLIC_OpenWeather_Key}&cnt=100`;

function Weather() {
    const fetchData = async (): Promise<WeatherResponse> => {
        const res = await axios(url);
        console.log(res.data);

        return WeatherResponseSchema.parse(res.data);
    };

    const { isPending, error, data } = useQuery<WeatherResponse>({
        queryKey: ["repoData"],
        queryFn: fetchData,
    });

    return (
        <div className=" min-h-screen">
            <Header />
            <Main isPending={isPending} error={error} data={data} />
        </div>
    );
}

export default Weather;
