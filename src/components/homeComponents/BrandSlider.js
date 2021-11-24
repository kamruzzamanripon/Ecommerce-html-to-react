import React,{Fragment} from 'react'

function BrandSlider() {
    return (
        <Fragment>
            <div className="brand-slider u-s-p-b-80">
          <div className="container">
            <div className="brand-slider-content owl-carousel" data-item={5}>
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
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default BrandSlider
