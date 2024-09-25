import React from 'react';
import { FaSearchPlus } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <nav>
                {/* <!-- LEFT SIDE :START --> */}
                <div className="nav-links">
                    <a href="index.html">Home</a>
                    <a href="#band">Band</a>
                    <a href="#tour">Tour</a>
                    <a href="#contact">Contact</a>
                    <a href="contact.html">More</a>
                </div>
                {/* <!-- LEFT SIDE :END --> */}

                {/* <!-- RIGHT SIDE :START --> */}
                <div>
                    <i className="fa fa-search"></i>
                    <FaSearchPlus size={20} />
                </div>
                {/* <!-- RIGHT SIDE :END --> */}
            </nav>
        </header>
    )
}
