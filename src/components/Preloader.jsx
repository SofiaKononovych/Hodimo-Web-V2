import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 100); // Match the delay from jQuery
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="loader">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
