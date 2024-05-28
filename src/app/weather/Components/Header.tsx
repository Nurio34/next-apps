"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { cityList } from "@/app/utils/functions";

type Props = {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    setUrl: Dispatch<SetStateAction<string>>;
};

function Header(props: Props) {
    const { setCity, city, setUrl } = props;

    const [value, setValue] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setValue(value);

        if (value.length >= 3) {
            //! suggestions listesi oluştur
            const suggestions = cityList.filter((city) =>
                city.toLocaleLowerCase().includes(value),
            );

            setShowSuggestions(true);

            if (suggestions.length === 0) {
                setSuggestions(["No location found"]);
                return;
            }

            setSuggestions(suggestions);
        } else {
            setShowSuggestions(false);
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(value.toLocaleLowerCase());
        setShowSuggestions(false);
    };

    return (
        <header className="flex flex-wrap justify-start items-center gap-y-[1vh] py-[1vh] px-[2vw]  shadow-md shadow-secondary">
            <Logo />
            <Navbar city={city} setUrl={setUrl} />
            <SearchBar
                value={value}
                onChange={onChange}
                onSubmit={onSubmit}
                suggestions={suggestions}
                showSuggestions={showSuggestions}
                setCity={setCity}
                setValue={setValue}
                setShowSuggestions={setShowSuggestions}
            />
        </header>
    );
}

export default Header;
