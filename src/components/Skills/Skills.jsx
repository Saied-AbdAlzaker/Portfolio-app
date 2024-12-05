import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="section-caption">
            <p className="section-caption-text">MY SPECIALTY</p>
            <h3>MY SKILLS</h3>
            <p className="my-4">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
            <div className="row mt-5">
              <div className="col-md-6 position-relative">
                <h6 className="fw-6">Photoshop</h6>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar proColor1 w-75">
                    <span className="progress-section1">75%</span>
                  </div>
                </div>
                <div className="my-3">
                  <h6 className="fw-6">HTML5</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar proColor2">
                      <span className="progress-section2">85%</span>
                    </div>
                  </div>
                </div>
                <h6 className="fw-6 position-relative">WordPress</h6>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar proColor3">
                    <span className="progress-section3">70%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 sills-content position-relative">
                <h6 className="fw-6">jQuery</h6>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar proColor4">
                    <span className="progress-section4">60%</span>
                  </div>
                </div>
                <div className="my-3">
                  <h6 className="fw-6">CSS3</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar proColor5">
                      <span className="progress-section5">90%</span>
                    </div>
                  </div>
                </div>
                <h6 className="fw-6">SEO</h6>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar proColor6">
                    <span className="progress-section6">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
