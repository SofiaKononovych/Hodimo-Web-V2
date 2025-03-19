import React, { useState, useEffect } from "react";
import gradient from '../images/hero-section-gradient.png';
import iphone1 from "../images/Iphone1.png";
import axios from 'axios'

const Header = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit', { email });
      setSuccess('Data saved successfully!');
      setEmail('');
    } catch (err) {
      setError('There was an issue submitting the form.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".header_navbar");
      if (window.scrollY < 20) {
        navbar.classList.remove("sticky");
        document.querySelector(".header_navbar img").src = "/assets/images/logo.svg";
      } else {
        navbar.classList.add("sticky");
        document.querySelector(".header_navbar img").src = "/assets/images/logo-2.svg";
      }
    };

    const navLinks = document.querySelectorAll(".navbar-nav a");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".navbar-collapse").classList.remove("show");
        navbarToggler.classList.remove("active");
      });
    });

    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("active");
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) => link.removeEventListener("click", () => {}));
      navbarToggler.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <header 
    className="header_area" 
    style={{ 
    backgroundImage: `url(${gradient})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", 
    position: "relative",  }}>
      {/* TOP HEADER (PHONE ICON & TEXT)
      <div className="header_top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header_top_info">
                <ul>
                  <li>
                    <i className="lni lni-phone"></i> Call us: +123 456 7890
                  </li>
                  <li>
                    <i className="lni lni-envelope"></i> Email: support@example.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* NAVBAR */}
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home">
                  <img src="/assets/images/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active"><a className="page-scroll" href="#home">home</a></li>
                    <li className="nav-item"><a className="page-scroll" href="#features">social media</a></li>
                    {/* <li className="nav-item"><a className="page-scroll" href="#about">About</a></li> */}
                    {/* <li className="nav-item"><a className="page-scroll" href="#screenshot">Screenshot</a></li> */}
                    <li className="nav-item"><a className="page-scroll" href="#pricing">about</a></li>
                    {/* <li className="nav-item"><a className="page-scroll" href="#blog">Blog</a></li> */}
                  </ul>
                </div> 
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div id="home" className="header_hero d-lg-flex align-items-center">
        {/* <img className="shape shape-1" src="/assets/images/shape-1.svg" alt="shape" />
        <img className="shape shape-2" src="/assets/images/shape-2.svg" alt="shape" />
        <img className="shape shape-3" src="/assets/images/shape-3.svg" alt="shape" /> */}

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header_hero_content mt-45">
                <h2 className="header_title">Безкоштовна кава від HODIMO?</h2>
                <h3 className="header_subtitle">Так! Кожному п'ятому, хто залишить пошту!</h3>
                {/* <ul>
                  <li><a className="main-btn" href="#">Discover More</a></li>
                  <li><a className="main-btn main-btn-2" href="#">Download App</a></li>
                </ul> */}
                {/* EMAIL FORM (Using Footer Classes) */}
              <div className="subscribe_form">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="введи свою пошту тут..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                  <button className="main-btn">долучайся</button>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_image d-flex align-items-end"
          //   style={{
          //     position: "absolute",
          //     top: "0",
          //     right: "0",
          //     width: "50%",
          //     height: "100%",
          //     zIndex: "9",
          // }}
          >
          <div className="image wow fadeInRightBig">
          <img src={iphone1} alt="header App"/>
            {/* <img src="/assets/images/dots.svg" alt="dots" className="dots" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
