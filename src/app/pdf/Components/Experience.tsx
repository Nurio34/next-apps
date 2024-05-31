"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import img from "../../../../public/image.jpg";

function Experience() {
    const [image, setImage] = useState<any>(img);

    const Input = useRef<HTMLInputElement>(null);

    const selectFile = () => {
        if (Input.current) {
            Input.current.click();
        }
    };

    const handleFile = (e) => {
        const file = e.target?.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <div className="relative grid grid-cols-[0.5fr,0.5fr] justify-between bg-gray-300">
            <div>
                <div className=" absolute -translate-y-[80px] translate-x-[80px] p-12 bg-white">
                    <div className="mb-12 p-2  bg-green-300 rounded-md w-[190px] h-[260px]">
                        <figure className="w-full h-full relative overflow-hidden ">
                            <Image
                                src={image}
                                width={180}
                                height={240}
                                objectFit="contain"
                                alt="image"
                                className="mx-auto"
                                onClick={selectFile}
                            />
                            <input
                                type="file"
                                name=""
                                id=""
                                className="hidden"
                                ref={Input}
                                onChange={handleFile}
                            />
                        </figure>
                    </div>
                    <div className="pb-12">
                        <h2 className=" font-semibold text-2xl uppercase">
                            iletişim
                        </h2>
                        <div className="flex gap-2 items-center text-sm py-[4px]">
                            <p>W</p>
                            <p contentEditable>+90 789 23 32</p>
                        </div>

                        <div className="flex gap-2 items-center text-sm py-[4px]">
                            <p>M</p>
                            <p contentEditable>johndoe@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center text-sm py-[4px]">
                            <p>L</p>
                            <p contentEditable>
                                Siy Mah. Bar sk. No:1 Bahç/Ist
                            </p>
                        </div>
                    </div>
                    <div className="pb-12">
                        <h2 className=" font-semibold text-2xl uppercase">
                            hakkımda
                        </h2>
                        <ul className="prose list-disc list-inside">
                            <li contentEditable>Proje Yönetimi</li>
                            <li contentEditable>Analitik Düşünme</li>
                            <li contentEditable>İkna Becerisi</li>
                        </ul>
                    </div>
                    <div className="pb-12">
                        <h2 className=" font-semibold text-2xl uppercase">
                            diller
                        </h2>
                        <ul className="prose list-disc list-inside">
                            <li contentEditable>İngilizce</li>
                            <li contentEditable>Almanca</li>
                            <li contentEditable>Rusça</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" ">
                <div className="py-8 grid gap-1 mr-8">
                    <h2 className=" uppercase bg-orange-950 text-white text-xl font-semibold py-2 px-4 mr-16 mb-4">
                        İş Deneyimi
                    </h2>
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={"Ünvanınızı buraya girin"}
                        className=" bg-transparent font-semibold"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={
                            "Şirket ismi - Şehir ismi - Çalıştığınız yıllar"
                        }
                        className=" bg-transparent"
                    />
                    <p
                        contentEditable
                        className="pl-4 italic p-2"
                        spellCheck={false}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean id imperdiet arcu, vitae efficitur nulla.
                        Suspendisse blandit sagittis aliquet. Sed mollis dapibus
                        congue.
                    </p>
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={"Ünvanınızı buraya girin"}
                        className=" bg-transparent font-semibold"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={
                            "Şirket ismi - Şehir ismi - Çalıştığınız yıllar"
                        }
                        className=" bg-transparent"
                    />
                    <p
                        contentEditable
                        className="pl-4 italic"
                        spellCheck={false}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean id imperdiet arcu, vitae efficitur nulla.
                        Suspendisse blandit sagittis aliquet. Sed mollis dapibus
                        congue.
                    </p>
                </div>
                <div className="py-8 grid gap-1 mr-8">
                    <h2 className=" uppercase bg-orange-950 text-white text-xl font-semibold py-2 px-4 mr-16 mb-4">
                        Eğitim
                    </h2>
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={"Lise adını buraya girin"}
                        className=" bg-transparent font-semibold"
                    />
                    <p
                        contentEditable
                        className="pl-4 italic pb-2"
                        spellCheck={false}
                    >
                        2012-2016
                    </p>
                    <input
                        type="text"
                        name=""
                        id=""
                        defaultValue={"Üniversite adını buraya girin"}
                        className=" bg-transparent font-semibold"
                    />
                    <p contentEditable>Bölüm Adı</p>
                    <p
                        contentEditable
                        className="pl-4 italic"
                        spellCheck={false}
                    >
                        2016-2020
                    </p>
                </div>
                <div className="py-8 grid gap-1 mr-8">
                    <h2 className=" uppercase bg-orange-950 text-white text-xl font-semibold py-2 px-4 mr-16 mb-4">
                        Sertifikalar
                    </h2>
                    <div className="flex gap-4">
                        <p contentEditable className=" italic pl-4">
                            2011-2012
                        </p>
                        <p contentEditable>Sertifika Adı</p>
                    </div>
                    <div className="flex gap-4">
                        <p contentEditable className=" italic pl-4">
                            2013-2014
                        </p>
                        <p contentEditable>Sertifika Adı</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
