//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import more from "./assets/more.svg"
import img2 from "../../assets/photos/TNT/BannerTNT.avif"
import img1 from "./assets/imgHeader1.avif"

//import components
import { Product } from '../../components/product/product';

const Home = () =>{
    const { t } = useTranslation();

    return(
        <div className='home'>
                <header>
                    <div className='headerBox'>
                        <div className='headerTitle'>
                            <div>
                                <h1>Textil Cabrera</h1>
                                <p>Materiales de calidad, resultados extraordinarios</p>
                            </div>
                        </div>
                        <div className='headerDown'>
                            <div className='headerDown-left'>
                                <img id='img1' src={img1} alt="guata" />
                                <Link to="/contacto"><button>Ver nuestros productos</button></Link>
                            </div>
                            <div className='headerDown-right'>
                                <img id='img2' src={img2} alt="tnt" />
                            </div>
                        </div>
                    </div>
                </header>
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
        </div>
    );
}

export {Home}

