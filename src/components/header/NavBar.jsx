import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full mx-auto">
      <nav id="navbar" className="w-full">
        <div className="w-full md:p-6 p-2 flex flex-col md:flex-row items-center content-center justify-evenly   md:justify-between md:flex-nowrap text-lg text-black">
          <div className="text-xl flex flex-1 flex-row w-full  md:justify-evenly justify-evenly items-center">
            <Link to={"/"} title="Home" className="md:p-4 p-2">
              About Us
            </Link>
            <Link
              href={"/#media"}
              title="View our photos and videos"
              className="md:p-4 p-2"
            >
              Links
            </Link>
            
            <Link
              to={"/bookings"}
              title="Book a show with us"
              className=" md:p-4 p-2"
            >
              F1 Editorial
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
