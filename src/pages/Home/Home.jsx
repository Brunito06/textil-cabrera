//import styles
import './Home.css'

//translation
import { useTranslation } from 'react-i18next';

//import react router
import { Link } from 'react-router-dom';

//import img
import more from "./assets/more.svg"
import sample from "./assets/backgroundBlur.mp4"

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
                            <p>Materiales de calidad, resultados extraordinarios</p>
                        </div>
                        <Link to="/productos"><button>Ver nuestros productos</button></Link>
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

