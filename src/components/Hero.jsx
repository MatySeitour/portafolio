import images from "../assets/images.jpg"
import {Background} from "./Background"
import { Nav } from "./Nav";
import { Contact } from "./Contact";
import { useMedia } from "../CustomHooks/useMedia.js";
import "../styles.css"

function Hero(){

    const mobileResponsive = useMedia('(max-width: 600px)');

    return(
        <>
            {mobileResponsive !== false ?
                <header id='contact' className="relative flex flex-col justify-center items-center pb-9 pt-40 pl-5 pr-5">
                    <Background />
                    <Nav />
                    <div className="h-auto w-full">
                        <div className="h-full w-full flex flex-col justify-center items-center p-5 sm:flex-row">
                            <img className="w-[270px] h-[270px] animate-wiggle shadow-xl rounded-[400px] object-cover bg-teal-300 p-2 mb-10" src={images}></img>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h1 className="text-3xl font-bold text-black mb-6 w-auto animate-wiggle tracking-widest font-serif text-shadow">MATIAS AGUSTIN SEITOUR</h1>
                                <h2 className="mb-6 text-black text-2xl w-full font-bold animate-wiggle tracking-widest">FRONTEND DEVELOPER</h2>
                            </div>
                            <Contact />
                        </div>
                   </div>
                </header>

                :

                <header id='contact' className="relative flex flex-col justify-center items-center pb-9 pt-40 pl-5 pr-5">
                    <Background />
                    <Nav />
                    <div className="h-auto w-full">
                        <div className="h-full w-full flex flex-row justify-evenly items-center mb-10">
                            <img className="w-[300px] h-[300px] animate-wiggle shadow-xl rounded-[700px] object-cover" src={images}></img>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h1 className="text-3xl font-bold text-black mb-6 w-auto animate-wiggle tracking-widest font-serif text-shadow">MATIAS AGUSTIN SEITOUR</h1>
                                <h2 className="mb-6 text-black text-2xl w-full font-bold animate-wiggle tracking-widest">FRONTEND DEVELOPER</h2>
                            </div>
                        </div>
                        <Contact />
                    </div>
                </header>
            }
        </>

    )
}

export { Hero };