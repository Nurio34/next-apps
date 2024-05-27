import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="prose prose-li:list-none prose-a:no-underline py-[1vh] px-[2vw]">
            <h2>Projects</h2>
            <ul>
                <li>
                    <Link href={"/weather"}>WeatherApp</Link>
                </li>
                <li>
                    <Link href={"/next"}>NextApp</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
