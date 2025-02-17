import DecryptedText from "../../bits/DecryptedText";
import "./About.css";
function About() {

    const about: string = "Hello!, I'm Gian, a full stack and mobile developer";

    return <section className="px-12 py-3">
        <h1 className="text-5xl">About Me</h1>
        <div className="pt-2 flex justify-center">
            <DecryptedText speed={100} maxIterations={20} text={about} animateOn="view" />
        </div>
    </section>
}

export default About;