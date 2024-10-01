import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto my-6">
      <Marquee pauseOnHover={true}>
        <Link className="roboto text-2xl font-bold hover:text-red-700" to={"/"}>
          Welcome to Star Land Line. Here, You’ll Enjoy Your Gateway to
          Unforgettable Experiences!
        </Link>
      </Marquee>
    </div>
  );
};

export default Nav;
