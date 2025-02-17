import TiltedCard from "../../bits/TiltedCard";
import "./Techs.css";

interface Tech {
    name: string;
    image: string;

    background: string;
}

function Techs() {

    const techs: Tech[] = [
        {
            name: "C#",
            image: "./csharp.png",
            background: "bg-purple-300"
        },
        {
            name: "Python",
            image: "./python.png",
            background: "bg-yellow-200"
        },
        {
            name: "Typescript",
            image: "./typescript.png",
            background: "bg-blue-400"
        },
        {
            name: "Flutter",
            image: "./flutter.png",
            background: "bg-blue-300"
        },
        {
            name: "Postgres",
            image: "./postgres.png",
            background: "bg-blue-500"
        },
        {
            name: "MongoDB",
            image: "./mongo.png",
            background: "bg-green-500"
        },
        {
            name: "NestJS",
            image: "./nest.png",
            background: "bg-red-300"
        },
        {
            name: "Docker",
            image: "./docker.png",
            background: "bg-blue-900"
        },
        {
            name: "Jenkins",
            image: "./jenkins.png",
            background: "bg-red-500"
        },
        {
            name: "Git",
            image: "./git.png",
            background: "bg-orange-700"
        }
    ];


    return <div className="p-10 flex justify-center gap-10 flex-wrap">
        {
            techs.map(t => <TiltedCard key={t.name}
                imageSrc={t.image}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Angular"
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={16}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className={"tilted-card-title " + t.background}>
                        {t.name}
                    </p>
                }
            />)
        }

    </div>
}

export default Techs;