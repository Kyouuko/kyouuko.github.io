import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import StarBorder from "../../bits/StarBorder";

const socialLinks = {
    instagram: "https://www.instagram.com/gcmarino",
    facebook: "https://www.facebook.com/gcmarino21",
    github: "https://github.com/Kyouuko",
};


function Social() {
    return (<div className="flex justify-center gap-2 space-x-3 py-5">
        <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="purple" onClick={() => window.open(socialLinks.instagram, "_blank")}>
            <FontAwesomeIcon icon={faInstagram} />
        </StarBorder>
        <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="blue" onClick={() => window.open(socialLinks.facebook, "_blank")}>
            <FontAwesomeIcon icon={faFacebook} />
        </StarBorder>
        <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="white" onClick={() => window.open(socialLinks.github, "_blank")}>
            <FontAwesomeIcon icon={faGithub} />
        </StarBorder>
    </div>);
}

export default Social;