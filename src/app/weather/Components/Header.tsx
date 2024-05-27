import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <header className="flex flex-wrap justify-start items-center gap-y-[1vh] py-[1vh] px-[2vw]  shadow-md shadow-secondary">
            <Logo />
            <Navbar />
            <SearchBar />
        </header>
    );
}

export default Header;
