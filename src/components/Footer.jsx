import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="py-3 my-4 footer footer-expand-lg footer-light bg-light">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => "nav-link px-2 text-body-secondary" + (isActive ? " active" : "")} 
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => "nav-link px-2 text-body-secondary" + (isActive ? " active" : "")} 
                        to="form">
                        Form
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className={({ isActive }) => "nav-link px-2 text-body-secondary" + (isActive ? " active" : "")} 
                        to="authentification">
                        Authentification
                    </NavLink>
                </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 LM</p>
        </footer>
    )
}
