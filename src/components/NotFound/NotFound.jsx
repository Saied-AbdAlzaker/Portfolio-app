import React from "react";
import notFound from "../../assets/images/notFound.jpg"

export default function NotFound() {
  return (
    <>
      <div className="vh-100">
        <img src={notFound} alt="notFound" className="w-100 h-100" />
      </div>
    </>
  );
}
