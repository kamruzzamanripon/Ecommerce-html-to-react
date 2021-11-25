import React,{Fragment} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BrandSlider() {
  const optionsMenProduct = {
      autoplay: true,
			autoplayTimeout: 8000,
            loop: false,
            dots: false,
            rewind: true,
            nav: true,
            navElement: 'div',
            navClass: ['brand-slider-previous', 'brand-slider-next'],
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 5,
                },
                1200: {
                    items: 5,
                },
            }
};

    return (
        <Fragment>
            <div className="brand-slider u-s-p-b-80">
          <div className="container">
            <OwlCarousel 
              className="brand-slider-content owl-theme"
              {...optionsMenProduct}
            >
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 1" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 2" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 3" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 5" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 6" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 7" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
        </Fragment>
    )
}

export default BrandSlider
