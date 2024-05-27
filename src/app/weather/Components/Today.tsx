import { dateReguletor, dateToDayConverter } from "@/app/utils/functions";
import { WeatherResponse } from "../types";
import Day from "./Day";
import Tempratures from "./Tempratures";

type Props = {
    data: WeatherResponse;
};

function Today(props: Props) {
    const { data } = props;

    const today = data.list[0];
    const todaysDate = new Date(today.dt_txt);
    const day = dateToDayConverter(todaysDate);
    const date = dateReguletor(todaysDate);

    return (
        <section className="grid grid-cols-1 gap-[2vh]">
            <Day day={day} date={date} />
            <Tempratures data={data} />
        </section>
    );
}

export default Today;
