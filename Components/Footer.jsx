import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="header-logo">
        {/* <img className='mr-5 h-5 w-5' src="/assets/images/troll-face.png" alt="meme generator logo - the original meme!"/> */}
        
        {/* <h1 className="header-title">
            © 2024
        </h1> */}
        <p className="header-title">
          Made with ❤️ by Satish Kr. Gupta
        </p>
        <p className="header-subtitle">
        <a href="https://x.com/itssatishkg" target="_blank" rel="noopener noreferrer">
            <BsTwitterX className="h-5 w-5" />
        </a>
        </p>
        <p className="header-subtitle">
        <a href="https://www.linkedin.com/in/satish-kumar-gupta-876305150/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-5 w-5" />
        </a>
        </p>
        <p className="header-subtitle">
        <a href="https://github.com/satish-kg" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-5 w-5"/>
        </a>
        </p>
      </div>
    </>
  );
}

export default Footer;