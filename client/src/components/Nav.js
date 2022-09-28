import React, { useEffect } from 'react';
import { gsap, TimelineMax, Expo } from "gsap";

// STYLE //
import "./nav.css"

// COMPONENTS //
import NavLinks from './NavLinks';
// IMAGES
import img1 from "../Images/menu-img-one.jpg"
import img2 from "../Images/menu-img-two.jpg"
import img3 from "../Images/menu-img-three.jpg"
import img4 from "../Images/menu-img-four.jpg"
import iconLogo from "../Images/iconLogo.png"



var t1 = new TimelineMax({ paused: true });

export default function Nav() {

    t1.reverse();
    function doThis() {
        t1.reversed(!t1.reversed());
    };
    function doThis2() {
        t1.reversed(!t1.reversed());
    
    };

    useEffect(() => {
        t1.to(".nav-container", 1, {
            left: 0,
            ease: Expo.easeInOut,
        });
        t1.staggerFrom(
            ".menu > div",
            0.8,
            { y: 100, opacity: 0, ease: Expo.easeOut },
            "0.1",
            "-=0.4"
        );
        t1.staggerFrom(
            ".socials",
            0.8,
            { y: 100, opacity: 0, ease: Expo.easeOut },
            "0.4",
            "-=0.6"
        );

    }, [])
    return (
        <>
            <div className="menu-open" onClick={() => doThis()}></div>
            <div id="navHeader">Jones Liddy</div>
            <img id="iconLogo" src={iconLogo}/>
            <div className="nav-container">
                <div className="menu-close" onClick={() => doThis2()}></div>
                {/* <div className="socials">
				<span>facebook</span>
				<span>instagram</span>
			</div> */}
                <nav className="menu">
                    <NavLinks linkHeader="Home" linkImg={img1} />
                    <NavLinks linkHeader="Showcase" linkImg={img2} />
                    <NavLinks linkHeader="About" linkImg={img3} />
                    <NavLinks linkHeader="Contact" linkImg={img4} />

                </nav>
            </div>

        </>
    );
}