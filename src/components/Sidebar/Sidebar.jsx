import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar h-100 text-center">
        <div className="pt-5">
          <div className="imgPortfolio mb-3"></div>
          <h1>
            <NavLink className="text-decoration-none text-dark">
              Jackson Ford
            </NavLink>
          </h1>
          <p className="side-para">
            <span className="text-info menu-item">UI/UX/Designer</span> in <br />
            Philippines
          </p>
        </div>
        <div className="menu">
          <NavLink
            to="/home"
            className="text-decoration-none menu-item position-relative"
            style={({ isActive }) => ({
              color: isActive ? "#2c98f0" : "#000000b3",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-decoration-none menu-item position-relative"
            style={({ isActive }) => ({
              color: isActive ? "#2c98f0" : "#000000b3",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className="text-decoration-none menu-item position-relative"
            style={({ isActive }) => ({
              color: isActive ? "#2c98f0" : "#000000b3",
            })}
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className="text-decoration-none menu-item position-relative"
            style={({ isActive }) => ({
              color: isActive ? "#2c98f0" : "#000000b3",
            })}
          >
            Exprience
          </NavLink>
          <NavLink
            to="/work"
            className="text-decoration-none menu-item position-relative"
            style={({ isActive }) => ({
              color: isActive ? "#2c98f0" : "#000000b3",
            })}
          >
            Work
          </NavLink>
        </div>
      </div>
    </>
  );
}
