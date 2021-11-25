import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import MiniCart from './MiniCart'

function MidHeader() {
  const [miniCartTigger, setMiniCartTigger] = useState(false)
  //console.log(miniCartTigger)

  const miniCartTiggerToggle =()=>{
    miniCartTigger === false ? setMiniCartTigger(true) : setMiniCartTigger(false)
  }
    return (
        <Fragment>
            <div className="full-layer-mid-header">
            <div className="container">
              <div className="row clearfix align-items-center">
                <div className="col-lg-3 col-md-9 col-sm-6">
                  <div className="brand-logo text-lg-center">
                    <Link to="/">
                      <img src="72.png" alt="Groover Brand Logo" className="app-brand-logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 u-d-none-lg">
                  <form className="form-searchbox">
                    <label className="sr-only" htmlFor="search-landscape">Search</label>
                    <input id="search-landscape" type="text" className="text-field" placeholder="Search everything" />
                    <div className="select-box-position">
                      <div className="select-box-wrapper select-hide">
                        <label className="sr-only" htmlFor="select-category">Choose category for search</label>
                        <select className="select-box" id="select-category">
                          <option selected="selected" value>
                            All
                          </option>
                          <option value>Men's Clothing</option>
                          <option value>Women's Clothing
                          </option>
                          <option value>Toys Hobbies &amp; Robots
                          </option>
                          <option value>Mobiles &amp; Tablets
                          </option>
                          <option value>Consumer Electronics
                          </option>
                          <option value>Books &amp; Audible
                          </option>
                          <option value>Beauty &amp; Health
                          </option>
                          <option value>Furniture Home &amp; Office
                          </option>
                        </select>
                      </div>
                    </div>
                    <button id="btn-search" type="submit" className="button button-primary fas fa-search" />
                  </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <nav>
                    <ul className="mid-nav g-nav">
                      <li className="u-d-none-lg">
                        <a href="home.html">
                          <i className="ion ion-md-home u-c-brand" />
                        </a>
                      </li>
                      <li className="u-d-none-lg">
                        <a href="wishlist.html">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a id="mini-cart-trigger" onClick={miniCartTiggerToggle}>
                          <i className="ion ion-md-basket" />
                          <span className="item-counter">4</span>
                          <span className="item-price">$220.00</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

           {/* Mini Cart */}
           <MiniCart 
             miniCartTigger={miniCartTigger}
             miniCartTiggerToggle={miniCartTiggerToggle}
            />
           {/* Mini Cart /- */}

        </Fragment>
    )
}

export default MidHeader
