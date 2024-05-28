import React from "react";

function Skeleton() {
    return (
        <main className="grid grid-cols-1 gap-[2vh] py-[2vh] px-[4vw] animate-pulse">
            <section className="grid grid-cols-1 gap-[2vh]">
                <h2 className="flex gap-[4px] items-center">
                    <span className=" font-semibold text-lg"></span>
                    <span className=" text-sm"></span>
                </h2>
                <article className="flex gap-[2vw]">
                    <div className=" border-2 border-secondary py-[1vh] px-[2vw] rounded-md grid place-content-center gap-[0.5vh] w-[93px] h-[118px] sm:w-[144px] sm:h-[155px] ">
                        <p className=" font-bold text-4xl text-center tracking-widest"></p>
                        <p className=" text-xs w-max"></p>
                        <div className="flex justify-between text-xs">
                            <p>
                                <span className=" text-secondary"></span>
                            </p>
                            <p>
                                <span className=" text-secondary"></span>
                            </p>
                        </div>
                    </div>
                    <div className="grow flex justify-between  gap-[4vw] overflow-hidden border-2 border-secondary rounded-md py-[1vh] px-[2vw]">
                        {Array(8)
                            .fill("_")
                            .map((item) => {
                                return (
                                    <div
                                        key={item.dt}
                                        className=" grid justify-items-center bg-base-300 text-base-content rounded-md py-[1vh] px-[2vw]"
                                    >
                                        <p className=" text-xs sm:text-base w-max"></p>
                                        <span className=" w-12 h-12" />
                                        <p></p>
                                    </div>
                                );
                            })}
                    </div>
                </article>
            </section>
            <section className="flex gap-[2vw]">
                <article
                    className="grid justify-items-center items-center py-[2vh] px-[2vw] border-2 border-secondary rounded-md text-center capitalize w-[93px] h-[118px] sm:w-[144px] sm:h-[155px]"
                    style={{ fontVariant: "small-caps" }}
                >
                    <div></div>
                    <span className=" w-12 h-12" />
                </article>
                <ul className="flex justify-between gap-[4vw] border-2 border-secondary rounded-md py-[2vh] px-[4vw] overflow-x-auto grow">
                    {Array(6)
                        .fill("_")
                        .map((object, ind) => {
                            return (
                                <li
                                    key={ind}
                                    className="grid gap-[0.5vh] justify-items-center sm:text-lg bg-primary py-[1vh] px-[2vw] rounded-md w-[68px] h-[96px] sm:w-[126px] sm:h-[98px]"
                                >
                                    <p
                                        className=" min-w-max capitalize font-semibold text-sm sm:text-base"
                                        style={{ fontVariant: "small-caps" }}
                                    ></p>
                                </li>
                            );
                        })}
                </ul>
            </section>
            <section className=" grid gap-[2vh] grid-cols-1">
                <h2 className=" text-xl font-semibold">Forecast ( 5 Days )</h2>
                <ul className="grid gap-[2vh] grid-cols-1">
                    {Array(5)
                        .fill("_")
                        .map((day, ind) => {
                            return (
                                <li
                                    key={ind}
                                    className="grid gap-[1vw] grid-cols-[90px,0.1fr,1fr] sm:grid-cols-[140px,0.1fr,1fr]"
                                >
                                    <article
                                        className="grid justify-items-center items-center py-[2vh] px-[2vw] border-2 border-secondary rounded-md text-center capitalize "
                                        style={{ fontVariant: "small-caps" }}
                                    >
                                        <div></div>
                                        <span className=" w-12 h-12" />
                                        <p></p>
                                    </article>
                                    <div className=" border-2 border-secondary py-[1vh] px-[2vw] rounded-md grid place-content-center gap-[0.5vh] ">
                                        <p className=" font-bold text-4xl text-center tracking-widest"></p>
                                        <p className=" text-xs w-max"></p>
                                        <div className="flex justify-between text-xs">
                                            <p>
                                                <span className=" text-secondary"></span>
                                            </p>
                                            <p>
                                                <span className=" text-secondary"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="flex justify-between gap-[4vw] border-2 border-secondary rounded-md py-[2vh] px-[4vw] overflow-x-auto grow">
                                        {Array(8)
                                            .fill("_")
                                            .map((object, ind) => {
                                                return (
                                                    <li
                                                        key={ind}
                                                        className="grid gap-[0.5vh] justify-items-center sm:text-lg bg-primary py-[1vh] px-[2vw] rounded-md "
                                                    >
                                                        <p
                                                            className=" min-w-max capitalize font-semibold text-sm sm:text-base"
                                                            style={{
                                                                fontVariant:
                                                                    "small-caps",
                                                            }}
                                                        ></p>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </li>
                            );
                        })}
                </ul>
            </section>
        </main>
    );
}

export default Skeleton;
