import logo from "../assets/red30-tech-logo.png";
import {Link, NavLink } from "react-router-dom";
import Watermark from "./Watermark";

export default function Header(){
  const getClass=({isActive})=>(isActive? "nav-active":null)
  return(
    <header className="container">
      <Link to="/">
    <img
      className="logo"
      src={logo}
      alt="Red30 Tech logo"
      title="Red30 Tech | Home"
    />
    </Link>

    <nav>
      <NavLink to="/" className={getClass}>Home</NavLink>
      <NavLink to="/categories" className={getClass}>Categories</NavLink>
      <NavLink to="/about" className={getClass}>About</NavLink>
      <NavLink to="/register" className={getClass}>Register</NavLink>

    </nav>
    <Watermark/>

  </header>
  )
}