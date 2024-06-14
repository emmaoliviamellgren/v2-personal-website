import { SocialsProps } from "@/types";
import { ExternalLink } from ".";
import { GithubIcon, LinkedinIcon, EmailIcon } from "./icons";

const Socials = ({github, linkedin, email}: SocialsProps) => {
    return (
        <div className="flex items-center space-x-2">
            <ExternalLink href={github} ariaLabel="GitHub profile">
                <GithubIcon className="size-5 text-primary-muted"/>
            </ExternalLink>
            <ExternalLink href={linkedin} ariaLabel="LinkedIn profile">
                <LinkedinIcon className="size-[1.6rem] text-primary-muted"/>
            </ExternalLink>
            <ExternalLink href={`mailto:${email}`} ariaLabel="Send email">
                <EmailIcon className="size-[1.4rem] text-primary-muted"/>
            </ExternalLink>
        </div>
    )
};

export default Socials;
