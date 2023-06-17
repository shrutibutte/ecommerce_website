import React from "react";
import logoimg from "../../asset/img/logo.png";
import payment from "../../asset/img/payment-item.png";
const Footer = () => {
  return (
    <footer className=" container-fluid footer spad fixed-bottom ">
      <div className="container-fluid  bg-light" style={{ padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 py-2">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img src={logoimg} alt="" />
                  </a>
                </div>
                <ul className="list-unstyled my-3">
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="d-flex col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h4>Usefull Links</h4>
                <ul className="footer__links list-unstyled">
                  <li className="footer__link">
                    <a href="#">About Us</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">About Our Shop</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Delivery Information</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className=" footer__widget" style={{ marginLeft: "38px" }}>
                <ul className="footer__links list-unstyled">
                  <li className="footer__link">
                    <a href="#">About Us</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">About Our Shop</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Delivery Information</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="footer__link">
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form className="form-inline my-2 my-lg-0">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append ">
                      <button
                        type="button "
                        class="btn  btn-success"
                        style={{ height: "44px" }}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>

                <div className="footer__widget__social my-3">
                  <a href="#" className="btn btn-light btn-rounded">
                    <i className="fa fa-facebook footer__icon"></i>
                  </a>
                  <a href="#" className="btn btn-light btn-rounded">
                    <i className="fa fa-instagram footer__icon"></i>
                  </a>
                  <a href="#" className="btn btn-light btn-rounded">
                    <i className="fa fa-twitter footer__icon"></i>
                  </a>
                  <a href="#" className="btn btn-light btn-rounded">
                    <i className="fa fa-pinterest footer__icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 d-flex flex-md-row flex-column justify-content-md-between">
              <div className="footer__copyright">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
              <div class="footer__copyright__payment">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
