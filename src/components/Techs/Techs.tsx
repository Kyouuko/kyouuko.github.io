import TiltedCard from "../../bits/TiltedCard";
import "./Techs.css";

interface Tech {
    name: string;
    image: string;
    background: string;
    caption: string;
}

function Techs() {

    const techs: Tech[] = [
        {
            name: "Node",
            image: "./node.png",
            background: "bg-green-500",
            caption: "Node"
        },
        {
            name: "Deno",
            image: "./deno.png",
            background: "bg-white",
            caption: "Deno"
        },
        {
            name: "C#",
            image: "./csharp.png",
            background: "bg-purple-300",
            caption: "C#"
        },
        {
            name: ".NET",
            image: "./dotnet.png",
            background: "bg-purple-400",
            caption: ".NET"
        },
        {
            name: "Python",
            image: "./python.png",
            background: "bg-yellow-200",
            caption: "Python"
        },
        {
            name: "Typescript",
            image: "./typescript.png",
            background: "bg-blue-400",
            caption: "Typescript"
        },
        {
            name: "Socket IO",
            image: "./socketio.png",
            background: "bg-white",
            caption: "Socket IO",
        },
        {
            name: "GraphQL",
            image: "./graphql.png",
            background: "bg-purple-500",
            caption: "GraphQL"
        },
        {
            name: "Flutter",
            image: "./flutter.png",
            background: "bg-blue-300",
            caption: "Flutter"
        },
        {
            name: "Postgres",
            image: "./postgres.png",
            background: "bg-blue-500",
            caption: "Postgres"
        },
        {
            name: "MongoDB",
            image: "./mongo.png",
            background: "bg-green-500",
            caption: "MongoDB"
        },
        {
            name: "NestJS",
            image: "./nest.png",
            background: "bg-red-300",
            caption: "NestJS"
        },
        {
            name: "Docker",
            image: "./docker.png",
            background: "bg-blue-900",
            caption: "Docker"
        },
        {
            name: "Azure",
            image: "./azure.png",
            background: "bg-blue-500",
            caption: "Azure"
        },
        {
            name: "Jenkins",
            image: "./jenkins.png",
            background: "bg-red-500",
            caption: "Jenkins"
        },
        {
            name: "NATS",
            image: "./nats.png",
            background: "bg-green-700",
            caption: "NATS"
        },
        {
            name: "RabbitMQ",
            image: "./rabbit.png",
            background: "bg-orange-600",
            caption: "RabbitMQ"
        },
        {
            name: "Git",
            image: "./git.png",
            background: "bg-orange-700",
            caption: "Git"
        },
        {
            name: "Jira",
            image: "./jira.png",
            background: "bg-blue-800",
            caption: "Jira"
        },
        {
            name: "Bitbucket",
            image: "./bitbucket.png",
            background: "bg-blue-600",
            caption: "Bitbucket"
        },
        {
            name: "Angular",
            image: "./angular.png",
            background: "bg-purple-700",
            caption: "Angular"
        },
        {
            name: "Qwik",
            image: "./qwik.png",
            background: "bg-blue-700",
            caption: "QwikJs"
        },
        {
            name: "React",
            image: "./react.png",
            background: "bg-blue-600",
            caption: "React"
        },
    ];


    return <div className="p-10 flex justify-center gap-10 flex-wrap">
        {
            techs.map(t => <TiltedCard key={t.name}
                imageSrc={t.image}
                altText={t.caption}
                captionText={t.caption}
                containerHeight="50px"
                containerWidth="50px"
                imageHeight="50px"
                imageWidth="50px"
                rotateAmplitude={20}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
            />)
        }

    </div>
}

export default Techs;