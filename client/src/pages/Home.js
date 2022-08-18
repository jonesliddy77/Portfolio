import React, { useEffect } from 'react';
import { gsap, TimelineMax, Expo } from "gsap";

// STYLE //
import "./styles/home.css"

// COMPONENTS //
import Nav from "../components/Nav"
import Footer from "../components/Footer"


// GLOBAL VARS //
var t1 = new TimelineMax({ paused: true });

export default function Home() {

    useEffect(() => {


    }, [])
    return (
        <>
            <Nav />
            {/* <-- Hero Start --> */}
            <div id="heroContainer">
                <div id="heroHeader">
                    <h1>Jones Liddy</h1>
                    <h1>Creative Fullstack</h1>
                    <h1>Web Developer</h1>
                </div>
                <div id="heroAnimation">
                    <img />
                </div>
            </div>
            {/* <-- Hero End --> */}
            <Footer />

        </>
    );
}