import React from "react";

export interface NavbarProps {
    content: string,
    lightswitch?: any,
    pulled?: boolean,
    onSwitchPull?: () => void
}

export function Navbar(props: NavbarProps) {
    return <h1 className="navbar">{props.content}{props.lightswitch &&
        <svg onClick={props.onSwitchPull} className={`lightswitch ${props.pulled ? 'pulled' : ''}`}>
            <path d="M 10 0 V 40" />
            <path d="M 5 40 h 10 l 2 20 h -14 l 2 -20" />
        </svg>}</h1>
}