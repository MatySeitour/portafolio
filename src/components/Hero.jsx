import images from "../assets/images.jpg"
import { Nav } from "./Nav";
import { Contact } from "./Contact";
import { useState, useEffect } from "react";
import "../styles.css"

function Hero(){


    return(
        <header id='about_me' className="h-auto animate-wiggle flex flex-col justify-center items-center mb-9 pt-16">
            <Nav />
            <div className="h-5/6 w-full flex flex-col justify-around items-center p-5 sm:flex-row">
                <img className="rounded-tr-3xl w-full h-1/2 rounded-bl-3xl object-cover mb-10 sm:w-2/5 sm:h-1/2" src={images}></img>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold text-white mb-6 w-auto animate-wiggle tracking-widest">MATIAS SEITOUR</h1>
                    <h2 className="mb-6 text-white text-2xl w-72 font-semibold">FRONTEND DEVELOPER</h2>
                    <p className="break-all text-white mb-3 font-bold">Frontend developer focused on web page design, creation of clear codes and with the ability to meet the objectives and needs of customers.<br></br><br></br>I am looking for a position as a developer that allows me to demonstrate my skills and express my creativity in the company</p>
                </div>
            </div>
            <Contact />
            <div className="mt-10 w-full h-full flex items-center flex-col">
                <button onClick={() => window.open("../cv.pdf")} className="btn text-white bg-black w-2/6">Descargar cv</button>
            </div>
        </header>
    )
}

export { Hero };