import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Navbar from "./components/UI/Navbar";
import About from "./Sections/about";
import Prizes from "./Sections/prizes";

import Speakers from "./Sections/speakers";
import Accordion from "./Sections/faq";
import DevApi from "./Sections/about";
import Timeline from "./Sections/timeline";
import Sponsers from "./Sections/Sponsors/Sponsors";
import Milestones from "./Sections/milestone";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DevApi />

      <Milestones />
      <Timeline />

      <Sponsers />
      <Accordion />

      <Footer />
    </div>
  );
}

export default App;
