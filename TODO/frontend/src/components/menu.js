import React from 'react';
import Footer from "./footer";
import {HashRouter, Route, BrowserRouter, Link} from "react-router-dom";

const Menu = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <form className="form-inline">
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/todos'>Todos</Link></li>
                        <li><Link to='/project'>Projects list</Link></li>
                        {/*<li><Link to='/login'>Login</Link></li>*/}
                        <li> {this.is_auth() ? <button
                                    onClick={() => this.logout()}>Logout</button> : <Link as={Link} to='/login'>Login</Link>}</li>
                    </form>

                </ul>
            </nav>
        </BrowserRouter>

    )

}
export default Menu