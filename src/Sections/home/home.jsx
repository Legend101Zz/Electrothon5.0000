import "./home.css";
import img from "../../assets/header-img.svg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

// const toggle = document.getElementById(".main-img");

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;
