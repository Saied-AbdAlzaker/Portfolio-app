import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="section-caption">
            <p className="section-caption-text">ABOUT US</p>
            <h3>WHO AM I?</h3>
            <p>
              <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The
              copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times and everything that was
              left from its origin would be the word (and) and the Little Blind
              Text should turn around and return to its own, safe country.
            </p>
            <p className="my-4">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of <br /> Grammar.
            </p>
            <div className="row">
              <div className="col-md-3 card col-sm-12 about-card-one">
                <i class="fa-regular fa-lightbulb fa-2x mb-3"></i>
                <div className="text-center">
                  <p>Graphic Design</p>
                </div>
              </div>
              <div className="col-md-3 card col-sm-12 about-card-two">
                <i class="fa-solid fa-earth-africa fa-2x mb-3"></i>
                <div className="text-center">
                  <p>Web Design</p>
                </div>
              </div>
              <div className="col-md-3 card col-sm-12 about-card-three">
                <i class="fa-solid fa-database fa-2x mb-3"></i>
                <div className="text-center">
                  <p>Software</p>
                </div>
              </div>
              <div className="col-md-3 card col-sm-12 about-card-four">
                <i class="fa-solid fa-mobile-screen-button fa-2x mb-3"></i>
                <div className="text-center">
                  <p>Application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
