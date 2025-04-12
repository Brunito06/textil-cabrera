//import translation
import { useTranslation } from 'react-i18next';

//import styles
import './ContactUs.css'

//import react helmet
import { Helmet } from 'react-helmet';

//import img
import ig from '../../assets/mainImages/instagram.svg'
import mail from '../../assets/mainImages/mail.svg'
import tel from '../../assets/mainImages/phone.svg'
import wsp from '../../assets/mainImages/whatsapp.svg'

const ContactUs = () =>{
    const { t } = useTranslation();

    return(
        <div className='contactUs'>
            <Helmet>
                <title>Contacto - Textil Cabrera</title>
                <meta name="description" content="Comunicate con nosotros para consultas, presupuestos o pedidos de productos textiles." />
                <meta name="theme-color" content="#145DA0" />
                {/* Open Graph */}
                <meta property="og:title" content="Contacto - Textil Cabrera" />
                <meta property="og:description" content="Estamos para ayudarte. Contactanos por teléfono, email o WhatsApp." />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content="https://textilcabrera.com/contacto" />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contacto - Textil Cabrera" />
                <meta name="twitter:description" content="Consultas, pedidos o presupuestos. Estamos a tu disposición." />
                <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
            </Helmet>
            <section className='contactSide'>
                <div className='contactSiseContent'>
                    <div className='contactInfo'>
                        <h1>{t('ContactInfo.title')}</h1>
                        <ul className='contactList'>
                            <li className='contact'><img className='contactUs-logos' src={tel} alt="Tel" /><p>+598 2288 5630</p></li>
                            <li className='contact'><img className='contactUs-logos' src={tel} alt="Tel" /><p>+598 2288 8083</p></li>
                            <li className='contact'><img className='contactUs-logos' src={mail} alt="Mail" /><p>tcc@adinet.com.uy</p></li>
                            <li className='contact'><img className='contactUs-logos' src={wsp} alt="Wsp" /><p>+598 98 695 831</p></li>
                            <li className='contact'><img className='contactUs-logos' src={ig} alt="IG" /><p>textilcabrera28</p></li>
                        </ul>
                    </div>
                    <div className='contactUbi'>
                        <h2>{t('ContactInfo.Address.title')}</h2>
                        <p className='contactAddress'>{t('ContactInfo.Address.text')}</p>
                    </div>
                </div>
            </section>
            <iframe id='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.3817490650379!2d-55.98485612927305!3d-34.736355301555726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02663a1b2ae75%3A0x62a6158eba1d125f!2sTextil%20Cabrera!5e0!3m2!1ses-419!2suy!4v1711502455517!5m2!1ses-419!2suy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export {ContactUs}