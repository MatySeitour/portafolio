import { Skill } from "./Skill";
import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";
import imageHtml from "../assets/icons8-html-5-96.png"
import imageCss from "../assets/icons8-css3-96.png"
import imageJS from "../assets/icons8-javascript-96.png"
import imageReact from "../assets/icons8-reaccionar-80.png"
import imageNode from "../assets/icons8-node-js-96.png"
import imageExpress from "../assets/icons8-express-js-100.png"
import imageSQL from "../assets/icons8-logo-de-mysql-96.png"
import imageTailwind from "../assets/icons8-tailwind-css-96.png"
import { useMedia } from "../CustomHooks/useMedia";

function Skills(){
    const skillsData = [
        {
            id: 1,
            name: "HTML",
            url_image: imageHtml
        },
        {
            id: 2,
            name: "CSS",
            url_image: imageCss
        },
        {
            id: 3,
            name: "JAVASCRIPT",
            url_image: imageJS
        },
        {
            id: 4,
            name: "REACT",
            url_image: imageReact
        },
        {
            id: 5,
            name: "NODEJS",
            url_image: imageNode
        },
        {
            id: 6,
            name: "EXPRESSJS",
            url_image: imageExpress
        },
        {
            id: 7,
            name: "MYSQL",
            url_image: imageSQL
        },
        {
            id: 8,
            name: "TAILWIND",
            url_image: imageTailwind
        },
    ]

    const ref = useRef(null);
    const screen = useIntersection(ref)
    const mobileResponsive = useMedia('(max-width: 600px)');

    return[
        <div className="min-h-[100vh flex" key={35}>
            {mobileResponsive ?
                <section ref={ref} id="skills" className="w-full h-full overflow-hidden bg-slate-200">
                    {screen && 
                        <>
                            <div className="w-full h-full flex justify-center pt-24 flex-col items-center">
                                <h3 className="text-3xl tracking-widest font-bold text-shadow text-black animate-wiggle">MY SKILLS</h3>
                                <ul className="w-full h-full flex justify-between flex-wrap py-8 px-6">
                                    {skillsData.map((skill) => (
                                        <Skill 
                                        key={skill.id}
                                        skillId={skill.id}
                                        skillName={skill.name}
                                        skillImgUrl={skill.url_image}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </>
                    }
            
                </section>
                
                :

                <section ref={ref} id="skills" className="w-full h-full overflow-hidden bg-slate-200">
                    {screen && 
                        <>
                            <div className="w-full h-full flex justify-center pt-20 flex-col items-center">
                                <h3 className="text-3xl tracking-widest font-bold text-shadow mb-4 text-black animate-wiggle">MY SKILLS</h3>
                                <ul className="w-full min-w-[100%] h-full grid grid-cols-4 gap-4 items-center justify-center p-4">
                                    {skillsData.map((skill) => (
                                        <Skill 
                                        key={skill.id}
                                        skillId={skill.id}
                                        skillName={skill.name}
                                        skillImgUrl={skill.url_image}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </>
                    }
    
                </section>
            }
        </div>
    ]
}

export {Skills}