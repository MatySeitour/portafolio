import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faGithub, faLinkedin ,faMailchimp } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import { useEffect } from "react"

function Contact({contactModalState, setContactModalState}){
    const [contactState, setContactState] = useState(0)

    useEffect(() =>{
    }, [contactState])

    return(
        <ul className="w-full h-60 flex justify-around items-center flex-wrap flex-row">
            <li onClick={() => setContactState(prevState => prevState == 1 ? 0 : 1)} className={contactState == 1 ? "contact-whatsapp  contact-active" : "contact-whatsapp"}><a className="text-white"><FontAwesomeIcon className="text-2xl" icon={faWhatsapp} /></a></li>
            <li onClick={() => setContactState(prevState => prevState == 2 ? 0 : 2)} className={contactState == 2 ? "contact-github contact-active" : "contact-github"}><a className="text-white"><FontAwesomeIcon className="text-2xl" icon={faGithub} /></a></li>
            <li onClick={() => setContactState(prevState => prevState == 3 ? 0 : 3)} className={contactState == 3 ? "contact-linkedin contact-active" : "contact-linkedin"}><a className="text-blue-700"><FontAwesomeIcon className="text-2xl" icon={faLinkedin} /></a></li>
            <li onClick={() => setContactState(prevState => prevState == 4 ? 0 : 4)} className={contactState == 4 ? "contact-gmail contact-active" : "contact-gmail"}><a><svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></a></li>
        </ul>
    )
}

export {Contact}