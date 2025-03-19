import React from "react";
import leftPhone from "../images/left.png"; // Left phone mockup
import rightPhone from "../images/right.png"; // Right phone mockup
import playstore from "../images/playstore.png"; // Google Play button
import appstore from "../images/appstore.png"; // App Store button

const AppDownload = () => {
  return (
    <section id="download" className="download_app_area">
      <div className="container">
        {/* SECTION TITLE */}
        <h3 className="download_title">
          Скоро в AppStore і PlayMarket...
        </h3>

        {/* PHONES */}
        <div className="download_mockups">
          <img className="phone_mockup left_mockup" src={leftPhone} alt="Phone Mockup 1" />
          <img className="phone_mockup right_mockup" src={rightPhone} alt="Phone Mockup 2" />
        </div>

        {/* DOWNLOAD BUTTONS */}
        <div className="download_buttons">
          <a href="#" className="download_btn">
            <img src={playstore} alt="Get it on Google Play" />
          </a>
          <a href="#" className="download_btn">
            <img src={appstore} alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;


