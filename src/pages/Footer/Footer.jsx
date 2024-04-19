//import react router
import { Link } from 'react-router-dom'

//import translation
import { useTranslation } from 'react-i18next';

//import styles
import './Footer.css'

//import img
import ig from './assets/instagram.png'
import mail from './assets/mail.png'
import tel from './assets/telefono.png'
import wsp from './assets/whatsapp.png'

const Footer = () =>{
    const { t } = useTranslation();

    return(
        <footer>
            <section>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' to="/" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col1.item1')}</Link></li>
                    <li><Link className='footerLinks'  to="/" onClick={() => {window.scroll({top: 700, left: 0, behavior:"smooth",});}}>{t('Footer.col1.item2')}</Link></li>
                    <li><Link className='footerLinks'  to="/productos" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col1.item3')}</Link></li>
                    <li><Link className='footerLinks'  to="/contacto" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col1.item4')}</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' to="/productos" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col2.item1')}</Link></li>
                    <li><Link className='footerLinks' to="/productos" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col2.item2')}</Link></li>
                    <li><Link className='footerLinks' to="/productos" onClick={() => {window.scroll({top: 900, left: 0, behavior: "smooth",});}}>{t('Footer.col2.item3')}</Link></li>
                    <li><Link className='footerLinks' to="/productos" onClick={() => {window.scrollTo(0, 2200);}}>{t('Footer.col2.item4')}</Link></li>
                    <li><Link className='footerLinks' to="/productos" onClick={() => {window.scroll({top: 3000, left: 0, behavior: "smooth",});}}>{t('Footer.col2.item5')}</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>{t('Footer.col3.item1')}</li>
                    <li><Link className='footerLinks' to="/" onClick={() => {window.scroll({top: 560, left: 0, behavior: "smooth",});}}>{t('Footer.col3.item2')}</Link></li>
                    <li><Link className='footerLinks' to="/"onClick={() => {window.scroll({top: 560, left: 0, behavior: "smooth",});}}>{t('Footer.col3.item3')}</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' to="/contacto" onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>{t('Footer.col4.item1')}</Link></li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 5630</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 8083</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                </ul>
                <div id='redes-aligin'>
                    <Link to="https://wa.me/+59898695831" target='_blank'><img className='redes-logos' src={wsp} alt="" /></Link>
                    <Link to="https://www.instagram.com/" target='_blank'><img className='redes-logos' src={ig} alt="" /></Link>
                </div>
            </section>
            <section className='footer-bottom'>
                <p id='copyright'>{t('Footer.bottom')}</p>
            </section>
        </footer>
    );
}

export {Footer}