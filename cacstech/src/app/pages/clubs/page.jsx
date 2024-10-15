

import React, { useState, useEffect } from "react";


function Cards(props){

    return(
        <div>
            <Image> ${props.img} </Image>
            <h2  > ${props.name} </h2>
            <p> ${props.description} </p>

        </div>
    )
}


export default function Clubs(){


    return(
        <div>

            <h1>Clubs in CACS</h1>
            

        </div>
    );
}


