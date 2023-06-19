import React from "react";
import bannerImage from "../../asset/img/breadcrumb.jpg";

function HeadingPage(props) {
  return (
    <div className="my-3">
      {" "}
      <section
        class="breadcrumb-section set-bg"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          height: "200px",
        }}
      >
        <div class="container my-3">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>{props.title1}</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">{props.title}</a>
                  <span className="text-white">{props.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeadingPage;
