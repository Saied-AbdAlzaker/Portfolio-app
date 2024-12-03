import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar"

export default function MainLayout() {
  return (
    <>
      <div className="row">
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>
        <div className="col-md-10 p-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}
