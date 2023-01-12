import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";
import { Nav } from "./Nav";
import { Contact } from "./Contact";
import "../styles.css"

function About(){

    const element = useRef(null);
    const screen = useIntersection(element)


    return(

        <div className="pr-5 pl-5 pb-16 pt-10 bg-white" ref={element}>
        {screen && 
            <>
                <h3 className="text-3xl animate-wiggle tracking-widest font-bold text-shadow text-black mb-6">ABOUT ME</h3>
                <div className="flex w-full flex-col text-start mb-9 rounded-xl animate-wiggle">
                    <p className="text-black mb-3 text-xl font-extrabold leading-8"><b className="text-[#10c0cd]">Hi, i am Matias Seitour </b>Frontend developer focused on web page design, creation of clear codes and with the ability to meet the objectives and needs of customers.<br></br><br></br>I am looking for a position as a developer that allows me to demonstrate my skills and express my creativity in the company</p>
                </div>
                <div className="mt-10 w-full h-full flex items-center flex-col">
                    <a href="../public/cv.pdf" download className="btn text-white bg-black w-2/6 p-2 border-2 border-[#10c0cd]">{` `} Descargar cv</a>
                </div>
            </>
        }
    </div>
    )
}

export {About}