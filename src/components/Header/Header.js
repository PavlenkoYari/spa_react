import React from "react"
import './Header.scss';
import { useRouteMatch, Link } from "react-router-dom";


export const Header = () => {
    let match = useRouteMatch("/user/:id");

    return(
        <header className="header">
            {match ?
                <Link to='/'>&lt;- Home</Link>
                :
                "Header"
            }
        </header>
    )
};