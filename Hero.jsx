import React from "react";

export const Hero = () => {
    return (
        <div className="shrink-1 relative flex justify-center pt-20">
            <img className="rounded-3xl p-4" src="Hero_Image.png"/>
            <div className="absolute bg-stone-50 rounded-xl mt-[96px] ms-[400px] p-2">
                Good Morning mom 🤗🥰
            </div>
            <div className="absolute rounded-full bg-stone-50 mt-[122.5px] ms-[240px] p-2">
                ❤
            </div>
            <img className="absolute mt-[140px] ms-[40rem]" src="Img-1_Cup.png"/>
            <img className="absolute mt-[270px] ms-[618px]" src="Img-2_VM.png"/>
            <img className="absolute mt-[205px] ms-[618px] scale-50" src="Img-4_Pic.png"/>
            <div className="absolute rounded-full bg-stone-50 mt-[580px] ms-[240px] p-2">
                🥺
            </div>
            <img className="absolute mt-[40rem] ms-[40rem]" src="Img-5_Msg.png" alt="" />
            <div className="absolute text-7xl text-white mt-[200px] ms-[-44rem] ">
                <p>Message</p>
                <p>privately</p>
            </div>
            <div className="absolute text-lg text-white mt-[363px] ms-[-42rem]">
                <p>Simple, reliable, private messaging and</p>
                <p>calling for free*, available all over the</p>
                <p>world.</p>
            </div>
            <div className="absolute text-black mt-[46.5rem] ms-[64rem] font-extralight text-sm">
                * Data charges may apply. Contact your provider for details.
            </div>
        </div>
    )
}