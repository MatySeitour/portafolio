import images from "../assets/images.jpg"
import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";
import { Nav } from "./Nav";
import { Contact } from "./Contact";
import "../styles.css"

function Hero(){

    const element = useRef(null);
    const screen = useIntersection(element)

    return(
        <header id='about_me' className="h-auto flex flex-col justify-center items-center mb-9 pt-16 pl-5 pr-5">
            <Nav />
            <div className="h-screen w-full flex flex-col justify-center items-center p-5 sm:flex-row">
                <img className="w-full h-80 animate-wiggle shadow-xl rounded-full object-cover mb-10 sm:w-2/5 sm:h-1/2" src={images}></img>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold text-black mb-6 w-auto animate-wiggle tracking-widest">MATIAS AGUSTIN SEITOUR</h1>
                    <h2 className="mb-6 text-black text-2xl w-72 font-bold animate-jump1 tracking-widest">FRONTEND DEVELOPER</h2>
                </div>
            </div>
            <div ref={element}>
                {screen && 
                    <>
                        <div className="flex w-full flex-col text-center p-5 shadow-2xl mb-9 rounded-xl animate-wiggle">
                            <p className="text-black mb-3 text-lg font-bold">Frontend developer focused on web page design, creation of clear codes and with the ability to meet the objectives and needs of customers.<br></br><br></br>I am looking for a position as a developer that allows me to demonstrate my skills and express my creativity in the company</p>
                        </div>
                        <Contact />
                        <div className="mt-10 w-full h-full flex items-center flex-col">
                            <a href="../public/cv.pdf" download className="btn text-white bg-black w-2/6">{` `} Descargar cv</a>
                        </div>
                    </>
                }
            </div>
        </header>
    )
}

export { Hero };