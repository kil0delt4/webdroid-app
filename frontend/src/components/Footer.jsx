import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-sec">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">
              <h1>WebDroid</h1>
              {/* <img src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png" class="manik" alt="" /> */}
            </div>
            <div className="logo-des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nihil sunt distinctio animi non explicabo voluptate nobis
                pariatur tempora dolore assumenda rem sit, quas id facilis
                officiis autem praesentium soluta.
              </p>

              <a href="#" className="btn-know">
                Know More
              </a>
            </div>
          </div>
          <div className="link row">
            <div className="footer-header">
              <h3>Links</h3>
            </div>
            <div className="link-des">
              <a href="#" className="footer-links">
                Home
              </a>
              <a href="#" className="footer-links">
                About Us
              </a>
              <a href="#" className="footer-links">
                Software Projects
              </a>
              <a href="#" className="footer-links">
                Hardware Projects
              </a>
              <a href="#" className="footer-links">
                Free Projects
              </a>
            </div>
          </div>
          <div className="link row">
            <div className="footer-header">
              <h3>Projects</h3>
            </div>
            <div className="link-des">
              <a href="/python" className="footer-links">
                Python
              </a>
              <a href="/android" className="footer-links">
                Android
              </a>
              <a href="/iot" className="footer-links">
                IoT/Robotics
              </a>
              <a href="/webbased" className="footer-links">
                Web-Based
              </a>
              <a href="/drone" className="footer-links">
                Drone
              </a>
              <a href="/cloud" className="footer-links">
                Cloud
              </a>
            </div>
          </div>
          <div className="newsletter row">
            <div className="footer-header">
              <h3>Share Your Project Ideas</h3>
            </div>
            <div className="newsletter-des">
              <div className="subcribe">
                <input type="text" placeholder="Enter your name" />
                <input type="mail" placeholder="Enter Email ID" required />
                <input
                  type="text"
                  placeholder="Share your idea here"
                  required
                />
                <button className="btn-know" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>© Copyright 2023 | WebDroid.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
