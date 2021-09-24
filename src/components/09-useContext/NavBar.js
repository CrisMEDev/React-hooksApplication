import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        {/* NavLink permite saber mediante una clase la ruta en la que se encuentra */}
                        <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/About">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
