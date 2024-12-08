import React, { useState } from "react";
import work1 from "../../../assets/images/work/img-1.jpg";
import work2 from "../../../assets/images/work/img-2.jpg";
import work3 from "../../../assets/images/work/img-3.jpg";
import work4 from "../../../assets/images/work/img-4.jpg";
import work5 from "../../../assets/images/work/img-5.jpg";
import work6 from "../../../assets/images/work/img-6.jpg";
import { Link } from "react-router-dom";

export default function Software() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <section className="my-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="work-item position-relative">
                <div className="work-img">
                  <img src={work1} alt="work1" className="w-100 h-100 " />
                </div>
                <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                  <div>
                    <Link className="text-white">Work 01</Link>
                    <p className="mt-3">Animation</p>
                  </div>
                  <div className="d-flex">
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="icon-work cursor rounded-3 mx-2">
                      <i className="fa-regular fa-eye"></i>
                      <Link className="text-black ms-2">100</Link>
                    </div>
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-regular fa-heart"></i>
                      <Link className="text-black ms-2">49</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-item position-relative">
                <div className="work-img">
                  <img src={work4} alt="work4" className="w-100 h-100 " />
                </div>
                <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                  <div>
                    <Link className="text-white">Work 04</Link>
                    <p className="mt-3">Animation</p>
                  </div>
                  <div className="d-flex">
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="icon-work cursor rounded-3 mx-2">
                      <i className="fa-regular fa-eye"></i>
                      <Link className="text-black ms-2">100</Link>
                    </div>
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-regular fa-heart"></i>
                      <Link className="text-black ms-2">49</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-item position-relative">
                <div className="work-img">
                  <img src={work2} alt="work2" className="w-100 h-100 " />
                </div>
                <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                  <div>
                    <Link className="text-white">Work 02</Link>
                    <p className="mt-3">Animation</p>
                  </div>
                  <div className="d-flex">
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="icon-work cursor rounded-3 mx-2">
                      <i className="fa-regular fa-eye"></i>
                      <Link className="text-black ms-2">100</Link>
                    </div>
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-regular fa-heart"></i>
                      <Link className="text-black ms-2">49</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-item position-relative">
                <div className="work-img">
                  <img src={work5} alt="work5" className="w-100 h-100 " />
                </div>
                <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                  <div>
                    <Link className="text-white">Work 05</Link>
                    <p className="mt-3">Animation</p>
                  </div>
                  <div className="d-flex">
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="icon-work cursor rounded-3 mx-2">
                      <i className="fa-regular fa-eye"></i>
                      <Link className="text-black ms-2">100</Link>
                    </div>
                    <div className="icon-work cursor rounded-3">
                      <i className="fa-regular fa-heart"></i>
                      <Link className="text-black ms-2">49</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isVisible && (
              <>
                <div className="col-md-6">
                  <div className="work-item position-relative">
                    <div className="work-img">
                      <img src={work3} alt="work3" className="w-100 h-100 " />
                    </div>
                    <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                      <div>
                        <Link className="text-white">Work 03</Link>
                        <p className="mt-3">Animation</p>
                      </div>
                      <div className="d-flex">
                        <div className="icon-work cursor rounded-3">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="icon-work cursor rounded-3 mx-2">
                          <i className="fa-regular fa-eye"></i>
                          <Link className="text-black ms-2">100</Link>
                        </div>
                        <div className="icon-work cursor rounded-3">
                          <i className="fa-regular fa-heart"></i>
                          <Link className="text-black ms-2">49</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="work-item position-relative">
                    <div className="work-img">
                      <img src={work6} alt="work6" className="w-100 h-100 " />
                    </div>
                    <div className="layer position-absolute h-100 w-100 top-0 start-0 d-flex flex-column justify-content-between p-3 opacity-0 ">
                      <div>
                        <Link className="text-white">Work 06</Link>
                        <p className="mt-3">Animation</p>
                      </div>
                      <div className="d-flex">
                        <div className="icon-work cursor rounded-3">
                          <i className="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className="icon-work cursor rounded-3 mx-2">
                          <i className="fa-regular fa-eye"></i>
                          <Link className="text-black ms-2">100</Link>
                        </div>
                        <div className="icon-work cursor rounded-3">
                          <i className="fa-regular fa-heart"></i>
                          <Link className="text-black ms-2">49</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={toggleVisibility}
            className="btn btn-work text-white mt-3"
          >
            {isVisible ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </>
  );
}
