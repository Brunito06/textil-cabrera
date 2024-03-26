//import styles
import './NavBar.css'
import logo from './assets/logo.png'
import esp from './assets/esp.png'
import eng from './assets/eng.png'

const NavBar = () =>{
    return(
        <nav id='navBar'>
            <img id='logo' src={logo} alt="" />
            <ul id='navItems'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
            <button id='language'>
                <img id='flags' src={esp} alt="" />
                <p>Español</p>
            </button>
        </nav>
    );
}

export {NavBar}