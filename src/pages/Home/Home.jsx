//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import more from "./assets/more.svg"
import factory from "./assets/factory.svg"
import camion from "./assets/camion.svg"
import trayectoria from "./assets/trayectoria.svg"
import background2 from "./assets/background2.avif"
import background3 from "./assets/background3.webm"

//import components
import { Product } from '../../components/product/product';

const Home = () =>{
    const { t } = useTranslation();

    return(
        <div className='home'>
                <header>
                    <video className='videoTag' autoPlay loop muted playsInline preload="none" poster={background2}
                    onLoadedMetadata={(e) => e.target.play()} data-nosnippet
                    >
                        <source src={background3} type='video/webm' />
                    </video>
                    <div className='headerText'>
                        <div>
                            <h1>Textil Cabrera</h1>
                            <p>{t('HomeText')}</p>
                        </div>
                        <Link to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}><button>{t('ProductsButton')}</button></Link>
                    </div>
                </header>
                <div id='quienesSomos' className='aboutUs'>
                        <div className='aboutUs-cards'>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={factory} alt="Fabrica" />
                                </div>
                                    <h2>{t('WhoAreWeTitle')}</h2>
                                    <p>{t('WhoAreWeText')}</p>
                            </div>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={trayectoria} alt="Trayectoria" />
                                </div>
                                    <h2>{t('ExperienceTitle')}</h2>
                                    <p>{t('ExperienceText')}</p>
                            </div>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={camion} alt="Camion" />
                                </div>
                                    <h2>{t('SaleTitle')}</h2>
                                    <p>{t('SaleText')}</p>
                            </div>
                    </div>
                </div>
                    <h2 className='highLightProductsTitle'>{t('ProductsTitle')}</h2>
                    <div className='products'>   
                    <Product num="product14" title={t('SilicionWadding5.title')}>
                        <p>{t('SilicionWadding5.text1.text1')}<span>{t('SilicionWadding5.text1.bold')}</span>{t('SilicionWadding5.text1.text2')}</p>
                        <p>{t('SilicionWadding5.text2.text1')}<span>{t('SilicionWadding5.text2.bold')}</span>{t('SilicionWadding5.text2.text2')}</p>
                    </Product>
                    <Product num="product7" title={t('ColorRags525.title')}>
                        <p>{t('ColorRags525.text1.text1')}<span>{t('ColorRags525.text1.bold')}</span>{t('ColorRags525.text1.text2')}</p>
                        <p>{t('ColorRags525.text2.text1')}<span>{t('ColorRags525.text2.bold')}</span>{t('ColorRags525.text2.text2')}</p>
                    </Product>
                    <Product num="product11" title={t('NonWovenRags.title')}>
                        <p>{t('NonWovenRags.text1.text1')}<span>{t('NonWovenRags.text1.bold')}</span>{t('NonWovenRags.text1.text2')}</p>
                        <p>{t('NonWovenRags.text2.text1')}<span>{t('NonWovenRags.text2.bold')}</span>{t('NonWovenRags.text2.text2')}</p>
                    </Product>
                    <Link className='verMasBox' to='/productos' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}}>
                        <div className='verMasBoxContent'>
                            <p>{t('SeeMoreButton')}</p>
                            <img src={more} alt="more" />
                        </div>
                    </Link>
                </div>
        </div>
    );
}

export {Home}

