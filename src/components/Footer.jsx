import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.css"

function Footer(){
    return(
    <footer className="footer w-full h-auto footer-center p-8 bg-slate-800 text-primary-content">
      <div className="w-full">
        <p className="font-bold text-base">
          Matias Agustin Seitour <br/>
        </p>
        <p>Desarrollador Frontend</p> 
        <p>Copyright © 2023 - All right reserved</p>
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/matias-seitour-1a0118240/" target="_blank" className="h-auto flex justify-center items-center w-auto p-2 rounded-full bg-[#10c0cd] hover:scale-110 transition-all"><FontAwesomeIcon className="w-8 h-8 rounded-[100px]" icon={faLinkedin}/></a> 
          <a href="https://github.com/MatySeitour" target="_blank" className="h-auto flex justify-center items-center w-auto p-2 rounded-full bg-[#10c0cd] hover:scale-110 transition-all"><FontAwesomeIcon className="w-8 h-8 rounded-[100px]" icon={faGithub}/></a> 
          <a href="https://twitter.com/MatySeitour" target="_blank" className="h-auto flex justify-center items-center w-auto p-2 rounded-full bg-[#10c0cd] hover:scale-110 transition-all"><FontAwesomeIcon className="w-8 h-8 rounded-[100px]" icon={faTwitter}/></a> 
        </div>
      </div>
    </footer>
    )
}

export {Footer};