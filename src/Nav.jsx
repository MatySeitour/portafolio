import { useState } from "react"
import "./styles.css"


function Nav(){

    const [state, setActive] = useState({
        home: "active",
        projects: "",
        skills: "",
    });

    function handleActiveProjects(){
        setActive({
            ...state,
            home: "",
            projects: "active",
            skills: "",
        })
    }
    function handleActiveHome(){
        setActive({
            ...state,
            home: "active",
            projects: "",
            skills: "",
        })
    }
    function handleActiveSkills(){
        setActive({
            ...state,
            home: "",
            projects: "",
            skills: "active",
        })
    }

    return(
    <div className="btm-nav z-50 w-3/4 left-2/4 rounded-2xl shadow-xl -translate-x-1/2 bottom-4 bg-slate-50 active:border-t-none">
        <button onClick={handleActiveHome} className={`left ${state.home}`}>
            {/* <div class="absolute w-2/3 h-1 bg-black top-0"></div> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </button>
        <button onClick={handleActiveProjects} className={`midle ${state.projects}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        <button onClick={handleActiveSkills} className={`right ${state.skills}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </button>
    </div>

    )
}

export {Nav}