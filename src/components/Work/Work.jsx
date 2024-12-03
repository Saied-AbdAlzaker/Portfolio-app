import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Work() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="section-caption">
            <p className="section-caption-text">MY WORK</p>
            <h3>RECENT WORK</h3>
            <div>
              <NavLink
                to="graphic-design"
                className="text-decoration-none fs-6"
                style={({ isActive }) => ({
                  color: isActive ? "#2c98f0" : "#000000b3",
                })}
              >
                Graphic Design
              </NavLink>
              <NavLink
                to="apps"
                className="text-decoration-none fs-6 ps-3"
                style={({ isActive }) => ({
                  color: isActive ? "#2c98f0" : "#000000b3",
                })}
              >
                Apps
              </NavLink>
              <NavLink
                to="software"
                className="text-decoration-none fs-6 ps-3"
                style={({ isActive }) => ({
                  color: isActive ? "#2c98f0" : "#000000b3",
                })}
              >
                Software
              </NavLink>
            </div>
            <Outlet/>
          </div>
        </div>
      </section>
    </>
  );
}
