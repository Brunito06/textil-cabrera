//import styles
import './Footer.css'

//import img
import ig from './assets/instagram.png'
import mail from './assets/mail.png'
import tel from './assets/telefono.png'
import wsp from './assets/whatsapp.png'

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
                    <li>Quienes somos</li>
                    <li>Envios</li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Contacto</li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 5630</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 8083</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                </ul>
                <div id='redes-aligin'>
                    <a href="https://wa.me/+59898695831" target='_blank'><img className='redes-logos' src={wsp} alt="" /></a>
                    <a href="https://www.instagram.com/" target='_blank'><img className='redes-logos' src={ig} alt="" /></a>
                </div>
            </section>
            <section className='footer-bottom'>
                <p id='copyright'>© 2024 Textil Cabrera SRL | Desarrollo web a cargo de Emiliano Rodriguez & Bruno Jorba</p>
            </section>
        </footer>
    );
}

export {Footer}