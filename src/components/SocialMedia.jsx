import React from "react";
import insta from "../images/insta.png";
import tiktok from "../images/tiktok.png";
import linkedin from "../images/linkedin.png";

const SocialMedia = () => {
  return (
    <section id="features" className="features_area pt-35 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2 className="features_title">Слідкуйте за нами в соцмережах:</h2>
          </div>

          {/* Instagram */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-4" >
            <div className="single_features mt-30 text-center">
              <div className="features_icon" >
                <a href="https://www.instagram.com/hodimo.app?igsh=MWNiano0Mnl3YjVteQ==" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="Instagram" className="social-icon" />
                </a>
              </div>
              <div className="features_content">
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="single_features mt-30 text-center">
              <div className="features_icon">
                <a href="https://www.tiktok.com/@hodimo.app?_t=ZM-8svFQsQcqEY&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaaXwzt0Wduv081AnbyHz0wPwDlTPpZgWC0Rt0t6YD1Kdtz_yRmofhIrOA8_aem_AM-Xfg1flbEzOONAqiSylQ" target="_blank" rel="noopener noreferrer">
                  <img src={tiktok} alt="TikTok" className="social-icon" />
                </a>
              </div>
              <div className="features_content">
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="single_features mt-30 text-center">
              <div className="features_icon">
                <a href="https://www.linkedin.com/company/hodimo.app/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
              </div>
              <div className="features_content">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
