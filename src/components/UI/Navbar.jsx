import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../../assets/spec_logo.webp";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="mr-0 flex">
          <img className="object-contain h-15 w-40" src={logo} alt="spec" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-[#fff] items-center">
            <li>
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="timeline" smooth={true} offset={-50} duration={500}>
                TIMELINE
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} offset={-100} duration={500}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="Contact Us" smooth={true} offset={-50} duration={500}>
                CONTACT US
              </Link>
            </li>
            <button className="  ml-4 bg-gradient-to-r from-[#9ff4d1] via-[#75c2f2] to-[#00d8ff] ... py-3 px-10  rounded-3xl text-black  ">
              Register Now
            </button>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile view */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-xl">
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="text-xl">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="text-xl">
              <Link to="prizes" smooth={true} offset={-50} duration={500}>
                PRIZES
              </Link>
            </li>
            <li className="text-xl">
              <Link to="FAQ" smooth={true} offset={-100} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="text-xl">
              <Link to="Contact Us" smooth={true} offset={-50} duration={500}>
                CONTACT US
              </Link>
            </li>
            <button
              className=" 
            m-8  bg-gradient-to-r from-[#9ff4d1] via-[#75c2f2]-500 to-[#00d8ff] ... py-3 px-9   rounded-3xl text-white  "
            >
              Register Now
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
