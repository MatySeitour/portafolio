import { useEffect, useState } from "react"
import "../styles.css"


function Nav(){
    const [navState, setNavState] = useState(false);

    return(
        <>
        <div className="fixed flex z-50 items-center top-0 w-full h-16 bg-black">
            <div className="flex-none pl-4">
                    <svg onClick={() => setNavState(prevState => !prevState)} className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </div>
        <>
            {navState && 
                <>
                    <div className="fixed z-50 left-0 top-0 bg-black h-full w-2/3">
                        <span onClick={() => setNavState(prevState => !prevState)} className="absolute right-6 top-10 text-3xl">X</span>
                    </div>
                </>
            }
        </>
        </>
    )
}

export {Nav}