import React from "react";
import Navbar from '../General/Navbar';
import Header from "../General/Header";
import Footer from "../General/Footer";
import TopSerchbar from "../Home/TopSerchbar";
import "../../css/contact.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return <div>

      <Header></Header>
      <Navbar></Navbar>
      <TopSerchbar></TopSerchbar>
      <div className="pt-4">
      {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Contact Us</h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}


       {/* <!-- Contact Section Begin --> */}
    <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_phone"><FontAwesomeIcon icon={faPhone} /></span>
                        <h5>Phone</h5>
                        <p>+01-3-8888-6868</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_pin_alt"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                        <h5>Address</h5>
                        <p>60-49 Road 11378 New York</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_clock_alt"><FontAwesomeIcon icon={faClock} /></span>
                        <h5>Open time</h5>
                        <p>10:00 am to 23:00 pm</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_mail_alt"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <h5>Email</h5>
                        <p>hello@colorlib.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End -->

    <!-- Map Begin --> */}
    <div class="map">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
  style={{ height: "400px", border: "0" }}
  allowFullScreen={true}
  aria-hidden="false"
  tabIndex="0"
></iframe>
        <div class="map-inside">
            <i class="icon_pin"></i>
            <div class="inside-widget">
                <h4>New York</h4>
                <ul>
                    <li>Phone: +12-345-6789</li>
                    <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Map End -->

    <!-- Contact Form Begin --> */}
   
    <div class="contact-form spad ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div class="col-lg-12 text-center">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" class="site-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    <Footer/>
  </div>;
}

export default Contact;
