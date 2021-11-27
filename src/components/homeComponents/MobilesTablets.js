import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MobilesTablets() {
  const optionsMenProduct = {
    autoplay: false,
                loop: false,
                dots: false,
                rewind: true,
                nav: true,
                navElement: 'div',
                navClass: ['specific-category-slider-previous', 'specific-category-slider-next'],
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    991: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                }
};

    return (
        <Fragment>
            <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Mobiles &amp; Tablets</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#mobiles-latest-products">Latest Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#mobiles-best-selling-products">Best Selling</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#mobiles-top-rating-products">Top Rating</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#mobiles-featured-products">Featured Products</a>
                </li>
              </ul>
              <span className="sec-maker-span-text u-s-m-b-8 d-block">Select products in specific category</span>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div className="tab-pane active show fade" id="mobiles-latest-products">
                    <div className="row align-items-center">
                      <div className="col-lg-1 col-md-12">
                        <ul className="nav tab-nav-style-2-a">
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#smart-phones" title="Smart Phones">
                              <i className="ion ion-ios-phone-portrait" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tablets" title="Tablets">
                              <i className="ion ion-md-phone-landscape" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#smart-watches" title="Smart Watches">
                              <i className="ion ion-md-watch" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#device-accessories" title="Device Accessories">
                              <i className="ion ion-md-settings" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#power-banks" title="Power Banks">
                              <i className="ion ion-md-battery-charging" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-11 col-md-12">
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="smart-phones">
                            <div className="slider-foucxx">
                              
                              <OwlCarousel 
                                className="specific-category-slider owl-theme" 
                                {...optionsMenProduct} 
                              >
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartphones</a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Xiaomi Note 2 Black Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartphones</a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Iphone X Silver Color</a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartphones</a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Samsung S7 Green Metallic Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartphones</a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Sony Xperia 3 Black Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                  </Link>
                                </div>
                              </OwlCarousel>

                            </div>
                          </div>
                          <div className="tab-pane fade" id="tablets">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>There is not any product in specific catalogue.</h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="smart-watches">
                            <div className="slider-foucxx">

                              <OwlCarousel 
                                className="specific-category-slider owl-theme" 
                                {...optionsMenProduct} 
                              >
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Outatime Mix Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Mombo Full Wrist Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Apollo Sport Think Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                  </Link>
                                </div>
                                <div className="item">
                                <Link to='/singleProduct/productName'>
                                  <div className="image-container">
                                    <a className="item-img-wrapper-link" href="single-product.html">
                                      <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                                    </a>
                                    <div className="item-action-behaviors">
                                      <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                      <a className="item-mail" href="javascript:void(0)">Mail</a>
                                      <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="javascript:void(0)">Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">Rhythm Pulse Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div className="star" title="0 out of 5 - based on 0 Reviews">
                                          <span style={{width: 0}} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                  </Link>
                                </div>
                              </OwlCarousel>

                            </div>
                          </div>
                          <div className="tab-pane fade" id="device-accessories">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>There is not any product in specific catalogue.</h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="power-banks">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>There is not any product in specific catalogue.</h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="mobiles-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="mobiles-top-rating-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="mobiles-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        </Fragment>
    )
}

export default MobilesTablets
