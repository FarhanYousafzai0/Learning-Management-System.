import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ImageSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(Svgs/blob.svg)",
          backgorundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="image my-5 md:my-1  overflow-hidden relative flex justify-center items-center"
      >
        {/* react logo */}
        <img src="/images/react.svg" alt="" className="absolute z-3 left-0" />
        {/* bulb */}
        <img
          src="/images/bulb.png"
          width={"70px"}
          alt=""
          className="absolute z-3 left-[30%] top-[20%]"
        />
        <img
          src="/images/figma.svg"
          width={"50px"}
          alt=""
          className="absolute right-10 bottom-10 z-3"
        />
        <img
          src="/images/angular.png"
          width={"50px"}
          alt=""
          className="absolute right-0 top-4 z-3"
        />

        {/* users */}

        <div
          className="p-3 bg-green-500 rounded-xl rounded-4  shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2 -mt-7 z-10 hidden md:block"
          // style={{
          //   background:
          //     "url(/eduport_r/assets/01-B7c09dEI.png) center center / cover no-repeat",
          // }}
        >
          <p className="text-white">Our daily new students</p>
          <ul className="flex -space-x-2">
            <li className="w-8 h-8">
              <img
                className="w-full h-full rounded-full border-2 border-white"
                src="/eduport_r/assets/01-7N0KytgQ.jpg"
                alt="avatar"
              />
            </li>
            <li className="w-8 h-8">
              <img
                className="w-full h-full rounded-full border-2 border-white"
                src="/eduport_r/assets/02-Dm08lEkH.jpg"
                alt="avatar"
              />
            </li>
            <li className="w-8 h-8">
              <img
                className="w-full h-full rounded-full border-2 border-white"
                src="/eduport_r/assets/03-gME39Lw5.jpg"
                alt="avatar"
              />
            </li>
            <li className="w-8 h-8">
              <img
                className="w-full h-full rounded-full border-2 border-white"
                src="/eduport_r/assets/04-Axz2kzOk.jpg"
                alt="avatar"
              />
            </li>
            <li className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white text-sm font-semibold">
              1K+
            </li>
          </ul>
        </div>

        {/* congrats */}

        <div className="p-4 absolute bottom-[10px] z-3 rounded-xl border backdrop-blur-sm border-white">
          <div className="flex  items-center">
            <div className="flex h-[50px] w-[50px] rounded-full bg-yellow-500 items-center justify-center">
              <FaEnvelope color="white" className="" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-white">Conratulations</h3>
              <p className="text-sm text-white">Your admission completed</p>
            </div>
          </div>
        </div>

        <div className="user-image bg h-[500px]">
          <img
            src="https://themes.stackbros.in/eduport_r/assets/07-CK3ZrEuH.png"
            className=" block"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ImageSection;