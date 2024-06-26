export interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo?: string;
}

export interface SocialsProps {
    github: string;
    linkedin: string;
    email: string;
    className?: string;
}

export interface ExternalLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    ariaLabel?: string;
    children: React.ReactNode;
}

export interface HeadingProps {
    contentTitle: string;
}
