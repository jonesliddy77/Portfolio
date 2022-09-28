import React, { useEffect } from "react";
import { gsap, TimelineMax, Expo } from "gsap";

// STYLE //
import "./styles/home.css";

// COMPONENTS //
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import clip from '../Images/herovid3.mov';

// GLOBAL VARS //
var t1 = new TimelineMax({ paused: true });

export default function Home() {
    useEffect(() => { }, []);
    return (
        <div className="pages">
            <Nav />
            {/* <-- Hero Start --> */}
            <div id="heroContainer">
                {/* <div id="heroVideoContainer">
                        <video id="heroVideo" autoPlay loop muted>
                            <source src={clip} type='video/mp4' />
                        </video>
                </div> */}
                <div className="letter is-inview" data-scroll="">
                    <div className="letterWrapper">
                        <svg width="405" height="443" viewBox="0 0 405 443">
                            <g transform="translate(-531 -750)">
                                <text transform="translate(810 1106)" fill="#fff" font-size="400" font-weight="700" letter-spacing="1em"><tspan x="-188.77" y="0">J</tspan></text>
                                {/* <g transform="translate(818 1088)">
                                    <circle cx="9" cy="9" r="9" stroke="none"></circle>
                                </g> */}
                            </g>
                        </svg>
                    </div>
                </div>
                <div id="heroHeader">
                    {/* <h1>Jones Liddy</h1>
          <h1>Creative Fullstack</h1>
          <h1>Web Developer</h1> */}
                </div>

                {/* <div id="heroAnimation">
                       <div className="cube purple">
                    <div className="cube__inner">
                        <div className="cube__side front"></div>
                        <div className="cube__side back"></div>
                        <div className="cube__side top"></div>
                        <div className="cube__side bottom"></div>
                        <div className="cube__side left"></div>
                        <div className="cube__side right"></div>
                    </div>
                </div>
                </div> */}
            </div>
            {/* <-- Hero End --> */}
            <Footer />
        </div>
    );
}
