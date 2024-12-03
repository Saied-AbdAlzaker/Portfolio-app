import React from "react";
import { NavLink } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <section className="exper-content my-5">
        <div className="container">
          <div className="section-caption">
            <p className="section-caption-text">EXPERIENCE</p>
            <h3>WORK EXPERIENCE</h3>
            <div className="experience-caption d-flex">
              <div className="line-exper">
                <span className="line-icon bg-info">
                  <i className="fa-solid fa-pencil text-white"></i>
                </span>
              </div>
              <div className="bg-experience experience my-3">
                <h4>
                  <NavLink className="text-decoration-none text-black fw-normal fs-5">
                    Full Stack Developer
                  </NavLink>
                  <span className="ms-3 fs-6">2017-2018</span>
                </h4>
                <p className="mt-4">
                  Tolerably earnestly middleton extremely distrusts she boy now
                  not. Add and offered <br /> prepare how cordial two promise.
                  Greatly who affixed suppose but enquire compact <br /> prepare
                  all put. Added forth chief trees but rooms think may.
                </p>
              </div>
            </div>
            <div className="experience-caption d-flex">
              <div className="line-exper">
                <span className="line-icon bg-danger">
                  <i className="fa-solid fa-pencil text-white"></i>
                </span>
              </div>
              <div className="bg-experience experience my-3 ">
                <h4>
                  <NavLink className="text-decoration-none text-black fw-normal fs-5">
                    Front End Developer at Google Company
                  </NavLink>
                  <span className="ms-3 fs-6">2017-2018</span>
                </h4>
                <p className="mt-4">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost <br /> unorthographic life One day
                  however a small line of blind text by the name of Lorem Ipsum
                  <br /> decided to leave for the far World of Grammar.
                </p>
              </div>
            </div>
            <div className="experience-caption d-flex">
              <div className="line-exper">
                <span className="line-icon bg-success">
                  <i className="fa-solid fa-pencil text-white"></i>
                </span>
              </div>
              <div className="bg-experience experience my-3">
                <h4>
                  <NavLink className="text-decoration-none text-black fw-normal fs-5">
                    System Analyst
                  </NavLink>
                  <span className="ms-3 fs-6">2017-2018</span>
                </h4>
                <p className="mt-4">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost <br /> unorthographic life One day
                  however a small line of blind text by the name of Lorem Ipsum{" "}
                  <br /> decided to leave for the far World of Grammar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
