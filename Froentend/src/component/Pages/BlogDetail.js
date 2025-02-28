import React from "react";
import Navbar from "../General/Navbar";
import Header from "../General/Header";
import HeadingPage from "../General/HeadingPage";
import img1 from "../../asset/img/blog/details/details-pic.jpg";
import img2 from "../../asset/img/blog/blog-1.jpg";
import img3 from "../../asset/img/blog/blog-2.jpg";
import img4 from "../../asset/img/blog/blog-3.jpg";
import img5 from "../../asset/img/blog/blog-4.jpg";
import img6 from "../../asset/img/blog/blog-5.jpg";
import img7 from "../../asset/img/blog/blog-6.jpg";
import img8 from "../../asset/img/blog/sidebar/sr-1.jpg";
import img9 from "../../asset/img/blog/sidebar/sr-2.jpg";
import img10 from "../../asset/img/blog/sidebar/sr-3.jpg";
import bannerImage from "../../asset/img/breadcrumb.jpg";

import "../../css/BlogDetails.css";
import author from "../../asset/img/blog/details/details-author.jpg";
import Footer from "../General/Footer";
function BlogDetail() {
  return (
    <>
      <Header />
      <Navbar />
      <section
        class="blog-details-hero set-bg"
        style={{
          backgroundImage: `url(${bannerImage})`,
          height: "200px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blog__details__hero__text text-center ">
                <h2 className="text-white p-3">
                  The Moment You Need To Remove Garlic From The Menu
                </h2>
                <ul className="text-white text center">
                  <li>By Michael Scofield</li>
                  <li>January 14, 2019</li>
                  <li>8 Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5 order-md-1 order-2">
              <div class="blog__sidebar">
                <div class="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span class="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="#">Food (5)</a>
                    </li>
                    <li>
                      <a href="#">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="#">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div class="blog__sidebar__recent">
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={img8} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={img9} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={img10} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div class="blog__sidebar__item__tags">
                    <a href="#">Apple</a>
                    <a href="#">Beauty</a>
                    <a href="#">Vegetables</a>
                    <a href="#">Fruit</a>
                    <a href="#">Healthy Food</a>
                    <a href="#">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7 order-md-1 order-1">
              <div class="blog__details__text">
                <img src={img1} className="img-fluid" alt="" />
                <p>
                  Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit
                  amet nisl tempus convallis quis ac lectus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Proin eget tortor risus. Donec rutrum congue leo eget
                  malesuada. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                  quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p>
                <h3>
                  The corner window forms a place within a place that is a
                  resting point within the large space.
                </h3>
                <p>
                  The study area is located at the back with a view of the vast
                  nature. Together with the other buildings, a congruent story
                  has been managed in which the whole has a reinforcing effect
                  on the components. The use of materials seeks connection to
                  the main house, the adjacent stables
                </p>
              </div>
              <div class="blog__details__content">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="blog__details__author">
                      <div class="blog__details__author__pic">
                        <img src={author} alt="" />
                      </div>
                      <div class="blog__details__author__text">
                        <h6>Michael Scofield</h6>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="blog__details__widget">
                      <ul>
                        <li>
                          <span>Categories:</span> Food
                        </li>
                        <li>
                          <span>Tags:</span> All, Trending, Cooking, Healthy
                          Food, Life Style
                        </li>
                      </ul>
                      <div class="blog__details__social">
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="related-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title related-blog-title">
                <h2>Post You May Like</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={img7} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Cooking tips make cooking simple</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={img5} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">6 ways to prepare breakfast for 30</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={img6} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Visit the clean farm in the US</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default BlogDetail;
