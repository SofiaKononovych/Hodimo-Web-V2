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
          Скоро <strong>в AppStore і PlayMarket...</strong>
        </h3>

        {/* PHONES */}
        <div className="download_mockups">
          <div className="mockup_container">
            <img className="phone_mockup left_mockup" src={leftPhone} alt="Phone Mockup 1" />
            <img className="download_btn left_btn" src={playstore} alt="Google Play" />
          </div>

          <div className="mockup_container">
            <img className="phone_mockup right_mockup" src={rightPhone} alt="Phone Mockup 2" />
            <img className="download_btn right_btn" src={appstore} alt="App Store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;



