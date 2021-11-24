import React,{Fragment} from 'react'

function MidFooter() {
    return (
        <Fragment>
            <div className="mid-footer-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>CUSTOMER SERVICE</h6>
                    <ul>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="track-order.html">Track Order</a>
                      </li>
                      <li>
                        <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>COMPANY</h6>
                    <ul>
                      <li>
                        <a href="home.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>INFORMATION</h6>
                    <ul>
                      <li>
                        <a href="store-directory.html">Categories Directory</a>
                      </li>
                      <li>
                        <a href="wishlist.html">My Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">My Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>Address</h6>
                    <ul>
                      <li>
                        <i className="fas fa-location-arrow u-s-m-r-9" />
                        <span>819 Sugar Camp Road, West Concord, MN 55985</span>
                      </li>
                      <li>
                        <a href="tel:+923086561801">
                          <i className="fas fa-phone u-s-m-r-9" />
                          <span>+111-444-989</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:contact@domain.com">
                          <i className="fas fa-envelope u-s-m-r-9" />
                          <span>
                            contact@domain.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default MidFooter
