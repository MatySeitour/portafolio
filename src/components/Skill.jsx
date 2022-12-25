function Skill({skillName, skillImgUrl}){
    return(
        <li className="w-36 h-auto flex flex-col justify-center items-center mb-5">
            <div>
                <img src={skillImgUrl}/>
            </div>
            <h5 className="tracking-wider text-white font-extrabold">{skillName}</h5>
        </li>
    )
}

export {Skill};