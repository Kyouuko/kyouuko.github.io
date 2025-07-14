import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import StarBorder from "../../bits/StarBorder";
import { motion } from "framer-motion";

const socialLinks = {
    instagram: "https://www.instagram.com/gcmarino",
    facebook: "https://www.facebook.com/gcmarino21",
    github: "https://github.com/gcmarino",
};


function Social() {
    return (<div className="flex justify-center gap-2 space-x-3 py-5">
        <motion.div whileHover={{ scale: 1.2 }} initial={{ scale: 1 }}>
            <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="purple" onClick={() => window.open(socialLinks.instagram, "_blank")}>
                <FontAwesomeIcon icon={faInstagram} />
            </StarBorder>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} initial={{ scale: 1 }}>
            <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="blue" onClick={() => window.open(socialLinks.facebook, "_blank")}>
                <FontAwesomeIcon icon={faFacebook} />
            </StarBorder>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} initial={{ scale: 1 }}>
            <StarBorder className="hover:cursor-pointer" as="button" speed="5s" color="white" onClick={() => window.open(socialLinks.github, "_blank")}>
                <FontAwesomeIcon icon={faGithub} />
            </StarBorder>
        </motion.div>
    </div>);
}

export default Social;