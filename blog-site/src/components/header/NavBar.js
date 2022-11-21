import React from "react"
import { NavLink } from "react-router-dom"
import HamburgerIcon from "../../assets/hamburger.svg"

export default function NavBar() {
    React.useEffect(function () {

        window.addEventListener("resize", function () {
            // adding the if condition for which it checks the window if it is small than 600 i.e. mobile mode then show hamburg otherwise not.
            if (this.window.innerWidth > 600) {
                document.getElementById("nav--links").classList.remove("nav--show-links");
            }
        })

        document.getElementById("nav--logo").addEventListener("click", function () {
            window.location = "/";
        })

        document.getElementById("nav--collapse").addEventListener("click", function () {
            const links = document.getElementById("nav--links");
            links.classList.toggle("nav--show-links");
        })
    }, [])

    return (
        <div id="nav" className="pad">
            <div id="nav--logo">
                <p>The</p>
                <h1>Siren</h1>
            </div>
            <img id="nav--collapse" src={HamburgerIcon} alt="" height="25px"></img>
            <div id="nav--links">
                <NavLink to="/home"> Home </NavLink>
                <NavLink to="/bollywood"> Bollywood </NavLink>
                <NavLink to="/technology"> Technology </NavLink>
                <NavLink to="/hollywood"> Hollywood </NavLink>
                <NavLink to="/fitness"> Fitness </NavLink>
                <NavLink to="/food"> Food </NavLink>
            </div>
        </div>
    )
}