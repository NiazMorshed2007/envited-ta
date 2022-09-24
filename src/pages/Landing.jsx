import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/land-asset.svg";

const Landing = () => {
  return (
    <div className="flex w-screen md:flex-row flex-col-reverse landing p-20 px-[10%] h-screen overflow-y-auto md:overflow-hidden items-center justify-between">
      <div className="flex flex-col items-center">
        <img className="md:h-[580px] h-[450px] rounded-xl" src={image} alt="" />
        <Link to={"/create"}>
          <button className="mt-12 md:ml-auto md:hidden flex">
            🎉 Create my event
          </button>
        </Link>
      </div>
      <div className="content lg:w-4/12 md:w-5/12 text-center md:text-right">
        <h1 className="sm:text-5xl text-4xl font-extrabold leading-tight">
          Imagine if <br /> <span className="gradient-text">Snapchat</span>{" "}
          <br /> had events.
        </h1>
        <p className="mt-7 md:mb-0 mb-10 text-secondary font-base">
          Easily host and share events with your friends across any social
          media.
        </p>

        <Link to={"/create"}>
          <button className="mt-12 md:flex hidden md:ml-auto">
            🎉 Create my event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
