import React from 'react';
import Marquee from "react-fast-marquee";

const Nav = () => {
    return (
        <div>
            <Marquee pauseOnHover={true}>
            <h1 className="text-3xl">Welcom to our Star Land Line!</h1>
            </Marquee>
        </div>
    );
};

export default Nav;