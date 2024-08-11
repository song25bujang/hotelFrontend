import {Link} from "react-router-dom";
import React from "react";
import LoginForm from "./LoginForm";

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.userlist.length; i++) {
        let data = props.userlist[i];
        lis.push(
            <li key={data.id}>
                <Link to={`/user/${data.id}`}>
                    {data.id}번 사용자 : {data.username} - 등급: {data.role}
                </Link>
            </li>
        );
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}


export default Nav;