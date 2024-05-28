import GetLocation from "./GetLocation";
import Location from "./Location";

type Props = {
    city: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar(props: Props) {
    const { city, setUrl } = props;

    return (
        <nav className="prose flex items-center gap-[2vw] ml-auto mr-[2vw]">
            <GetLocation setUrl={setUrl} />
            <Location city={city} />
        </nav>
    );
}

export default Navbar;
