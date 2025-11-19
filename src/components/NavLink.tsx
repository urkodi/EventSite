import type { ComponentType } from "react";
type SVGComponent = ComponentType<any>;

type NavLinkProps = {
    icon: SVGComponent,
    link: string,
    text: string
};


function NavLink({icon:Icon, link, text}: NavLinkProps) {
    return (
        <li>
            <a href={link} className= "flex mr-6 mb-2 gap-3 items-center transition-colors hover:bg-lightermoonstone p-2 rounded-2xl hover:text-white focus:bg-moonstone">
                <Icon height="32px" width="32px" />
                <p>{text}</p>
            </a>
        </li>
    )
}

export default NavLink;