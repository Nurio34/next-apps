import GetLocation from "./GetLocation";
import Location from "./Location";

function Navbar() {
    return (
        <nav className="prose flex items-center gap-[2vw] ml-auto mr-[2vw]">
            <GetLocation />
            <Location />
        </nav>
    );
}

export default Navbar;
