//import styles
import './Footer.css'

const Footer = () =>{
    return(
        <footer>
            <section>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Inicio</li>
                    <li>Quienes somos</li>
                    <li>Producto</li>
                    <li>Contacto</li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Productos</li>
                    <li>Estopas</li>
                    <li>Trapos</li>
                    <li>TNT</li>
                    <li>Guatas</li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Nosotros</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Contacto</li>
                    <li><img src="" alt="" /><p>+598 2288 5630</p></li>
                    <li><img src="" alt="" /><p>+598 2288 8083</p></li>
                    <li><img src="" alt="" /><p>tcc@adinet.com.uy</p></li>
                </ul>
                <div>
                    <img id='wsp-logo' src="" alt="" />
                    <img id='ig-logo' src="" alt="" />
                </div>
            </section>
            <section className='footer-bottom'>
                <p id='copyright'>© 2024 Textil Cabrera SRL | Desarrollo web a cargo de Emiliano Rodriguez & Bruno Jorba</p>
            </section>
        </footer>
    );
}

export {Footer}