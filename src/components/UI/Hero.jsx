import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../../App.css";
import TrackVisibility from "react-on-screen";
import bannerImg from "../../assets/2206_w026_n002_2109b_p1_2109.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../../assets/spec_logo.webp";

export default function Hero() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["SEARCH,PLAN,ENGAGE,CREATE"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <div className="w-full h-[90vh] top-[90px]">
        <img
          className="object-cover h-full w-full absolute -z-10"
          src={bannerImg}
          autoPlay
          loop
          muted
        />
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
                  <Link
                    to="Contact Us"
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
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
                  <Link
                    to="Contact Us"
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
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
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <span className="tagline text-white">
                        <h1 className="text-[50px]">Electrothon</h1>
                        <h1 className="py-2">
                          <span className="blue">5.0</span>
                        </h1>
                        <p className="text-xl py-4">
                          MoonShot your creativity and engage yourself in a
                          worldwide hackathon.
                        </p>
                      </span>
                      <h3 className="text-black">
                        <span
                          className="txt-rotate"
                          dataPeriod="1000"
                          data-rotate='[ "SEARCH,PLAN,ENGAGE,CREATE" ]'
                        >
                          <span className="wrap">
                            <button className="m-8  bg-gradient-to-r from-[#9ff4d1] via-[#75c2f2]-500 to-[#00d8ff] ... py-3 px-9   rounded-3xl text-black ">
                              {text}
                            </button>
                          </span>
                        </span>
                      </h3>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                {/* <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img className="" src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
