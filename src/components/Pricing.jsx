import React from "react";
import iphoneMockup1 from "../images/iMockup - iPhone 14.png";
import iphoneMockup2 from "../images/iMockup - iPhone 14 (1).png";
import iphoneMockup3 from "../images/iMockup - iPhone 14 (3).png";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing_area mt-80 pt-75 pb-80">
      <div className="container">
        {/* TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title">HODIMO — знає: куди варто завітати, що про це думають твої друзі, і де тебе чекають знижки.</h4>
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single_pricing text-center">
              <div className="pricing_list">
                <h5 className="pricing_title">Знайди класні заклади в рекомендаціях</h5>
                <img src={iphoneMockup1} alt="Phone Feature 1" className="feature_image" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single_pricing text-center">
              <div className="pricing_list">
                <img src={iphoneMockup2} alt="Phone Feature 2" className="feature_image" />
                <h5 className="pricing_title">Отримай дисконт в улюблених закладах</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single_pricing text-center">
              <div className="pricing_list">
                <h5 className="pricing_title">Знайди класні заклади в рекомендаціях</h5>
                <img src={iphoneMockup3} alt="Phone Feature 3" className="feature_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
