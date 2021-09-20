import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-4">
            <div className="logo">
              <a href="#">
                <img src="/images/tvf_logo.png" alt="" />
              </a>
              <h4 className="md-text">Visit Us at</h4>
              <h4 className="sm-text">HA NOI (HEADQUARTER)</h4>
              <p className="de">F3 Thanh Dong Building, 19 Lane To Huu Str, Nam Tu Liem Dist, Hanoi, Vietnam</p>
              <br />
              <h4 className="sm-text">JAPAN (BRANCH)</h4>
              <p className="de">1-1-33, Hakataekihigashi, Hakata-ku, Fukuoka, 812-0013, JAPAN, 7 floor (7IG1)</p>
              <br />
              <h4 className="sm-text">SINGAPORE (BRANCH)</h4>
              <p className="de">#12-05 Manhattan House, 151 Chin Swee Rd, Singapore 169876</p>
              <a href="" className="femail">Email: contact@techvify.com.vn</a>
              <a href="" className="fphone">Phone: (+84)24.77762.666</a>
              <br />
            </div>
          </div>
          <div className="col-4">
            <h4 className="md-text">Visit Us at</h4>
            <a href="https://www.techvify.com.vn/vietnam-the-ideal-choice-for-software-outsourcing/"> Why software outsourcing in Vietnam is the right choice?</a>
            <a href="https://www.techvify.com.vn/top-4-healthcare-trends-in-2020/"> Top 4 healthcare trends in 2020.</a>
            <a href="https://www.techvify.com.vn/competing-in-a-digital-world-outsourcing-in-vietnam/"> The Importance of Software Development in business and how much it cost savings if outsourcing.</a>
            <a href="https://www.techvify.com.vn/techvify-the-top-tier-software-outsourcing-provider/"> Techvify: the Top-Tier Software Outsourcing Provider.</a>
          </div>
          <div className="col-4">
            <h4 className="md-text">Support</h4>
            <p className="de">
              <a href="#">Contact Us</a>
            </p>
            <p className="de">
              <a href="#">Blogs</a>
            </p>
            <p className="de">
              <a href="#">Cookies Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
