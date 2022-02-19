import React from "react";
import "./mac.css";
import img from "../../assets/project-1.png";
const MacbookCss = () => {
  return (
    <>
      <div className="mac_container">
        <div className="mac_scaler">
          <div className="mac_holder">
            <div className="mac_screen">
              <div className="mac_camera"></div>
              <div className="mac_screen_content">
                <img className="img-mac" src={img} alt="" />
                {/* <!-- put the screen's content here --> */}
              </div>
            </div>
            <div className="mac_bottom">
              <div className="mac_bottom_top_half">
                <div className="mac_thumb_space"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacbookCss;
