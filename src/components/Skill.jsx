function Skill({skillName, skillImgUrl, skillId}){
    return(
        <li className={skillId % 2 == 0 ? `animate-skill_left` : `animate-skill_right`}>
            <div className="w-36 min-h-[158px] shadow-xl rounded-2xl flex flex-col justify-center items-center mb-5">
                    <div>
                        <img src={skillImgUrl}/>
                    </div>
                    <h5 className="tracking-wider text-black font-extrabold">{skillName}</h5>
            </div>
        </li>
    )
}

export {Skill};