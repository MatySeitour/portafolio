function Skill({skillName, skillImgUrl}){
    return(
        <li className="w-36 h-auto shadow-xl rounded-2xl flex flex-col justify-center items-center mb-5">
            <div>
                <img className="animate-size" src={skillImgUrl}/>
            </div>
            <h5 className="tracking-wider text-black font-extrabold">{skillName}</h5>
        </li>
    )
}

export {Skill};