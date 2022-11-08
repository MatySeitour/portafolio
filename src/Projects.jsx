import { useRef } from "react";
import { useState } from "react"
import useIntersection from "./CustomHooks/useIntersection";

function Projects(){
    const projects = [
        {
            id: 1,
            name: "PeliWiki",
            description: "this is a web app about movie made with react and axios",
            backgroundImg: "../public/peliwiki.png",
            gitLink: "https://github.com/MatySeitour/Peliwiki",
            vercelLink: "https://peliwiki.vercel.app/",
        },
        {
            id: 2,
            name: "Batatabit",
            description: "this is a landing page about the price of some cryptos. made in vanilla javascript",
            backgroundImg: "../public/batatabit.png",
            gitLink: "https://github.com/MatySeitour/batatabit.github.io",
            vercelLink: "https://batatabit-github-io.vercel.app/",
        },
        {
            id: 3,
            name: "Rappi Cart",
            description: "This is a web app about an e-commerce where you can filter and order products, as well as add them to a cart. (This is a challenge that they ask to work at Rappi)",
            backgroundImg: "../public/rappi.png",
            gitLink: "https://github.com/MatySeitour/rappi-challenge",
            vercelLink: "https://rappi-challenge.vercel.app/",
        },
        {
            id: 4,
            name: "CalculaThor",
            description: "this is the best asgard calculator",
            backgroundImg: "a",
            gitLink: "https://github.com/MatySeitour/calculathor.github.io",
            vercelLink: "https://peliwiki.vercel.app/",
        },
    ]

    const ref = useRef(null);
    const screen = useIntersection(ref)
    console.log(screen)

    return(
        <section ref={ref} className="w-full h-full">
            {
                screen && 
                    <div className="w-full h-full" key={84}>
                        <svg className="w-full translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,0L1440,192L1440,320L0,320Z"></path></svg>
                        <div className="w-full h-auto bg-black flex flex-wrap items-center justify-center">
                            <div key={99} className="flex justify-center w-full text-center text-white animate-wiggle">
                                <h2 className="text-3xl tracking-widest font-medium">PROJECTS</h2>
                            </div>
                            {projects.map((project) => (
                                <div className="animate-wiggle2" key={project.id}>
                                    <div className="card w-96 shadow-xl image-full">
                                        <figure><img className="rounded-2xl" src={project.backgroundImg} alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-white">{project.name}</h2>
                                            <p className="text-white mb-1">{project.description}</p>
                                            <div className="card-actions justify-end">
                                                <a href={project.gitLink} target="_blank" className="btn btn-primary p-2">
                                                    <svg fill="white" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                                </a>
                                                <a href={project.vercelLink} target="_blank" className="btn btn-primary p-2">
                                                    <svg fill="white" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>
                            ))}
                        </div> 
                    </div>   
            }
        </section>
    )
}

export {Projects}
