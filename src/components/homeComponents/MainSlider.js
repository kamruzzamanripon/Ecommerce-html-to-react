import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";

function MainSlider() {
  const options = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: false,
    dots: false,
    rewind: true, // Go backwards when the boundary has reached
    nav: true, // Show next/prev buttons
    //   navContainerClass: 'owl-nav' by default,
    navElement: "div",
    navClass: ["main-slider-previous", "main-slider-next"], // Add these classes on navElement
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  };
  return (
    <Fragment>
      <div className="default-height ph-item">
        <OwlCarousel className="owl-theme slider-main" {...options}>
          <div className="bg-image one">
            <div className="slide-content slide-animation">
              <h1>Nashwan Casual Clothing</h1>
              <h2>lifestyle / clothing / hype</h2>
            </div>
          </div>
          <div className="bg-image two">
            <div className="slide-content-2 slide-animation">
              <h2 className="slide-2-h2-a">Hiking</h2>
              <h2 className="slide-2-h2-b">Collection</h2>
              <h1>2022</h1>
            </div>
          </div>
          <div className="bg-image three">
            <div className="slide-content slide-animation">
              <h1>
                Tech
                <span style={{ color: "#333" }}>Deals</span>
              </h1>
              <h2 style={{ color: "#333" }}># shopping</h2>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </Fragment>
  );
}

export default MainSlider;
