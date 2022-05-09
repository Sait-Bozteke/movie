import "./Footer.css";
import designSvg from "../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/Sait-Bozteke"
        target="_blank"
        rel="noopener noreferrer"
        
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<SaitBOZTEKE/> "}</code>
        
      </a>
      
      <span
        >Copyright {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;