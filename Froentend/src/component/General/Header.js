import React from "react";
import Navbar from "./Navbar";
import logoimg from "../../asset/img/logo.png";
import "../../css/style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light  navbar-fixed-top navbar-light">
        <div class="container">
          {/* logo hrer  */}
          <Link class="navbar-brand logodesktop logomobile" to="/">
            <img src={logoimg} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-envelope" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  hello@colorlib.com
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  |
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Free Shipping for all Order of $99
                </Link>
              </li>
            </ul>
            {/* social media icon hear  */}
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-facebook" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-twitter" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-linkedin" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-pinterest" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  |
                </Link>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    English
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Spanish
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        French
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  |
                </Link>
              </li>
              {/* login icon hear */}
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  <icon class="fa fa-user" aria-hidden="true"></icon>
                  <span class="ms-1">Register or Sign in</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="offcanvas offcanvas-start" id="demo">
          <div class="offcanvas-header">
            <Link class="navbar-brand" to="/">
              <img src={logoimg} alt="logo" />
            </Link>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <nav class="navbar navbar-expand-sm navbar-light bg-white">
            <div class="container">
              <div class="d-flex flex-column" style={{ marginLeft: "30px" }}>
                <div>
                  <ul class="navbar-nav ms-auto d-flex flex-row">
                    <li class="nav-item" style={{ marginLeft: "30px" }}>
                      <Link class="nav-link" to="/">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        to="/"
                        style={{ marginLeft: "30px" }}
                      >
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "30px" }}>
                      <Link class="nav-link " to="/">
                        |
                      </Link>
                    </li>
                    <li class="nav-item" style={{ marginLeft: "30px" }}>
                      <Link
                        class="nav-link "
                        style={{ font: "bold", fontWeight: "700" }}
                        to="/"
                      >
                        item: <span class="ms-1">$150.00</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="navbar-nav navItem mx-auto">
                    <li class="nav-item">
                      <Link
                        class="nav-link homeitem text-success text-bold"
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <hr />
                    <li class="nav-item">
                      <Link class="nav-link homeitem" to="/Shop">
                        SHOP
                      </Link>
                    </li>
                    <hr />
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link homeitem"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PAGES
                        <i class="fa fa-angle-down ms-2" aria-hidden="true"></i>
                      </Link>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link class="dropdown-item" to="/ProductDetail">
                            Shop Detail
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/Shopcart">
                            Shoping Cart
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/Checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/BLogdetail">
                            Blog Detail
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <hr />
                    <li class="nav-item">
                      <Link class="nav-link homeitem" to="/Blog">
                        BLOG
                      </Link>
                    </li>
                    <hr />
                    <li class="nav-item homeitem">
                      <Link class="nav-link" to="/Contact">
                        CONTACT
                      </Link>
                    </li>
                    <hr />
                  </ul>
                </div>
                <div>
                  <nav class="navbar navbar-expand-sm navbar-light d-sm-none">
                    <div class="collapse navbar-collapse" id="sidebarCollapse">
                      <ul class="navbar-nav flex-row justify-content-between">
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <div class="dropdown">
                            <button
                              class="btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              English
                            </button>
                            <ul class="dropdown-menu">
                              <li>
                                <Link class="dropdown-item" to="/">
                                  English
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Spanish
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  French
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <div class="container">
                    <div class="d-flex flex-column">
                      <ul class="navbar-nav flex-row justify-content-between">
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                      <ul class="nav-item my-3">
                        <div class="dropdown">
                          <button
                            class="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            English
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <Link class="dropdown-item" to="/">
                                English
                              </Link>
                            </li>
                            <li>
                              <Link class="dropdown-item" to="/">
                                Spanish
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                    <div class="">
                      <ul class="navbar-nav d-flex flex-column">
                        <li class="nav-item d-flex flex-row">
                          <Link
                            class="nav-link "
                            style={{ marginRight: "10px" }}
                            to="/"
                          >
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                          </Link>
                          <Link class="nav-link" to="/">
                            hello@colorlib.com
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            Free Shipping for all Orders of $99
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Header;
