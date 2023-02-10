import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useState, useContext } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"
import CopyContext from "../Context/CopyStateContext"
import { useMedia } from "../CustomHooks/useMedia"

function Contact({contactModalState, setContactModalState}){
    const contactItems = [
        {
            id: 1,
            name: "Whatsapp",
            href: "https://api.whatsapp.com/send?phone=1159640417",
            icon: faWhatsapp,
            value: "+54 115964-0417",
            style: "contact-whatsapp",
            styleActive: "contact-active",
            backgrund: "bg-[#0a0]",
            colorText: "text-white",
            fill: "white",
            animation: "animate-jump1"
        },
        {
            id: 2,
            name: "GitHub",
            href: "https://github.com/MatySeitour",
            icon: faGithub,
            value: "MatySeitour",
            style: "contact-github",
            styleActive: "contact-active",
            backgrund: "bg-[#000]",
            colorText: "text-white",
            fill: "white",
            animation: "animate-jump2"
        },
        {
            id: 3,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/matias-seitour-1a0118240/",
            icon: faLinkedin,
            value: "Matias Seitour",
            style: "contact-linkedin",
            styleActive: "contact-active",
            backgrund: "bg-[#fff]",
            colorText: "text-blue-700",
            fill: "blue",
            animation: "animate-jump3"
        },
        {
            id: 4,
            name: "Gmail",
            href: "",
            icon: faEnvelope,
            value: "matias.seitour01@gmail.com",
            style: "contact-gmail",
            styleActive: "contact-active__gmail",
            backgrund: "bg-[#f00]",
            colorText: "text-white",
            fill: "white",
            animation: "animate-jump4"
        },
    ]


    const copyContext = useContext(CopyContext);
    const {copied, setCopied} = copyContext;
    const mobileResponsive = useMedia('(max-width: 600px)');


    const [contactState, setContactState] = useState(0)
    const [valueCopy, setValueCopy] = useState("")


    return(
        <>
            {mobileResponsive !== false ?
                <div>
                    <div className={copied ? "w-auto h-auto -translate-x-2 -translate-y-2 rounded-md p-3 bg-black fixed bottom-0 right-0 z-50 transition-all" : "transition-all fixed w-auto h-auto -bottom-6 right-0 z-50"}>
                        <p className="tracking-widest text-white">Copied!</p>
                    </div>

                    <ul className="w-full h-60 flex items-center flex-col">
                        {contactItems.map((item) => (
                            <li className={`${item.animation} mb-6`} key={item.id}>
                                <div onClick={() => setContactState(item.id)} className={contactState == item.id ? `${item.style}  ${item.styleActive} shadow-lg` : `shadow-lg ${item.style}`}>
                                    <div className={contactState == item.id ? "w-full h-full flex justify-between items-center pl-4 pr-4 appear-info__contact" : "disappear-info__contact"}>
                                        <a className={`${item.colorText} underline`}>{item.value}</a>
                                        <div className="flex h-full">
                                            <CopyToClipboard text={item.href} onCopy={() => setCopied(true)}>
                                                <svg onClick={() => setCopied(true)} fill={`${item.fill}`} xmlns="http://www.w3.org/2000/svg" className={item.id == contactState ? "w-5 mr-2" : "hidden"} viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                                            </CopyToClipboard>
                                            <span className={item.id !== 3 ? "line-contact" : "line-contact__linkedin"}></span>
                                            <a href={item.href} target="_blank" className={contactState == item.id ? "h-full flex" : "hidden"}>
                                                <svg fill={`${item.fill}`} xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <a className={contactState == item.id ? "opacity-0" : `opacity-1 ${item.colorText}`}><FontAwesomeIcon className="text-2xl" icon={item.icon} /></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                :
       
                <div>
                    <div className={copied ? "w-auto h-auto -translate-x-2 -translate-y-2 rounded-md p-3 bg-black fixed bottom-0 right-0 z-50 transition-all" : "transition-all fixed w-auto h-auto -bottom-6 right-0 z-50"}>
                        <p className="tracking-widest text-white">Copied!</p>
                    </div>
                    <ul className="w-full max-w-[100%] h-60 flex justify-evenly items-center flex-wrap flex-row">
                        {contactItems.map((item) => (
                            <li className={item.animation} key={item.id}>
                                <div onClick={() => setContactState(item.id)} className={item.id !== 4 ? `${item.backgrund} cursor-pointer shadow-xl contact-item overflow-hidden` : `${item.backgrund} contact-item__gmail cursor-pointer shadow-lg overflow-hidden`}>
                                    <div className="w-full h-full flex justify-between items-center pl-4 pr-4 appear-info__contact contact-text">
                                        <a className={`${item.colorText} underline contact-text`}>{item.value}</a>
                                        <div className="flex h-full contact-links">
                                            <CopyToClipboard text={item.href} onCopy={() => setCopied(true)}>
                                                <svg onClick={() => setCopied(true)} fill={`${item.fill}`} xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg>
                                            </CopyToClipboard>
                                            <span className={item.id !== 3 ? "line-contact" : "line-contact__linkedin"}></span>
                                            <a href={item.href} target="_blank" className={contactState == item.id ? "h-full flex" : "h-full flex"}>
                                                <svg fill={`${item.fill}`} xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <a className={`icon-contact ${item.colorText}`}><FontAwesomeIcon className="text-2xl" icon={item.icon} /></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}

export {Contact}