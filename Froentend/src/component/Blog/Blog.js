import React from "react";
import Navbar from '../General/Navbar';
import Header from "../General/Header";
import Footer from "../General/Footer";
import TopSerchbar from "../Home/TopSerchbar";
import "../../css/blog.css";
function Blog() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <TopSerchbar></TopSerchbar>
      <div className="w-100 pt-4" >
        {/* Breadcrumb Section Begin  */}
        <section className="breadcrumb-section set-bg" style={{"background-image":"url('https://img.freepik.com/premium-photo/fresh-vegetables-fruits-fennel-avocado-pomegranate-berries-cabbage-basil-organic-healthy-vegan-food-black-stone-background_187166-6.jpg')", 
                                                      "background-repeat": "no-repeat","background-size": "cover"}} >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Blog</h2>
                  <div className="breadcrumb__option">           
                    <a href="./index.html">Home</a>
                    <span>Blog</span>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit" className="btn btn-primary"><span className="icon_search"></span></button>
                    </form>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">All</a></li>
                      <li><a href="#">Beauty (20)</a></li>
                      <li><a href="#">Food (5)</a></li>
                      <li><a href="#">Life Style (9)</a></li>
                      <li><a href="#">Travel (10)</a></li>
                    </ul>
                  </div>
                  {/* <div className="blog__sidebar__item">
            <h4>Recent News</h4>
            <div className="blog__sidebar__recent">
              <a href="#" className="blog__sidebar__recent__item">
                <div className="blog__sidebar__recent__item__pic">
                  <img src="http://127.0.0.1:5500/ogani-master/img/blog/blog-2.jpg" className="w-25 h-25" alt="" />
                </div>
                <div className="blog__sidebar__recent__item__text">
                  <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                  <span>MAR 05, 2019</span>
                </div>
              </a>
              <a href="#" className="blog__sidebar__recent__item">
                <div className="blog__sidebar__recent__item__pic">
                  <img src="../../img/blog/sidebar/sr-2.jpg" alt="" />
                </div>
                <div className="blog__sidebar__recent__item__text">
                  <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                  <span>MAR 05, 2019</span>
                </div>
              </a>
              <a href="#" className="blog__sidebar__recent__item">
                <div className="blog__sidebar__recent__item__pic">
                  <img src="../img/blog/sidebar/sr-3.jpg" alt="" />
                </div>
                <div className="blog__sidebar__recent__item__text">
                  <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                  <span>MAR 05, 2019</span>
                </div>
              </a>
            </div>
          </div> */}
                  <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">
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
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                        <p className="d-flex justify-content-between">Sed quia non numquam modi tempora in dunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn ">READ MORE <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic " >
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">Visit the clean farm in the US</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn ">READ MORE <span className="arrow_right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn">READ MORE <span className="arrow_right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn ">READ MORE <span className="arrow_right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">The Moment You Need To Remove Garlic From The Menu</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn ">READ MORE <span className="arrow_right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="https://thumbs.dreamstime.com/b/vegetables-1430407.jpg" alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul className="list-unstyled">
                          <li><i className="fa fa-calendar-o"></i> May 4, 2019</li>
                          <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn btn">READ MORE <span className="arrow_right"></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="product__pagination blog__pagination">
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Make sure to include the necessary Bootstrap CSS and JS files in your HTML file for the classes to work properly. */}

      </div>
      <Footer />
    </div>
  );
}

export default Blog;
