import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-xl font-semibold mb-5">Company</h1>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-5">Support</h1>
          <ul>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-5">Connect</h1>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <hr className="mt-10" />
      <div>
        <p className="text-center mt-5">© 2021 Company. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
