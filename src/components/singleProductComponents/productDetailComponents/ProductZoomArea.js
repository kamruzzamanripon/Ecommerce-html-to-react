import React,{Fragment} from 'react'

function ProductZoomArea() {
    return (
        <Fragment>
            <div className="zoom-area">
                  <img id="zoom-pro" className="img-fluid" src="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg" alt="Zoom Image" />
                  <div id="gallery" className="u-s-m-t-10">
                    <a className="active" data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                    <a data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                    <a data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                    <a data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                    <a data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                    <a data-image="images/product/product@4x.jpg" data-zoom-image="images/product/product@4x.jpg">
                      <img src="images/product/product@2x.jpg" alt="Product" />
                    </a>
                  </div>
                </div>
        </Fragment>
    )
}

export default ProductZoomArea
