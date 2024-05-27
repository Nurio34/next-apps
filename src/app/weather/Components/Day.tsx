type Props = {
    day: string;
    date: string;
};

function Day(props: Props) {
    const { day, date } = props;

    return (
        <h2 className="flex gap-[4px] items-center">
            <span className=" font-semibold text-lg">{day}</span>
            <span className=" text-sm">({date})</span>
        </h2>
    );
}

export default Day;
