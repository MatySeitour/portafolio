import { Skill } from "./Skill"
import useIntersection from "./CustomHooks/useIntersection";
import { useRef } from "react";
import imageHtml from "../src/assets/icons8-html-5-96.png"
import imageCss from "../src/assets/icons8-css3-96.png"
import imageJS from "../src/assets/icons8-javascript-96.png"
import imageReact from "../src/assets/icons8-reaccionar-80.png"
import imageNode from "../src/assets/icons8-node-js-96.png"
import imageExpress from "../src/assets/icons8-express-js-100.png"
import imageSQL from "../src/assets/icons8-logo-de-mysql-96.png"
import imageTailwind from "../src/assets/icons8-tailwind-css-96.png"

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

    return[
        <div key={35}>
            <section ref={ref} className="w-full h-full mb-10">

                     <div className="w-full">
                        <svg className="-translate-y-3 fill-black rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fillOpacity="1" d="M0,0L1440,192L1440,320L0,320Z"></path>
                        </svg>
                    </div>

                    {screen && 
                    <>
                        <div id="skills" className="w-full h-screen flex justify-center pt-24 flex-col items-center animate-wiggle">
                            <h3 className="text-3xl tracking-widest font-bold text-black">MY SKILLS</h3>
                            <ul className="w-full h-screen flex justify-between flex-wrap py-8 px-6">
                                {skillsData.map((skill) => (
                                    <Skill 
                                        key={skill.id}
                                        skillName={skill.name}
                                        skillImgUrl={skill.url_image}
                                    />
                                ))}
                            </ul>
                        </div>
                    </>
                }
                   
            </section>
        </div>
    ]
}

export {Skills}