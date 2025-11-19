import type { ComponentType } from "react";
type SVGComponent = ComponentType<any>;

type ContactLinkProps = {
    icon: SVGComponent,
    link: string,
    text: string
};

function ContactLink({icon:Icon, link, text}: ContactLinkProps) {
    return (
        <li>
            <a href={link} className= "flex my-6 mb-2 gap-3 items-center">
                <Icon height="32px" width="32px" />
                <p>{text}</p>
            </a>
        </li>
    )
}

export default ContactLink;