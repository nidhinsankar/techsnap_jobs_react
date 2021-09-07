import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="Footer_conatiner">
        <div className="Footer_header">
          <a href="index.html">
            <img src="assets/images/logo.jpg" alt="Logo"></img>
          </a>
          <p>
            We are here to endure your muddled stages of knowing the trends
            while pursuing UG-CSE.we help you to know about trending jobs and
            required skills
          </p>

          <p>
            We will succour you in submitting your university projects as well
            as steer you with free tutorials
          </p>
        </div>
        <div className="Footer_columns_holder">
          <div className="Footer_columns">
            <h1>Company</h1>
            <a href="##">About us</a>
            <a href="learnerstories.html">Learner stories</a>
            <a href="boardmembers.html">our people</a>
            <a href="jobs.html">jobs</a>
          </div>
          <div className="Footer_columns">
            <h1>Resources</h1>
            <a href="##">Learn</a>
            <a href="careerpath.html">Career path</a>
            <a href="##">Internship</a>
            <a href="##">Blogs</a>
          </div>
          <div className="Footer_columns">
            <h1>Support</h1>
            <a href="contact.html">Contact us</a>
            <a href="##">FAQ</a>
            <a href="contact.html">Any ideas, DM us</a>
            <a href="##">Doc</a>
          </div>
          <div className="Footer_columns">
            <h1>Services</h1>
            <a href="##">Startup services</a>
            <a href="design.html">Design services</a>
            <a href="##">Projects</a>
            <a href="##">Courses</a>
          </div>
        </div>
      </footer>
      <div className="Privacy_holder">
        <div className="Privacy_links">
          <a href="##">Privacy policy</a>
          <a href="##">Cookies Notice</a>
          <a href="##">Security</a>
          <a href="##">Terms of use</a>
        </div>

        <div className="Social-media">
          <a href="https://www.linkedin.com/company/74741373/">
            <img src="assets/images/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://discord.gg/JWMbQCNZxF/">
            <img src="assets/images/twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.instagram.com/techsnapofficial/">
            <img src="assets/images/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
