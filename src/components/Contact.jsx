import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState, useEffect } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"


function Contact({contactModalState, setContactModalState}){

    const [contactState, setContactState] = useState(0)
    const [valueCopy, setValueCopy] = useState("")
    const [copied, setCopied] = useState(false)

   function copyText(value) {
        if(value === 1){
            setValueCopy("+54 115964-0417")
        }
        else if(value === 2){
            setValueCopy("MatySeitour")
        }
        else if(value === 3){
            setValueCopy("Matias Seitour")
        }
        else if(value === 4){
            setValueCopy("matias.seitour01@gmail.com")
        }
    }

    useEffect(() => {
        console.log(valueCopy)
    }, [valueCopy])


    return(
        <ul className="w-full h-60 flex justify-evenly items-center flex-wrap flex-col">
            <li onClick={() => setContactState(1)} className={contactState == 1 ? "contact-whatsapp  contact-active" : "contact-whatsapp"}>
                    <div className={contactState == 1 ? "w-full h-full flex justify-between items-center pl-4 pr-4 aparece" : "desaparece"}>
                        <a className="text-white underline">+54 115964-0417</a>
                        <div className="flex h-full">
                            <CopyToClipboard text={valueCopy} onCopy={() => setCopied(true)}>
                                <svg onClick={() => copyText(1)} fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                            </CopyToClipboard>
                            <span className="line-contact"></span>
                            <a href="https://api.whatsapp.com/send?phone=1159640417" target="_blank" className={contactState == 1 ? "h-full flex" : "hidden"}>
                                <svg fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                            </a>
                        </div>
                    </div>
                    <a className={contactState == 1 ? "opacity-0" : "opacity-1 text-white"}><FontAwesomeIcon className="text-2xl" icon={faWhatsapp} /></a>

            </li>
            <li onClick={() => setContactState(2)} className={contactState == 2 ? "contact-github contact-active" : "contact-github"}>
                <div className={contactState == 2 ? "w-full h-full flex justify-between items-center pl-4 pr-4 aparece" : "desaparece"}>
                    <a className="text-white underline">MatySeitour</a>
                    <div className="flex h-full">
                        <CopyToClipboard text={valueCopy} onCopy={() => setCopied(true)}>
                            <svg onClick={() => copyText(2)} fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                        </CopyToClipboard>
                        <span className="line-contact"></span>
                        <a href="https://github.com/MatySeitour" target="_blank" className={contactState == 2 ? "h-full flex" : "hidden"}>
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                        </a>
                    </div>
                </div>
                <a className={contactState == 2 ? "opacity-0" : "opacity-1 text-white"}><FontAwesomeIcon className="text-2xl" icon={faGithub} /></a>
            </li>

            <li onClick={() => setContactState(3)} className={contactState == 3 ? "contact-linkedin contact-active" : "contact-linkedin"}>
                <div className={contactState == 3 ? "w-full h-full flex justify-between items-center pl-4 pr-4 aparece" : "desaparece"}>
                    <a className="text-blue-700 underline">Matias Seitour</a>
                    <div className="flex h-full">
                        <CopyToClipboard text={valueCopy} onCopy={() => setCopied(true)}>
                            <svg onClick={() => copyText(3)} fill="blue" xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                        </CopyToClipboard>
                        <span className="line-contact__linkedin"></span>
                            <a href="https://www.linkedin.com/in/matias-seitour-1a0118240/" target="_blank" className={contactState == 3 ? "h-full flex" : "hidden"}>
                        <svg fill="blue" xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                        </a>
                    </div>
                </div>
                <a className={contactState == 3 ? "opacity-0" : "opacity-1 text-blue-700"}><FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
                </a>
            </li>
            <li onClick={() => setContactState(4)} className={contactState == 4 ? "contact-gmail contact-active__gmail" : "contact-gmail"}>
            <div className={contactState == 4 ? "w-full h-full flex justify-between items-center pl-4 pr-4 aparece" : "desaparece"}>
                    <a className="text-white underline">matias.seitour01@gmail.com</a>
                    <div className="flex h-full">
                        <CopyToClipboard text={valueCopy} onCopy={() => setCopied(true)}>
                            <svg onClick={() => copyText(4)} fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                        </CopyToClipboard>
                    </div>
                </div>
                <a className={contactState == 4 ? "opacity-0" : "opacity-1 text-white"}><svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></a>
            </li>
        </ul>
    )
}

export {Contact}