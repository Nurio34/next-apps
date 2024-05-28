"use client";

import Header from "./Components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { WeatherResponse, WeatherResponseSchema } from "./types";
import Main from "./Components/Main";
import { useEffect, useState } from "react";

function Weather() {
    const [city, setCity] = useState<string>("istanbul");

    const cityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OpenWeather_Key}&cnt=100`;

    const [url, setUrl] = useState<string>(cityUrl);

    const fetchData = async (): Promise<WeatherResponse> => {
        const res = await axios(url);
        console.log(res.data);

        return WeatherResponseSchema.parse(res.data);
    };

    const { isPending, error, data, refetch } = useQuery<WeatherResponse>({
        queryKey: ["repoData"],
        queryFn: fetchData,
    });

    useEffect(() => {
        setUrl(cityUrl);
    }, [city]);

    useEffect(() => {
        refetch();
    }, [url]);

    return (
        <div className=" min-h-screen ">
            <Header city={city} setCity={setCity} setUrl={setUrl} />
            <Main isPending={isPending} error={error} data={data} />
        </div>
    );
}

export default Weather;
