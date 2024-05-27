import { IoMdSunny } from "react-icons/io";

function Logo() {
    return (
        <div className="prose flex gap-[1vw] items-center ">
            <span
                className=" font-bold text-xl capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                Weather
            </span>
            <IoMdSunny className=" text-primary text-xl" />
        </div>
    );
}

export default Logo;
