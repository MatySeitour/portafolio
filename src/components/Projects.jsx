import { Project } from "./Project";
import imagePeliwiki from "../assets/peliwiki.png"
import imageBatatabit from "../assets/batatabit.png"
import imageRappi from "../assets/rappi.png"

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
    ]


    return(
        <section id="project" className="w-screen h-full">
            <div className="w-full h-full" key={84}>
                <svg className="w-full translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,0L1440,192L1440,320L0,320Z"></path></svg>
                <div className="w-full h-auto bg-black flex flex-wrap items-center justify-center">
                    <div className="flex justify-center w-full text-center text-white animate-wiggle">
                        <h2 className="text-3xl tracking-widest font-medium">PROJECTS</h2>
                    </div>
                    <div>
                        {projects.map((project) => (
                            <div key={project.id}>
                                    <Project 
                                        projectId={project.id}
                                        projectBackground={project.backgroundImg}
                                        projectName={project.name}
                                        projectDescription={project.description}
                                        projectVercelLink={project.vercelLink}
                                        projectGitLink={project.gitLink}
                                    /> 
                            </div>                                                                                    
                        ))}
                    </div>  
                </div> 
            </div>   
        </section>
    )
}

export {Projects}
