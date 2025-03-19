import React, { useEffect } from "react";
import WOW from "wow.js";

import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

import "./styles/bootstrap.4.5.2.min.css";
import "./styles/animate.css";
import "./styles/default.css";
import "./styles/LineIcons.2.0.css";
import "./styles/magnific-popup.css";
import "./styles/style.css";


function App() {
  useEffect(() => {
    new WOW().init(); // Initialize animations on mount
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <SocialMedia />
      <Pricing />
      {/* <About /> */}
      {/* <Blog /> */}
      <AppDownload />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;