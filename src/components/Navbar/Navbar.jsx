import { NavLink } from 'react-router-dom'
import NavStyle from './Navbar.module.css'
export default function Navbar() {
    return (
        <>
            <ul className={NavStyle.NavList}>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about-us'>
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/our-recipes'>
                        Our recipes
                    </NavLink>
                </li>
            </ul>
        </>
    )
}