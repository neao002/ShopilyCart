import React from "react";
import "./Css/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed mt-5">
        <div className="footer-left">
          <h3>
            <span> GrocyShop</span>
          </h3>
          <p className="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Nico Alvarez &copy; 2021</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span></span> Berlin
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+49 0163-962-8128</p>
          </div>
          <div>
            <i className="ml-1 fa fa-envelope"></i>
            <p>
              <a href="https://www.gmail.com">neao002@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-icons">
            <a href="https://www.facebook.com/nalvarezortiz">
              <i className="fa fa-facebook"></i>
            </a>

            <a href="https://www.linkedin.com/in/nicol%C3%A1s-%C3%A1lvarez-609bb9165/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/neao002">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
