import { ProjectProps } from "@/types";

const ProjectBox = ({ title, description, techStack, github, demo }: ProjectProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="flex gap-2">
                {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <button>View code on GitHub</button>
            </a>
            {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button>View Demo</button>
                </a>
            )}
        </div>
    );};

export default ProjectBox;
