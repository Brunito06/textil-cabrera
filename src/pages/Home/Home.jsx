//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import more from "./assets/more.svg"
import sample from "./assets/backgroundBlur.mp4"
import factory from "./assets/factory.svg"
import camion from "./assets/camion.svg"
import trayectoria from "./assets/trayectoria.svg"

//import components
import { Product } from '../../components/product/product';

const Home = () =>{
    const { t } = useTranslation();

    return(
        <div className='home'>
                <header>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={sample} type='video/mp4' />
                    </video>
                    <div className='headerText'>
                        <div>
                            <h1>Textil Cabrera</h1>
                            <p>{t('HomeText')}</p>
                        </div>
                        <Link to="/productos"><button>{t('ProductsButton')}</button></Link>
                    </div>
                </header>
                <div className='aboutUs'>
                        <div className='aboutUs-cards'>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={factory} alt="Fabrica" />
                                </div>
                                    <h3>{t('WhoAreWeTitle')}</h3>
                                    <p>{t('WhoAreWeText')}</p>
                            </div>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={trayectoria} alt="Trayectoria" />
                                </div>
                                    <h3>{t('ExperienceTitle')}</h3>
                                    <p>{t('ExperienceText')}</p>
                            </div>
                            <div className='aboutUs-card'>
                                <div className='image'>
                                    <img src={camion} alt="Camion" />
                                </div>
                                    <h3>{t('SaleTitle')}</h3>
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
                    <Product num="product15" title={t('SilicionWadding2.title')}>
                        <p>{t('SilicionWadding2.text1.text1')}<span>{t('SilicionWadding2.text1.bold')}</span>{t('SilicionWadding2.text1.text2')}</p>
                        <p>{t('SilicionWadding2.text2.text1')}<span>{t('SilicionWadding2.text2.bold')}</span>{t('SilicionWadding2.text2.text2')}</p>
                    </Product>
                    <Product num="product16" title={t('WaddingInBlanket.title')}>
                        <p>{t('WaddingInBlanket.text1.text1')}<span>{t('WaddingInBlanket.text1.bold')}</span>{t('WaddingInBlanket.text1.text2')}</p>
                        <p>{t('WaddingInBlanket.text2.text1')}<span>{t('WaddingInBlanket.text2.bold')}</span>{t('WaddingInBlanket.text2.text2')}</p>
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

