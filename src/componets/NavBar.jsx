import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import logo from "../assets/Logo.png"

function NavBar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <NavLink
                            to="/CartPage"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            Kundvagn
                        </NavLink>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            Hem
                        </NavLink>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            Produkter
                        </NavLink>
                        <li> <input type="text" name="search" placeholder="Search.." /></li>

                    </ul>
                    <img className="logo" src={logo} alt="" />
                </div>
            </nav>
        </>
    )
}

export default NavBar