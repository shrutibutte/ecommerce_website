import React from "react";
// import bannerImage from "../../asset/img/banner/banner.jpg";

function TopSerchbar() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
              <form
                action="#"
                className="col-md-9 d-flex align-items-center mb-3 mb-md-0"
              >
                <div className="input-group">
                  <div className="d-flex border align-items-center">
                    <span className="me-2 " style={{ padding: "4px 5px" }}>
                      All Categories
                    </span>
                    <i
                      className="fa fa-caret-down ms-2 "
                      style={{ paddingRight: "3px" }}
                    ></i>
                  </div>
                  <input
                    type="text"
                    placeholder="What do you need?"
                    className="form-control ms-2 "
                  />
                </div>
                <button
                  type="submit "
                  className="btn btn-success "
                  style={{ height: "44px", width: "140px" }}
                >
                  SEARCH
                </button>
              </form>
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <div>
                  <i className="fa fa-phone text-light rounded-circle bg-success fs-3 me-2 p-3"></i>
                </div>
                <div>
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSerchbar;
