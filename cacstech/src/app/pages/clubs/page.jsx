'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";


import "./clubs.css"

import "../../../app/globals.css"

function Cards(props) {

    var cardHover = useRef(null)
     

 
    useEffect( ()=>{

        var i = document.querySelectorAll(".card-unit");
    
        gsap.timeline().fromTo(i, {y:+10, opacity:0}, {y:0, opacity:1, duration:1, stagger: 0.2, ease:"circ"})
 

        i.forEach((element)=>{
            element.addEventListener('mouseenter', (e)=>{

                console.log(e.target)
                gsap.fromTo(e.target.querySelector(".carousel-hover") , {opacity:0,   display:"none"}, {display:"flex", opacity:1})
            })  


            element.addEventListener('mouseleave', (e)=>{

                console.log(e.target)
                gsap.fromTo(e.target.querySelector(".carousel-hover") , {opacity:1,   }, {opacity:0, display:"none"})
            })
            
        })

        
    }, [] )




    return (
        <div ref={cardHover} className="card-unit" >
            <img src={props.imgSrc} alt="not found" />

            <div className="carousel-detail" >

                <h2  > {props.name} </h2>
                

                <span  > <a href="">instagram</a></span>

            </div>

            <div className="carousel-hover">
                    <p> {props.description} </p>

            </div>


        </div>
    )
}


export default function Clubs() {

    var desc1 = "You tell me about shinchan Copilot Shinchan, also known as Crayon Shin-chan, is a popular Japanese manga and anime series created by Yoshito Usui1. The series follows the adventures of a five-year-old boy named Shin-chan "

    return (
        <section  >
            <div className="sec-wrap">
                <h1 className="head1" >Clubs</h1>



                <div className="clubs-cards">


                    {/* <img className="background" src="https://i.pinimg.com/564x/44/78/72/4478722447b6e94bc4c4d2c911ff8049.jpg" alt="" srcset="" /> */}
                    <img className="background" src="/assets/s1.svg " alt="" srcset="" />
                    

                    <Cards name="Neon Club" description={desc1} imgSrc="https://i.pinimg.com/564x/42/eb/25/42eb253592a9498da0f069109f6f26aa.jpg" />
                    <Cards name="Neon Club" description={desc1} imgSrc="https://i.pinimg.com/564x/42/eb/25/42eb253592a9498da0f069109f6f26aa.jpg" />

                    <Cards name="Neon Club" description={desc1} imgSrc="https://i.pinimg.com/564x/42/eb/25/42eb253592a9498da0f069109f6f26aa.jpg" />
                    <Cards name="Neon Club" description={desc1} imgSrc="https://i.pinimg.com/564x/42/eb/25/42eb253592a9498da0f069109f6f26aa.jpg" />

                    <Cards name="Neon Club" description={desc1} imgSrc="https://i.pinimg.com/564x/42/eb/25/42eb253592a9498da0f069109f6f26aa.jpg" />




                </div>

            </div>

        </section>
    );
}


