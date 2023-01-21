import { useEffect, useState } from "react"
import {useMedia} from "../CustomHooks/useMedia"
import "../styles.css"


function Nav(){
    const [navState, setNavState] = useState(false);

    const navItems = [
        {
            name: "CONTACT",
            id: 1,
            href_scroll: "contact",
        },
        {
            name: "ABOUT ME",
            id: 2,
            href_scroll: "about",
        },
        {
            name: "PROJECTS",
            id: 3,
            href_scroll: "projects",
        },
        {
            name: "SKILLS",
            id: 4,
            href_scroll: "skills",
        },
    ]

    useEffect(() => {
        if(navState){
            document.body.classList.add("scroll")
        }
        else if(!navState){
            document.body.classList.remove("scroll")
        }
    }, [navState])

    const mobileResponsive = useMedia('(max-width: 600px)');

    return(
        <div>
            {mobileResponsive ?
                <nav className="fixed top-0 left-0 w-full z-[40] max-h-[46px] bg-slate-800">
                    <div className="flex relative z-[40] items-center top-0 w-full">
                        <button onClick={() => setNavState(prevState => !prevState)} className="w-20 h-16 relative z-[30] transition-all">
                            <div className={!navState ? "h-[3px] absolute left-3 bottom-11 w-[26px] rounded-full bg-white transition-all" : "h-[3px] absolute left-3 bottom-8 w-[26px] rounded-full bg-white hamburguer-top"}></div>
                            <div className={!navState ? "h-[3px] absolute left-3 bottom-9 w-[26px] rounded-full bg-white transition-all" : "h-[3px] absolute left-3 bottom-6 w-[26px] rounded-full bg-white hamburguer-mid"}></div>
                            <div className={!navState ? "h-[3px] absolute left-3 bottom-7 w-[26px] rounded-full bg-white transition-all" : "h-[3px] absolute left-3 bottom-4 w-[26px] rounded-full bg-white hamburguer-bottom"}></div>
                        </button>
                    </div>
                    <div className={!navState ? "bg-black h-screen w-2/3 -translate-x-[4000px] transition-[transform]" : "pl-3 pr-3 fixed left-0 top-0 bg-black h-full w-2/3 transition-all"}>
                        <ul className="w-full h-full flex flex-col justify-center items-center">
                            {navItems.map((item) => (
                                <li key={item.id} className="w-full flex p-2 justify-center text-3xl text-white font-bold border-b-2 text-shadow border-t-2 mt-6">
                                    <a onClick={() => setNavState(false)} href={`#${item.href_scroll}`}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                :
                
                <nav className="fixed flex flex-row justify-center items-center top-0 left-0 w-full z-[40] h-[46px] bg-slate-800">
                    <ul className="w-full h-full flex justify-end items-end">
                        {navItems.map((item) => (
                            <li className="h-full min-w-[80px] flex flex-col justify-center items-center text-white font-bold tracking-wider cursor-pointer hover:bg-slate-700 transition-all"><a className="w-full h-full p-6 flex justify-center items-center" href={`#${item.href_scroll}`}>{item.name}</a></li>
                        ))}
                    </ul>
                </nav>
            }
            
        </div>
    )
}

export {Nav}