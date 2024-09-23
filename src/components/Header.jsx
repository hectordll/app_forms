import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="form">Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="authentification">Authentification</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
