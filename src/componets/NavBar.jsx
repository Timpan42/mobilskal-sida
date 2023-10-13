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

                        <li>
                            <NavLink
                                to="/CartPage"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }>
                                Kundvagn
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }>
                                Hem
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/ProductsPage"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }>
                                Produkter
                            </NavLink>
                        </li>

                        <li> <input type="text" name="search" placeholder="Search.." /></li>

                    </ul>
                    <NavLink
                        to="/"
                    >
                        <img className="logo" src={logo} alt="" />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar