//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import flecha from './assets/flechita.png'
import avion from './assets/avion-de-papel.png'

const Home = () =>{
    const { t } = useTranslation();

    return(
        <div className='home'>
            <header>
                <h1>TEXTIL CABRERA</h1>
            </header>
            <div className='flechaNosotros'>
                    <h3>{t('UsIndicator')}</h3><img className='imgHome' src={flecha} alt="Flecha" />
            </div>
            <section className='homeQuienesSomos'>
                <div id='quienesSomos' className='homeSection1Text'>
                    <h2>{t('WhoAreWeTitle')}</h2>
                    <p id='quienesSomosText'>{t('WhoAreWeText')}</p>
                    <div className='vendemos-box'>
                        <h3>{t('SaleTitle')}.</h3>
                        <p>{t('SaleText')}</p>
                    </div>
                </div>
                <span id='quienesSomosImg'></span>
            </section>

            <section className='guata'>
                <div className='guataBox'>
                    <div className='queEsGuata'>
                        <h2>{t('GuataTitle')}</h2>
                        <p>{t('GuataText')}</p>
                    </div>
                    <div className='usosGuata'>
                        <div className='usosGuataTexto'>
                            <h3>{t('GuataApplicationsTitle')}</h3>
                            <p>{t('GuataApplicationsText')}</p>
                            <Link className='homeLinks' to="/contacto"><img src={avion} alt="Avion" /><p>{t('GuataApplicationsButton')}</p></Link>
                        </div>
                        <span id='guataUsosImg'></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export {Home}

