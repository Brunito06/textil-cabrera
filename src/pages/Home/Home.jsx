//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import flecha from './assets/flechita.png'
import avion from './assets/avion-de-papel.png'
import more from "./assets/more.svg"

//import components
import { Product } from '../../components/product/product';

const Home = () =>{
    const { t } = useTranslation();

    return(
        <div className='home'>
            <header>
                <h1>TEXTIL CABRERA</h1>
            </header>
            <div className='flechaNosotros'>
                    <p>{t('UsIndicator')}</p><img className='imgHome' src={flecha} alt="Flecha" />
            </div>
            <section className='homeQuienesSomos'>
                <div id='quienesSomos' className='homeSection1Text'>
                    <h2>{t('WhoAreWeTitle')}</h2>
                    <p id='quienesSomosText'>{t('WhoAreWeText')}</p>
                    <div className='vendemos-box' id='homeVendemosPais'>
                        <h3>{t('SaleTitle')}.</h3>
                        <p>{t('SaleText')}</p>
                    </div>
                </div>
                <span id='quienesSomosImg'></span>
            </section>

            <section className='guata'>
                <div className='guataBox'>
                    <div className='guataBoxContent'>
                        <div className='queEsGuata'>
                            <h2>{t('GuataTitle')}</h2>
                            <p>{t('GuataText')}</p>
                        </div>
                        <div className='usosGuata'>
                            <div className='usosGuataTexto'>
                                <h3>{t('GuataApplicationsTitle')}</h3>
                                <span id='guataUsosImgResponsive'></span>
                                <p>{t('GuataApplicationsText')}</p>
                                <Link className='homeLinks' to="/contacto"><img src={avion} alt="Avion" /><p>{t('GuataApplicationsButton')}</p></Link>
                            </div>
                            <span id='guataUsosImg'></span>
                        </div>
                    </div>
                </div>
                <div className='highLightProducts'>   
                    <Product num="product14" title={t('SilicionWadding5.title')}>
                        <p>{t('SilicionWadding5.text1.text1')}<span>{t('SilicionWadding5.text1.bold')}</span>{t('SilicionWadding5.text1.text2')}</p>
                        <p>{t('SilicionWadding5.text2.text1')}<span>{t('SilicionWadding5.text2.bold')}</span>{t('SilicionWadding5.text2.text2')}</p>
                    </Product>
                    <Product num="product15" title={t('SilicionWadding2.title')}>
                        <p>{t('SilicionWadding2.text1.text1')}<span>{t('SilicionWadding2.text1.bold')}</span>{t('SilicionWadding2.text1.text2')}</p>
                        <p>{t('SilicionWadding2.text2.text1')}<span>{t('SilicionWadding2.text2.bold')}</span>{t('SilicionWadding2.text2.text2')}</p>
                    </Product>
                    <Link className='verMasBox' to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>
                        <div className='verMasBoxContent'>
                            <p>Ver Mas</p>
                            <img src={more} alt="" />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export {Home}

