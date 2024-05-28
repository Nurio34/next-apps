import { BallTriangle } from "react-loader-spinner";
import { WeatherResponse } from "../types";
import Today from "./Today";
import TodayDetails from "./TodayDetails";
import Forecast from "./Forecast";
import Skeleton from "./Skeleton";

type Props = {
    isPending: boolean;
    error: Error | null;
    data: WeatherResponse | undefined;
};

function Main(props: Props) {
    const { isPending, error, data } = props;

    if (isPending) return <Skeleton />;

    if (error) {
        return (
            <main className=" min-h-screen grid place-content-center">
                {error.message}
            </main>
        );
    }

    if (data) {
        return (
            <main className="grid grid-cols-1 gap-[2vh] py-[2vh] px-[4vw]">
                <TodayDetails data={data} />
                <Forecast data={data} />
            </main>
        );
    }
}

export default Main;
