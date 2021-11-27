import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BooksAudible() {
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
              <h3 className="sec-maker-h3">Books &amp; Audible</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#books-latest-products">Latest Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#books-best-selling-products">Best Selling</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#books-top-rating-products">Top Rating</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#books-featured-products">Featured Products</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div className="tab-pane active show fade" id="books-latest-products">
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
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">JavaScript The Definitive Guide by David Flanagan
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
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Eloquent JavaScript by Marijn Haverbeke
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
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Secret of the JavaScript Ninja by Bear Bibeault &amp; John Resig
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
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">JavaScript The Good Parts by Douglas Crockford
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
                      </OwlCarousel>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="books-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="books-top-rating-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="books-featured-products">
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

export default BooksAudible
