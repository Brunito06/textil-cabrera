//import styles
import './ContactUs.css'

//import img
import banner from './assets/banner-contact.jpg'
import ig from './assets/instagram.png'
import mail from './assets/mail.png'
import tel from './assets/telefono.png'
import wsp from './assets/whatsapp.png'

const ContactUs = () =>{
    return(
        <div className='contactUs'>
            <section id='banner'>
                <p id='banner-text'>PONTE EN CONTACTO</p>
            </section>
            <div className='contactPanel'>
            <iframe id='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.3817490650379!2d-55.98485612927305!3d-34.736355301555726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02663a1b2ae75%3A0x62a6158eba1d125f!2sTextil%20Cabrera!5e0!3m2!1ses-419!2suy!4v1711502455517!5m2!1ses-419!2suy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <section className='contactInfo'>
                <h1 className='contactTitle'>CONTACTO</h1>
                <ul className='contactList'>
                    <li className='contact'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 5630</p></li>
                    <li className='contact'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 8083</p></li>
                    <li className='contact'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                    <li className='contact'><img className='contact-logos' src={wsp} alt="" /><p>+598 98 695 831</p></li>
                    <li className='contact'><img className='contact-logos' src={ig} alt="" /><p>textilcabrera_oficial</p></li>
                </ul>
                <p className='contactAddress'>Ruta 8 km 28 Cno. Vega Helguera - Calle Edipo S/N Barros Blancos- Canelones</p>
            </section>
            </div>
        </div>
    );
}

export {ContactUs}