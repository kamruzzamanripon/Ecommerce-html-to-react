import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ToysHobbiesRobots() {
  const optionsMenProduct = {
    autoplay: false,
    loop: false,
    dots: false,
    rewind: true,
    nav: true,
    navElement: 'div',
    navClass: ['product-slider-previous', 'product-slider-next'],
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
              <h3 className="sec-maker-h3">Toys Hobbies &amp; Robots</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#toys-latest-products">Latest Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#toys-best-selling-products">Best Selling</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#toys-top-rating-products">Top Rating</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#toys-featured-products">Featured Products</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div className="tab-pane active show fade" id="toys-latest-products">
                    <div className="slider-foucxx">
                      <OwlCarousel 
                        className='owl-theme products-slider'
                        {...optionsMenProduct} 
                      >
                        <div className="item">
                        <Link to='/singleProduct/productName'>
                          <div className="image-container">
                            <a className="item-img-wrapper-link" href="single-product.html">
                              <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </a>
                            <div className="item-action-behaviors">
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Helicopte</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">RC Helicopter 6-Cell</a>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Phantom with 1080p Camera</a>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Inspire with 1080p Camera</a>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Phantom with Battery Lights</a>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Mavic Air
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">U45 Raven RC Quadcopter
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Inspire 1 with 1080p Camera
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Inspire 1 with 360° Camera
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
                  <div className="tab-pane fade" id="toys-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="toys-top-rating-products">
                    <div className="slider-foucxx">
                      <OwlCarousel 
                         className='owl-theme products-slider'
                         {...optionsMenProduct} 
                      >
                        <div className="item">
                        <Link to='/singleProduct/productName'>
                          <div className="image-container">
                            <a className="item-img-wrapper-link" href="single-product.html">
                              <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </a>
                            <div className="item-action-behaviors">
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Mavic Air
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                  <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">U45 Raven RC Quadcopter
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                  <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Inspire 1 with 1080p Camera</a>
                              </h6>
                              <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                  <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
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
                              <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look
                              </a>
                              <a className="item-mail" href="javascript:void(0)">Mail</a>
                              <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                              <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">Toys Drones</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">RC Drone</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Inspire 1 with 360° Camera</a>
                              </h6>
                              <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                  <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
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
                  <div className="tab-pane fade" id="toys-featured-products">
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

export default ToysHobbiesRobots
