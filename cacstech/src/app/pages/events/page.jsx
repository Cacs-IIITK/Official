"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useLayoutEffect } from "react";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./events.css";

import "../../../app/globals.css";




function Carousal() {






    return (
        <div className="carousal" >

            <div className="carousal-box">

                <div className="carousal-wrap" >
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>
                    <div className="carousal-item"><img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="" /></div>



                </div>


            </div>
            <div className="carousal-btn" >
                <img id="car-left" src="/assets/c1.svg" alt="" />

                <img id="car-right" src="/assets/c1.svg" alt="" />
            </div>

        </div>
    )
}








export default function Events() {






    return (
        <div>
            <section>
                <div className="sec-wrap">
                    <h1 className="head1">Events</h1>

                <Carousel className="carousel-box" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        />
                    
                    
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        />
                    
                    
                    </Carousel.Item>
                    
                </Carousel>
                </div>
            </section>





        </div>
    );
}
