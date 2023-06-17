import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <div className="container">Hello Homepage</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;
