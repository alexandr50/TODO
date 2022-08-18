import React from 'react';
import Footer from "./footer";
import {HashRouter, Route, BrowserRouter, Link} from "react-router-dom";

const Menu = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <form className="form-inline">
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/todos'>Todos</Link></li>
                        <li><Link to='/project'>Projects list</Link></li>
                    </form>

                </ul>
            </nav>
        </HashRouter>

    )

}
export default Menu