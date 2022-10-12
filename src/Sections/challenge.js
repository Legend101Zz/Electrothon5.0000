import React from "react";

import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaSnapchatGhost,
} from "react-icons/fa";

const Milestones = () => {
  const facts = [
    {
      id: 1,
      title: "1.9 K",
      subtitle: "Participants",
      img: "../assets/about.png",
    },
    {
      id: 2,
      title: "150 K+",
      subtitle: "Lines of Code",
      img: "../assets/about.png",
    },
    {
      id: 3,
      title: "40+",
      subtitle: "Whose in from oer and a the is ghastly.",
      img: "../assets/about.png",
    },
    {
      id: 4,
      title: "22+",
      subtitle: "Prize Categories",
      img: "../assets/about.png",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchatGhost size={25} />,
      title: "snapchat",
    },
  ];

  return (
    <div className="w-full px-10 lg:px-20 bg-black text-white text-center">
      <h1>Milestones</h1>
      <br />
      <br />
      <br />
      <div className="grid lg:grid-cols-4 text-left gap-8 mb-16 ">
        {facts.map(({ id, title, subtitle, img }) => (
          <div
            key={id}
            className="odd:bg-[#92B8E8] even:bg-[#F09248] text-black p-4 rounded-lg "
          >
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p>{subtitle}</p>
            <div>
              {" "}
              <img alt="code" src={img} />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
        {companies.map(({ id, icon, title }) => (
          <div className="flex items-center capitalize p-4 rounded-lg" key={id}>
            {icon}
            <p className="ml-2">{title}</p>
          </div>
        ))}
      </div> */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Milestones;
