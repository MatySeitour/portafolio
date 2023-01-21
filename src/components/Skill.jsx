import { useMedia } from "../CustomHooks/useMedia";

function Skill({skillName, skillImgUrl, skillId}){
    const mobileResponsive = useMedia('(max-width: 600px)');


    return(
        <>
            {mobileResponsive ?
                <li className={skillId % 2 == 0 ? `animate-skill_left` : `animate-skill_right`}>
                    <div className="w-36 min-h-[158px] shadow-xl bg-white rounded-2xl flex flex-col justify-center items-center mb-5">
                        <div>
                            <img src={skillImgUrl}/>
                        </div>
                        <h5 className="tracking-wider text-black font-extrabold">{skillName}</h5>
                    </div>
                </li>

                :
                
                <li className={skillId % 2 == 0 ? `animate-skill_left flex justify-center items-center` : `animate-skill_right flex justify-center items-center`}>
                    <div className="w-40 hover:scale-105 transition-all min-h-[178px] shadow-xl bg-white rounded-2xl flex flex-col justify-center items-center mb-5">
                        <div>
                            <img src={skillImgUrl}/>
                        </div>
                        <h5 className="tracking-wider text-black font-extrabold">{skillName}</h5>
                    </div>
                </li>   
            }
        </>
    )
}

export {Skill};