//import styles
import './NavBar.css'

//import react router
import { NavLink } from 'react-router-dom'

//import img
import logo from './assets/logo.png'
import esp from './assets/esp.png'

const NavBar = () =>{
    return(
        <nav>
            <img id='logo' src={logo} alt="logo tcc" />
            <ul id='navItems'>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
            <span id='language'>
                <img src={esp} alt="bandera" />
                <p>Español</p>
            </span>
        </nav>
    );
}

export {NavBar}