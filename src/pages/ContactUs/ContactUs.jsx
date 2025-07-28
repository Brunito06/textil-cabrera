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
                <title>Contacto - Textil Cabrera | Teléfono, Email, WhatsApp y Ubicación</title>
                <meta name="description" content="Contactá a Textil Cabrera para consultas, presupuestos o pedidos. Teléfono: +598 2288 5630, Email: tcc@adinet.com.uy, WhatsApp disponible. Ubicados en Barros Blancos, Canelones." />
                <meta name="keywords" content="contacto textil cabrera, teléfono textil cabrera, email textil cabrera, whatsapp textil cabrera, ubicación textil cabrera, barros blancos canelones" />
                <link rel="canonical" href="https://textilcabrera.com/contacto" />
                <meta name="theme-color" content="#145DA0" />
                {/* Open Graph */}
                <meta property="og:title" content="Contacto - Textil Cabrera | Teléfono, Email, WhatsApp" />
                <meta property="og:description" content="Contactá a Textil Cabrera para consultas y pedidos. Teléfono: +598 2288 5630, Email: tcc@adinet.com.uy, WhatsApp disponible." />
                <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <meta property="og:url" content="https://textilcabrera.com/contacto" />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contacto - Textil Cabrera" />
                <meta name="twitter:description" content="Contactá a Textil Cabrera para consultas y pedidos. Teléfono, email y WhatsApp disponibles." />
                <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/cbf01c8a-eee7-430c-9ae5-98f65d02dc9b.png?token=6sLfBo1KOFrpP8BCtXMLMWDvJJ5EaXFiQFPlf5unaTc&height=800&width=1200&expires=33280120630" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contacto - Textil Cabrera",
                        "description": "Información de contacto de Textil Cabrera",
                        "url": "https://textilcabrera.com/contacto",
                        "mainEntity": {
                            "@type": "LocalBusiness",
                            "name": "Textil Cabrera",
                            "telephone": "+598 2288 5630",
                            "email": "tcc@adinet.com.uy",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Ruta 8 km 28 Cno. Vega Helguera - Calle Edipo S/N",
                                "addressLocality": "Barros Blancos",
                                "addressRegion": "Canelones",
                                "postalCode": "91000",
                                "addressCountry": "UY"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -34.736355,
                                "longitude": -55.984856
                            }
                        }
                    })}
                </script>
            </Helmet>
            <main role="main">
            <section className='contactSide' aria-labelledby="contact-info-title">
                <div className='contactSiseContent'>
                    <div className='contactInfo'>
                        <h1 id="contact-info-title">{t('ContactInfo.title')}</h1>
                        <ul className='contactList'>
                            <li className='contact'><img className='contactUs-logos' src={tel} alt="Icono de teléfono" /><p>+598 2288 5630</p></li>
                            <li className='contact'><img className='contactUs-logos' src={tel} alt="Icono de teléfono" /><p>+598 2288 8083</p></li>
                            <li className='contact'><img className='contactUs-logos' src={mail} alt="Icono de email" /><p>tcc@adinet.com.uy</p></li>
                            <li className='contact'><img className='contactUs-logos' src={wsp} alt="Icono de WhatsApp" /><p>+598 98 695 831</p></li>
                            <li className='contact'><img className='contactUs-logos' src={ig} alt="Icono de Instagram" /><p>textilcabrera28</p></li>
                        </ul>
                    </div>
                    <div className='contactUbi' aria-labelledby="location-title">
                        <h2>{t('ContactInfo.Address.title')}</h2>
                        <p className='contactAddress'>{t('ContactInfo.Address.text')}</p>
                    </div>
                </div>
            </section>
            <iframe id='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.3817490650379!2d-55.98485612927305!3d-34.736355301555726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02663a1b2ae75%3A0x62a6158eba1d125f!2sTextil%20Cabrera!5e0!3m2!1ses-419!2suy!4v1711502455517!5m2!1ses-419!2suy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de ubicación de Textil Cabrera en Barros Blancos, Canelones" aria-label="Mapa interactivo mostrando la ubicación de Textil Cabrera"></iframe>
            </main>
        </div>
    );
}

export {ContactUs}