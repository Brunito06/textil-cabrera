//import react
import { useState } from 'react';

//import react router
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

//import translation
import { useTranslation } from 'react-i18next';

//import styles
import './Footer.css'

//import img
import ig from '../../assets/mainImages/instagram.svg'
import mail from '../../assets/mainImages/mail.svg'
import tel from '../../assets/mainImages/phone.svg'
import wsp from '../../assets/mainImages/whatsapp.svg'
import cross from './assets/cross.svg'

// ...existing code...

const Footer = () =>{
    const { t } = useTranslation();

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    const handleFooterNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Hace scroll hasta arriba
    };

    return(
        <footer>
            <section>
                <div className={isActive1 ? 'ul-footer expanded' : 'ul-footer'} onClick={() => {setIsActive1(!isActive1);}}>
                    <div className='footer-bold'><p>{t('Footer.col1.item1')}</p><img style={{rotate: isActive1 == true ? '45deg' : '0deg', transition: '.3s'}} src={cross} alt="cross" /></div>
                    <ul className='footerList'>
                        <li><Link className='footerLinks' to="/productos" onClick={handleFooterNavClick}>{t('Footer.col1.item3')}</Link></li>
                        <li><Link className='footerLinks' to="/blog" onClick={handleFooterNavClick}>{t('Footer.col1.item4')}</Link></li>
                        <li><Link className='footerLinks' to="/contacto" onClick={handleFooterNavClick}>{t('Footer.col1.item5')}</Link></li>
                    </ul>
                </div>
                <div className={isActive2 ? 'ul-footer expanded' : 'ul-footer'} onClick={() => {setIsActive2(!isActive2);}}>
                    <div className='footer-bold'><p>{t('Footer.col2.item1')}</p><img style={{rotate: isActive2 == true ? '45deg' : '0deg', transition: '.3s'}} src={cross} alt="cross" /></div>
                    <ul className='footerList'>
                        <li><HashLink className='footerLinks' to="/productos#banner1" onClick={handleFooterNavClick}>{t('Footer.col2.item2')}</HashLink></li>
                        <li><HashLink className='footerLinks' to="/productos#banner2" onClick={handleFooterNavClick}>{t('Footer.col2.item3')}</HashLink></li>
                        <li><HashLink className='footerLinks' to="/productos#banner3" onClick={handleFooterNavClick}>{t('Footer.col2.item4')}</HashLink></li>
                        <li><HashLink className='footerLinks' to="/productos#banner4" onClick={handleFooterNavClick}>{t('Footer.col2.item5')}</HashLink></li>
                    </ul>
                </div>
                <div className={isActive3 ? 'ul-footer expanded' : 'ul-footer'} onClick={() => {setIsActive3(!isActive3);}}>
                    <div className='footer-bold'><p>{t('Footer.col3.item1')}</p><img style={{rotate: isActive3 == true ? '45deg' : '0deg', transition: '.3s'}} src={cross} alt="cross" /></div>
                    <ul className='footerList'>
                        <li><Link className='footerLinks' to="/blog" onClick={handleFooterNavClick}>{t('Footer.col3.item2')}</Link></li>
                        <li><HashLink className='footerLinks' to="/blog#posts-title" onClick={handleFooterNavClick}>{t('Footer.col3.item3')}</HashLink></li>
                        <li><HashLink className='footerLinks' to="/blog#categories-title" onClick={handleFooterNavClick}>{t('Footer.col3.item4')}</HashLink></li>
                    </ul>
                </div>
                <div className={isActive4 ? 'ul-footer expanded' : 'ul-footer'} onClick={() => {setIsActive4(!isActive4);}}>
                    <div className='footer-bold'><p>{t('Footer.col4.item1')}</p><img style={{rotate: isActive4 == true ? '45deg' : '0deg', transition: '.3s'}} src={cross} alt="cross" /></div>
                    <ul className='footerList'>
                        <li><HashLink className='footerLinks' to="/#quienesSomos" onClick={handleFooterNavClick}>{t('Footer.col4.item2')}</HashLink></li>
                        <li><HashLink className='footerLinks' to="/#quienesSomos" onClick={handleFooterNavClick}>{t('Footer.col4.item3')}</HashLink></li>
                        <li className='contact-footer'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                        <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 5630</p></li>
                        <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 8083</p></li>
                        <li className='contact-footer'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                    </ul>
                    <div className='redes-align'>
                        <Link to="https://www.instagram.com/textilcabrera28" aria-label="Seguir en Instagram" target='_blank' rel="noopener noreferrer">
                            <img className='redes-logos' src={ig} alt="Instagram" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className='footer-bottom'>
                <p id='copyright'>{t('Footer.bottom')}</p>
            </section>
        </footer>
    );
}

export {Footer}