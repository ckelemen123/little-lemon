import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={require('../assets/Logo.svg')} alt="logo" />
        <div className="nav">
        <h4>Doormat Navigation</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order</a>
          <a href="/">Login</a>
        </div>
        <div className="contact">
        <h4>Contact</h4>
          <p>123 Lemon Street, Chicago Illinois</p>
          <p>123-123-8888</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="social">
        <h4>Social Media</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;