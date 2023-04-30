import React from "react";
import './style.scss'

interface buttonProps {
    className: string;
    title: string;
    onClick?: VoidFunction;
}
const Button: React.FC<buttonProps> = (props) => {
    return <button className={props.className} onClick={props.onClick}>{props.title}</button>
}

export default Button;