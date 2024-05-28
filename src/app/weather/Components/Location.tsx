import { FaLocationDot } from "react-icons/fa6";

type Props = {
    city: string;
};

function Location(props: Props) {
    const { city } = props;

    return (
        <div className="flex items-center gap-[1vw]">
            <FaLocationDot />
            <span className=" capitalize">{city}</span>
        </div>
    );
}

export default Location;
