import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";
import {useMedia} from "../CustomHooks/useMedia"
import "../styles.css"

function About(){
    const mobileResponsive = useMedia('(max-width: 600px)');

    const element = useRef(null);
    const screen = useIntersection(element)


    return(
        <>
            {mobileResponsive ? 
                <div id="about" className="min-h-[100vh] pr-5 pl-5 pb-16 pt-[60px] bg-white" ref={element}>
                    {screen && 
                        <>
                            <h3 className="text-3xl animate-wiggle tracking-widest text-center font-bold text-shadow text-black mb-6">ABOUT ME</h3>
                            <div className="flex w-full flex-col text-center mb-9 rounded-xl animate-wiggle">
                                <p className="text-black mb-3 text-xl font-extrabold leading-10"><b className="text-[#10c0cd]">Hi, i am Matias Seitour, </b> frontend developer based in Buenos Aires, Argentina. <b className="text-[#10c0cd]">Technology lover</b>, focused on web page design, creation of clear codes and with the ability to meet the objectives and needs of customers. I am looking for a position as a developer that allows me to demonstrate my skills and express my creativity in the company.<br/>
                                    Some of my hobbies are listening to music, watching courses on all kinds of things (mostly about programming), I am a lover of soccer and videogames.
                                </p>
                            </div>
                            <div className="mt-10 w-full h-full flex items-center flex-col">
                                <a href="../public/cv.pdf" download className="btn text-white bg-black w-2/6 p-2 border-2 border-[#10c0cd]">{` `} Descargar cv</a>
                            </div>
                        </>
                    }
                </div>

                :

                <div id="about" className="min-h-[100vh] pr-5 pl-5 pb-16 pt-[60px] bg-white" ref={element}>
                    {screen && 
                        <>
                            <h3 className="text-3xl animate-wiggle tracking-widest font-bold text-center text-shadow text-black mb-6">ABOUT ME</h3>
                            <div className="flex w-full flex-col text-center mb-9 p-6 rounded-xl animate-wiggle">
                                <p className="text-black mb-3 text-lg font-extrabold leading-10"><b className="text-[#10c0cd]">Hi, i am Matias Seitour, </b> frontend developer based in Buenos Aires, Argentina. <b className="text-[#10c0cd]">Technology lover</b>, focused on web page design, creation of clear codes and with the ability to meet the objectives and needs of customers. I am looking for a position as a developer that allows me to demonstrate my skills and express my creativity in the company.<br/>
                                    Some of my hobbies are listening to music, watching courses on all kinds of things (mostly about programming), I am a lover of soccer and videogames.
                                </p>
                            </div>
                            <div className="w-full h-auto flex justify-center overflow-hidden">
                                <button className="relative btn h-full flex items-center justify-center flex-col button-container text-white bg-black w-[200px] p-2 border-2 border-[#10c0cd] hover:bg-[#10c0cd] hover:border-[#10c0cd]">
                                    <a href="../public/cv.pdf" download className="absolute top-[50%] translate-y-[-50%] transition-all">{` `} Descargar cv</a>
                                    <span>DOWNLOAD</span>
                                </button>  
                            </div>
                        </>
                    }
                </div>
            }
        
        </>
    )
}

export {About}