import React from "react";
import Nav from "./Nav";

function Header(props) {
    return (
        <header>
            <h1>
                <a href="/home" >{props.title}</a>
            </h1>
        </header>
    );
}


export default Header;