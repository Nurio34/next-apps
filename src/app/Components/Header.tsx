import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="prose max-w-none flex justify-between items-center py-[2vh] px-[4vw] border-b-2 border-gray-300 shadow-lg">
            <Logo />
            <Navbar />
        </header>
    );
}

export default Header;
