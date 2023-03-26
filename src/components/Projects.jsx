import { Project } from "./Project";
import imagePeliwiki from "../assets/peliwiki.png"
import imageBatatabit from "../assets/batatabit.png"
import imageRappi from "../assets/rappi.png"
import imageTasker from "../assets/tasker.png"
import {useMedia} from "../CustomHooks/useMedia"

function Projects(){
    const projects = [
        {
            id: 1,
            name: "PeliWiki",
            description: "this is a web app about movie made with react and axios",
            backgroundImg: imagePeliwiki,
            gitLink: "https://github.com/MatySeitour/Peliwiki",
            vercelLink: "https://peliwiki.vercel.app/",
        },
        {
            id: 2,
            name: "Batatabit",
            description: "this is a landing page about the price of some cryptos. made in vanilla javascript",
            backgroundImg: imageBatatabit,
            gitLink: "https://github.com/MatySeitour/batatabit.github.io",
            vercelLink: "https://batatabit-github-io.vercel.app/",
        },
        {
            id: 3,
            name: "Rappi Cart",
            description: "This is a web app about an e-commerce where you can filter and order products, as well as add them to a cart. (This is a challenge that they ask to work at Rappi)",
            backgroundImg: imageRappi,
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
        {
            id: 5,
            name: "Tasker",
            description: "This is a basic task CRUD web application using the MERN stack (MySql, Express, React, Node). for authentication and authorization I used passport-js and jwt, and to manage cookies I used cookie-parser.",
            backgroundImg: imageTasker,
            gitLink: "https://github.com/MatySeitour/tasker-frontend",
            vercelLink: "tasker-frontend.vercel.app",
        },
    ]

    const mobileResponsive = useMedia('(max-width: 600px)');

    return(
        <>
            {mobileResponsive ? 
                <section id="projects" className="w-full min-h-[100vh] pt-[60px]">
                    <div className="w-full h-full pr-4 pl-4" key={84}>
                        <div className="pt-6 w-full h-auto flex flex-wrap items-center justify-center">
                            <div className="flex justify-center w-full text-center text-black animate-wiggle">
                                <h2 className="text-3xl tracking-widest font-bold text-shadow">PROJECTS</h2>
                            </div>
                            <ul>
                                {projects.map((project) => (
                                    <li key={project.id}>
                                        <Project 
                                            projectId={project.id}
                                            projectBackground={project.backgroundImg}
                                            projectName={project.name}
                                            projectDescription={project.description}
                                            projectVercelLink={project.vercelLink}
                                            projectGitLink={project.gitLink}
                                        /> 
                                    </li>                                                                                    
                                ))}
                            </ul>  
                        </div> 
                    </div>   
                </section>
                
                :

                <section id="projects" className="w-full min-h-[100vh] pt-[60px]">
                    <div className="w-full h-full pr-4 pl-4" key={84}>
                        <div className="pt-6 w-full h-auto flex flex-col items-center justify-center">
                            <div className="flex justify-center w-full text-center text-black animate-wiggle">
                                <h2 className="text-3xl tracking-widest font-bold text-shadow mb-10">PROJECTS</h2>
                            </div>
                            <ul className="h-full w-full flex flex-wrap justify-evenly">
                                {projects.map((project) => (
                                    <li key={project.id}>
                                        <Project 
                                            projectId={project.id}
                                            projectBackground={project.backgroundImg}
                                            projectName={project.name}
                                            projectDescription={project.description}
                                            projectVercelLink={project.vercelLink}
                                            projectGitLink={project.gitLink}
                                        /> 
                                    </li>                                                                                    
                                ))}
                            </ul>  
                        </div> 
                    </div>   
                </section>
            }
        </>
    )
}

export {Projects}
