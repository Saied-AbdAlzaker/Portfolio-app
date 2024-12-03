import React from "react";
import homeCss from "./Home.module.css";

export default function Home() {
  let sidePara = "100% html5 bootstrap templates Made ";
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item vh-100 d-flex flex-column justify-content-center px-3 slider1 active"
            data-bs-interval="5000"
          >
            <div className="side-caption">
              <h2>
                Hi! <br /> Im Jackson
              </h2>
              <p>
                100% html5 bootstrap templates Made <br /> By
                <a className="text-colorlib" href="https://colorlib.com/">Colorlib.com</a>
              </p>
              <button className="btn-side">
                <span className="text-muted">DOWNLOAD CV</span>
                <i className="fa-solid fa-download mx-2"></i>
              </button>
            </div>
          </div>
          <div
            className="carousel-item vh-100 d-flex flex-column justify-content-center px-3 slider2"
            data-bs-interval="5000"
          >
            <div className="side-caption">
              <h2>
                I am <br />a Designer
              </h2>
              <p>
                100% html5 bootstrap templates Made <br /> By
                <a className="text-colorlib" href="https://colorlib.com/">Colorlib.com</a>
              </p>
              <button className="btn-side">
                <span className="text-muted">VIEW PORTFOLIO</span>
                <i className="fa-solid fa-briefcase mx-2"></i>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
