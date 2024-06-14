// This component is for making sure all link elements have correct attributes

import { ExternalLinkProps } from '@/types';

const ExternalLink = ({
    href,
    ariaLabel,
    children,
    ...props
}: ExternalLinkProps) => {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            target='_blank'
            rel='noopener noreferrer'
            {...props}>
            {children}
        </a>
    );
};

export default ExternalLink;
