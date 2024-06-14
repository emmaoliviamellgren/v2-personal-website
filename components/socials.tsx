import { SocialsProps } from "@/types";
import { ExternalLink } from ".";
import { GithubIcon, LinkedinIcon, EmailIcon } from "./icons";

const Socials = ({github, linkedin, email}: SocialsProps) => {
    return (
        <div className="flex space-x-4">
            <ExternalLink href={github} ariaLabel="GitHub profile">
                <GithubIcon />
            </ExternalLink>
            <ExternalLink href={linkedin} ariaLabel="LinkedIn profile">
                <LinkedinIcon />
            </ExternalLink>
            <ExternalLink href={`mailto:${email}`} ariaLabel="Send email">
                <EmailIcon />
            </ExternalLink>
        </div>
    )
};

export default Socials;
