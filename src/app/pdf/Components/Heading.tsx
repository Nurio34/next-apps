import React from "react";

function Heading() {
    return (
        <div className=" bg-green-300 grid grid-cols-[0.9fr,0.3fr]">
            <div></div>
            <div className="py-8 grid gap-4 justify-start">
                <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={"Nuri Salih Ersoy"}
                    className="bg-transparent text-2xl font-semibold"
                />
                <input
                    type="text"
                    name="profession"
                    id="profession"
                    defaultValue={"Resepsiyonist"}
                    className=" bg-transparent text-xl font-semibold"
                />
            </div>
        </div>
    );
}

export default Heading;
