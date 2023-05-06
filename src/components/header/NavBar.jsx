import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar" className="place-self-center w-full bg-wh self-end row row-span-1 flex flex-row justify-between text-xl">
      <Link to={"/"} title="Home" className="">
        About Us
      </Link>
      <Link
        href={"/#media"}
        title="View our photos and videos"
        className=""
      >
        Links
      </Link>

      <Link
        to={"/bookings"}
        title="Book a show with us"
        className=" "
      >
        F1 Editorial
      </Link>
    </nav>
  );
}

export default NavBar;
