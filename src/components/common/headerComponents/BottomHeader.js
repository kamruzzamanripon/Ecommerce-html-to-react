import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function BottomHeader(props) {
    const [navDisplay, SetNavDisplay] = useState(false)
    

    const AllCategoryMenu = ()=>{
         navDisplay ? SetNavDisplay(false) : SetNavDisplay(true)
    }


    
    useEffect( ()=>{
        props.allCategoryMenu === 'true' ? SetNavDisplay(true) : SetNavDisplay(false)
    },[props.allCategoryMenu])


    return (
        <Fragment>
            <div className="full-layer-bottom-header">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-lg-3">
                  <div className="v-menu">
                    <span className="v-title" onClick={AllCategoryMenu}>
                      <i className="ion ion-md-menu" />
                      All Categories
                      <i className={navDisplay ? "fas fa-angle-down" : "fas fa-angle-up"} />
                    </span>
                    <nav style={navDisplay ? {display:"block"} : {display:"none"}}>
                      <div className="v-wrapper">
                        <ul className="v-list animated fadeIn">
                          <li className="js-backdrop">
                            <Link to="/category-name">
                              <i className="ion ion-md-shirt" />
                              Men's Clothing
                              <i className="ion ion-ios-arrow-forward" />
                            </Link>
                            <button className="v-button ion ion-md-add" />
                            <div className="v-drop-right" style={{width: '700px'}}>
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Tops</Link>
                                      <ul>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">T-Shirts</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Hoodies</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Suits</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Black Bean T-Shirt
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Outwear</Link>
                                      <ul>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Jackets</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Trench</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Parkas</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Sweaters</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Accessories</Link>
                                      <ul>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Watches</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Ties</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Scarves</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Belts</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Bottoms</Link>
                                      <ul>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Casual Pants
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Shoes</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Jeans</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Shorts</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Underwear</Link>
                                      <ul>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Boxers</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Briefs</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Robes</Link>
                                        </li>
                                        <li>
                                          <Link to="/category/subcategory/subcategory">Socks</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Sunglasses</Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Pilot</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Wayfarer</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Square</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Round</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="js-backdrop">
                          <Link to="/category-name">
                              <i className="ion ion-ios-shirt" />
                              Women's Clothing
                              <i className="ion ion-ios-arrow-forward" />
                            </Link>
                            <button className="v-button ion ion-md-add" />
                            <div className="v-drop-right" style={{width: '700px'}}>
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Tops</Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Dresses</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Blouses &amp; Shirts
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">T-shirts</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Sweater</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Intimates</Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Bras</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Brief Sets
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Bustiers &amp; Corsets
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Panties</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Wedding &amp; Events
                                      </Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Wedding Dresses
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Evening Dresses
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Prom Dresses
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Flower Dresses
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Bottoms</Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Skirts</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Shoes</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Leggings</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Jeans</Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Outwear &amp; Jackets
                                      </Link>
                                      <ul>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Blazers</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Basics Jackets
                                          </Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Trench</Link>
                                        </li>
                                        <li>
                                        <Link to="/category/subcategory/subcategory">Leather &amp; Suede
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <Link to="/category/subcategory">Accessories</Link>
                                      <ul>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Sunglasses</a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Headwear</a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Baseball Caps
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Belts</a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="js-backdrop">
                          <Link to="/category-name">
                              <i className="ion ion-md-rocket" />
                              Toys Hobbies &amp; Robots
                              <i className="ion ion-ios-arrow-forward" />
                            </Link>
                            <button className="v-button ion ion-md-add" />
                            <div className="v-drop-right" style={{width: '700px'}}>
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <a href="shop-v2-sub-category.html">RC Toys &amp; Hobbies
                                      </a>
                                      <ul>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Helicopter
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Lego Robots
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Drone
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Car
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Boat
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">RC Robot
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Multi Rotor Parts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">FPV System
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Radios &amp; Receiver
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Battery &amp; Charger
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <a href="shop-v2-sub-category.html">Solar Energy
                                      </a>
                                      <ul>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Solar Powered Toy
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v3-sub-sub-category.html">Solar Powered System
                                          </a>
                                        </li>
                                        <li className="view-more-flag">
                                          <a href="store-directory.html">View More
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* Remember layer image should be place on empty space and its not overlap your list items because user could not read your list items. */}
                              <div className="v-image" style={{bottom: 0, right: '-25px'}}>
                                <a href="#" className="d-block">
                                  <img src="images/banners/mega-3.png" className="img-fluid" alt="Product" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                          <Link to="/category-name">
                              <i className="ion ion-md-phone-portrait" />
                              Mobiles &amp; Tablets
                            </Link>
                          </li>
                          <li>
                            <Link to="/category-name">
                              <i className="ion ion-md-tv" />
                              Consumer Electronics
                            </Link>
                          </li>
                          <li>
                            <Link to="/category-name">
                              <i className="ion ion-ios-book" />
                              Books &amp; Audible
                            </Link>
                          </li>
                          <li>
                            <Link to="/category-name">
                              <i className="ion ion-md-heart" />
                              Beauty &amp; Health
                            </Link>
                          </li>
                          <li className="v-none" style={{display: 'none'}}>
                            <Link to="/category-name">
                              <i className="ion ion-md-easel" />
                              Furniture Home &amp; Office
                            </Link>
                          </li>
                          <li>
                            <Link to="/category-name">
                              <i className="ion ion-md-add" />
                              <span>View More</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-9">
                  <ul className="bottom-nav g-nav u-d-none-lg">
                    <li>
                      <Link to="/new-arrivals">New Arrivals
                        <span className="superscript-label-new">NEW</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/exclusive-deals">Exclusive Deals
                        <span className="superscript-label-hot">HOT</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/flash-deals">Flash Deals
                      </Link>
                    </li>
                    <li className="mega-position">
                      <a>Pages
                        <i className="fas fa-chevron-down u-s-m-l-9" />
                      </a>
                      <div className="mega-menu mega-3-colm">
                        <ul>
                          <li className="menu-title">Home &amp; Static Pages</li>
                          <li>
                            <Link to="/" className="u-c-brand">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/directory">Store Directory</Link>
                          </li>
                          <li>
                            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                          </li>
                          {/* <li>
                            <Link to="/*">404</Link>
                          </li> */}
                          <li className="menu-title">Single Product Page</li>
                          <li>
                            <Link to="/singleProduct/:productName">Single Product</Link>
                          </li>
                          <li className="menu-title">Blog</li>
                          <li>
                            <Link to="/blog">Blog Page</Link>  
                          </li>
                          <li>
                            <Link to="/blog/single">Blog Single</Link>  
                          </li>
                        </ul>
                        <ul>
                          <li className="menu-title">Ecommerce Pages</li>
                          <li>
                            <Link to="/category">Shop</Link>
                          </li>
                          <li>
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/login">My Account</Link>
                          </li>
                          <li>
                            <Link to="/wishlist">Wishlist</Link>
                          </li>
                          <li>
                            <Link to="/track-order">Track your Order</Link>
                          </li>
                        </ul>
                        
                      </div>
                    </li>
                    <li>
                      <Link to="/super-sale">Super Sale
                        <span className="superscript-label-discount">-15%</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default BottomHeader
