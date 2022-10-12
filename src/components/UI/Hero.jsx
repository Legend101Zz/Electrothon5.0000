import React, { useEffect } from "react";
import heropic from "../../assets/hero.webp";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div name="home" className="w-full h-[90vh] top-[90px]">
      <img
        className="object-cover  object-center h-full w-full absolute -z-10"
        src={heropic}
        alt="hero"
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-6xl md:text-[75px]">Electrothon</h1>
        <br />
        <h1 className="py-2">
          <span className="blue">5.0</span>
        </h1>
        <p className="text-xl py-4 text-center">
          " MoonShot your creativity and engage
          <br /> yourself in a worldwide hackathon"
        </p>
        <div>
          <button className="m-2 text-[#063068]">
            SEARCH | PLAN | ENGAGE | CREATE{" "}
          </button>
        </div>
        {/* Code for devfolio button */}
        {/* <div           
          className="apply-button h-[44px] w-[312px]"
          data-hackathon-slug="YOUR-HACKATHON-SLUG"
          data-button-theme="light"
        ></div> */}
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold"></p>
      </div>
    </div>
  );
}
