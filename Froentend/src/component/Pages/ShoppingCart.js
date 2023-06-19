import React from "react";
import Header from "../General/Header";
import Navbar from "../General/Navbar";
import HeadingPage from "../General/HeadingPage";
import "../../css/ShopingCart.css";
import img1 from "../../asset/img/cart/cart-1.jpg";
import img2 from "../../asset/img/cart/cart-2.jpg";
import img3 from "../../asset/img/cart/cart-3.jpg";
import Footer from "../General/Footer";

const data = [
  {
    id: 1,
    img: img1,
    name: "Vegetable’s Package",
    price: "$55.00",
    quantity: "1",
    total: "$110.00",
  },
  {
    id: 2,
    img: img2,
    name: "Fresh Garden Vegetable",
    price: "$39.00",
    quantity: "1",
    total: "$39.99",
  },
  {
    id: 3,
    img: img3,
    name: "Organic Bananas",
    price: "$69.00",
    quantity: "1",
    total: "$69.99",
  },
];
function ShoppingCart() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <HeadingPage
        title1="Shopping Cart"
        title="Home"
        sub_title1="Home"
      ></HeadingPage>
      <section class="shoping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th class="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td class="shoping__cart__item">
                            <img src={item.img} alt="" />
                            <h5>{item.name}</h5>
                          </td>
                          <td class="shoping__cart__price">{item.price}</td>
                          <td class="shoping__cart__quantity">
                            <div class="quantity">
                              <div class="pro-qty">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <input type="text" value="1" />
                                <i class="fa fa-plus" aria-hidden="true"></i>
                              </div>
                            </div>
                          </td>
                          <td class="shoping__cart__total">{item.total}</td>
                          <td class="shoping__cart__item__close">
                            {/* <span class="icon_close"></span> */}
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__btns">
                <a href="#" class="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" class="primary-btn cart-btn cart-btn-right">
                  <span class="icon_loading"></span>
                  Upadate Cart
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping__continue">
                <div class="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" class="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <a href="#" class="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default ShoppingCart;
