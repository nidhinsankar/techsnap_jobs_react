import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-5 text-center">
                <h1>Grow your career with TechnSnap</h1>
                <p style={{ color: "#fff;" }}>
                  Find your dream jobs and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: "url('career.jpg');" }}
      >
        <div className="stat-container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Careers Statistics</h2>
              <p className="lead text-white">
                Our Regular Career Statistics depend on our market growth.
              </p>
            </div>
          </div>
          <div className="row pb-0 block__19738 section-counter">
            <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="mb-2">
                <strong className="number" id="candidates" data-number="500">
                  0
                </strong>
              </div>
              <span className="caption">Candidates</span>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="mb-2">
                <strong className="number" id="posted" data-number="50">
                  0
                </strong>
              </div>
              <span className="caption">Jobs Posted</span>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="mb-2">
                <strong className="number" id="filled" data-number="200">
                  0
                </strong>
              </div>
              <span className="caption">Jobs Filled</span>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="mb-2">
                <strong className="number" id="companies" data-number="5">
                  0
                </strong>
              </div>
              <span className="caption">Companies</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
