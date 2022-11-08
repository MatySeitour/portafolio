import { Skill } from "./Skill"
import useIntersection from "./CustomHooks/useIntersection";
import { useRef } from "react";

function Skills(){
    const skillsData = [
        {
            id: 1,
            name: "HTML",
            url_image: "../public/icons8-html-5-96.png"
        },
        {
            id: 2,
            name: "CSS",
            url_image: "../public/icons8-css3-96.png"
        },
        {
            id: 3,
            name: "JAVASCRIPT",
            url_image: "../public/icons8-javascript-96.png"
        },
        {
            id: 4,
            name: "REACT",
            url_image: "../public/icons8-reaccionar-80.png"
        },
        {
            id: 5,
            name: "NODEJS",
            url_image: "../public/icons8-node-js-96.png"
        },
        {
            id: 6,
            name: "EXPRESSJS",
            url_image: "../public/icons8-express-js-100.png"
        }
    ]

    const ref = useRef(null);
    const screen = useIntersection(ref)

    return[
        <div key={3}>
            <section ref={ref} className="w-full">
                {screen && 
                <>
                     <div className="w-full animation-wiggle">
                        <svg className="-translate-y-3 fill-black rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fillOpacity="1" d="M0,0L1440,192L1440,320L0,320Z"></path>
                        </svg>
                    </div>

                    <div className="w-full h-screen flex justify-center pt-24 flex-col items-center">
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