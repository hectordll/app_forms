import { NavLink } from 'react-router-dom'
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {

    const { isAuthenticated } = useAuth0();


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                    to="form">
                                    Form
                                </NavLink>
                            </li>
                            {isAuthenticated && ( // Render the "Home" link if authenticated
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="form">
                                        Admin
                                    </NavLink>
                                </li>
                            )}
                            {/* Afficher le bouton Login si l'utilisateur n'est pas connecté */}
                            {!isAuthenticated && <LoginBtn />}
                            {isAuthenticated && <LogoutBtn />}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
