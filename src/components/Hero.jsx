import images from "../assets/images.jpg"
import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";
import { Nav } from "./Nav";
import { Contact } from "./Contact";
import "../styles.css"
import {About} from "./About"

function Hero(){

    return(
        <header id='about_me' className="h-auto flex flex-col justify-center items-center mb-9 pt-16 pl-5 pr-5">
            <Nav />
            <div className="h-screen w-full flex flex-col justify-center items-center p-5 sm:flex-row">
                <img className="w-full h-80 animate-wiggle shadow-xl rounded-full object-cover bg-teal-300 p-2 mb-10" src={images}></img>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold text-black mb-6 w-auto animate-wiggle tracking-widest font-serif text-shadow">MATIAS AGUSTIN SEITOUR</h1>
                    <h2 className="mb-6 text-black text-2xl w-full font-bold animate-wiggle tracking-widest">FRONTEND DEVELOPER</h2>
                </div>
            <Contact />
            </div>
        </header>
    )
}

export { Hero };