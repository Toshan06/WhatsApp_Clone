import React from "react";

export const Feature = () => {
    return (
        <div className="">
            <img className="p-[10rem]" src="Chats.png"/>
            <div className="text-5xl text-center">
                <p>With private messaging and calling, you can<br />
                    be yourself, speak freely and feel close to<br/>
                    the most important people in your life no matter<br/>
                    where they are.</p>
            </div>
            <img className="p-[10rem]" src="LanguagesChat.png"/>
            <img className="ms-[54rem] mb-[5rem]" src="VideoCall.png"/>
            <div className="my-[-37.5rem] mx-[16rem] mb-[5rem] font-base text-6xl">
                <p>Never miss a</p>
                <p>moment with</p>
                <p>voice and video</p>
                <p>calls</p>
            </div>
            <div className="my-[-4rem] mx-[16rem] text-lg">
                <p>From a group call to classmates to a quick call with mom,</p>
                <p>feel like you’re in the same room with voice and video</p>
                <p>calls.</p>
            </div>
            <div className="flex my-[6rem] mx-[16rem] pb-[8rem] text-black hover:text-green-500">
                <a href="https://www.whatsapp.com/stayconnected" className="underline decoration-green-500 decoration-[0.15rem]">Learn more</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    )
} 