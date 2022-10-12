import React from "react";

import code from "../assets/code.png";
import slash from "../assets/design.png";
import thumbs from "../assets/consulting.png";
import asset from "../assets/about.png";

export default function Milestones() {
  return (
    <section>
      <h1 className=" w-full px-10 lg:px-20 bg-black text-white text-center">
        {" "}
        Milestones
      </h1>
      <div className=" bg-black lg:flex gap-10">
        <div className=" bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 odd:bg-[#92B8E8] even:bg-[#F09248] text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <img alt="" src={slash} width={100} height={100} />
          <h3 className="text-[30px] font-medium pt-8 pb-2  ">150 K+</h3>
          <p className="py-3 text-[20px]">Lines of Code</p>
          <h4 className="py-4 text-teal-600">Enagage | Learn</h4>
          <p className="text-gray-800 py-1">Web development</p>
          <p className="text-gray-800 py-1">Ai/ML</p>
          <p className="text-gray-800 py-1">IoT</p>
          <p className="text-gray-800 py-1">Ar/Vr</p>
        </div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 even:bg-[#F09248]  text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <img alt="" src={code} width={100} height={100} />
          <h3 className="text-[30px] font-medium pt-8 pb-2  ">1.9 K</h3>
          <p className="py-3 text-[20px]">Participants</p>
          <h4 className="py-4 text-teal-600">Enagage | Learn</h4>
          <p className="text-gray-800 py-1">Web development</p>
          <p className="text-gray-800 py-1">Ai/ML</p>
          <p className="text-gray-800 py-1">IoT</p>
          <p className="text-gray-800 py-1">Ar/Vr</p>
        </div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 odd:bg-[#EDD570] text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img alt="" src={slash} width={100} height={100} />
          <h3 className="text-[30px] font-medium pt-8 pb-2  ">40+</h3>
          <p className="py-3 text-[20px]">Sponsers</p>
          <h4 className="py-4 text-teal-600">Enagage | Learn</h4>
          <p className="text-gray-800 py-1">Web development</p>
          <p className="text-gray-800 py-1">Ai/ML</p>
          <p className="text-gray-800 py-1">IoT</p>
          <p className="text-gray-800 py-1">Ar/Vr</p>
        </div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 even:bg-[#85BC4B] text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img alt="" src={thumbs} width={100} height={100} />
          <h3 className="text-[30px] font-medium pt-8 pb-2  ">22+</h3>
          <p className="py-3 text-[20px]">Prize Categories</p>
          <h4 className="py-4 text-teal-600">Enagage | Learn</h4>
          <p className="text-gray-800 py-1">Web development</p>
          <p className="text-gray-800 py-1">Ai/ML</p>
          <p className="text-gray-800 py-1">IoT</p>
          <p className="text-gray-800 py-1">Ar/Vr</p>
        </div>
      </div>
    </section>
  );
}
