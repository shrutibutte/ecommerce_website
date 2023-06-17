import React from "react";
import logoimg from "../../asset/img/logo.png";
import "../../css/style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-white navbar-light">
        <div class="container">
          <Link class="navbar-brand logodesktop" to="/">
            <img src={logoimg} alt="logo" />
          </Link>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav navItem mx-auto">
              <li class="nav-item">
                <Link class="nav-link homeitem  text-success text-bold" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link homeitem" to="/Shop">
                  SHOP
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link homeitem" to="/Page">
                  PAGES
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link homeitem" to="/Blog">
                  BLOG
                </Link>
              </li>

              <li class="nav-item homeitem">
                <Link class="nav-link" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* social media icon hear  */}
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  {/* love icon hear */}
                  <icon class="fa fa-heart" aria-hidden="true"></icon>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <icon class="fa fa-shopping-cart" aria-hidden="true"></icon>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/">
                  |
                </Link>
              </li>
              {/* login icon hear */}
              <li class="nav-item" style={{ marginLeft: "10px" }}>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
