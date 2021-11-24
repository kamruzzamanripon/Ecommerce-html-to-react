import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

function MenClothing() {
    return (
        <Fragment>
            <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#men-latest-products">Latest Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#men-best-selling-products">Best Selling</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#men-top-rating-products">Top Rating</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#men-featured-products">Featured Products</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div className="tab-pane active show fade" id="men-latest-products">
                    <div className="slider-fouc">
                      <div className="products-slider owl-carousel" data-item={4}>
                        
                        <Link to='/singleProduct/productName'>
                          <div className="item">
                            <div className="image-container">
                              <a className="item-img-wrapper-link" href="#">
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
                                    <a href="shop-v1-root-category.html">Men's</a>
                                  </li>
                                  <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Tops</a>
                                  </li>
                                  <li>
                                    <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                  </li>
                                </ul>
                                <h6 className="item-title">
                                  <a href="single-product.html">Casual Hoodie Full Cotton</a>
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
                          </div>
                        </Link>
                        
                        <Link to='/singleProduct/productName'> 
                        <div className="item">
                          <div className="image-container">
                            <a className="item-img-wrapper-link" href="#">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Mischka Plain Men T-Shirt</a>
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
                        </div>
                        </Link>
                        
                        <Link to='/singleProduct/productName'> 
                        <div className="item">
                          <div className="image-container">
                            <a className="item-img-wrapper-link" href="#">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v4-filter-as-category.html">T-Shirts</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Black Bean Plain Men T-Shirt</a>
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
                        </div>
                        </Link>
                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Bottoms</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Regular Rock Blue Men Jean</a>
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
                        </div>

                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Suits</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Black Maire Full Men Suit</a>
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
                        </div>

                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Outwear</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Woodsmoke Rookie Parka Jacket</a>
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
                        </div>

                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Accessories</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Ties</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Blue Zodiac Boxes Reg Tie
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
                        </div>

                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Bottoms</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Zambezi Carved Leather Business Casual Shoes
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="men-top-rating-products">
                    <div className="slider-fouc">
                      <div className="products-slider owl-carousel" data-item={4}>
                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Suits</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Black Maire Full Men Suit</a>
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
                        </div>
                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Outwear</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Woodsmoke Rookie Parka Jacket</a>
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
                        </div>
                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Accessories</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Ties</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Blue Zodiac Boxes Reg Tie</a>
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
                        </div>
                        <div className="item">
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
                                  <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Bottoms</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Zambezi Carved Leather Business Casual Shoes
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
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-featured-products">
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
        </section>
        </Fragment>
    )
}

export default MenClothing
