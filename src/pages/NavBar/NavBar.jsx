//import react
import { useState } from 'react'

//import i18n
import { useTranslation } from 'react-i18next';

//import styles
import './NavBar.css'

//import react router
import { NavLink } from 'react-router-dom'

//import img
import logo from '../../assets/mainImages/Logo.svg'
import esp from './assets/esp.svg'
import eng from './assets/eng.svg'
import brazil from './assets/brazil.svg'
import china from './assets/china.svg'
import arrow from './assets/arrowDown.svg'
import menu from './assets/menu.svg'
import closeIcon from './assets/cruz.svg'

const NavBar = () =>{
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isLangExpanded, setIsLangExpanded] = useState(false); 
    const [isNavExpanded,  setIsNavExpanded] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleNavClick = (path) => {
        setIsNavExpanded(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getLanguageDisplay = () => {
        switch(i18n.language) {
            case 'en': return { flag: eng, name: 'English' };
            case 'es': return { flag: esp, name: 'Español' };
            case 'pt': return { flag: brazil, name: 'Português' };
            case 'zh': return { flag: china, name: '中文' };
            default: return { flag: esp, name: 'Español' };
        }
    };

    return(
        <nav>
            <div className={isNavExpanded ? 'responsive-nav active' : 'responsive-nav'} onClick={() => setIsNavExpanded(false)}>
                <NavLink to="/"><img id='logo' src={logo} alt="logo tcc" /></NavLink>  
                <div className='closeMenuBox' onClick={() => setIsNavExpanded(false)}>
                    <img id='closeMenuIcon' src={closeIcon} alt="Cerrar menú" />
                </div>
            </div>
            <div className='mobile-nav'>
                <NavLink to="/"><img id='logo' src={logo} alt="logo tcc" /></NavLink>
                <div className='menuIconBox' onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                    <img id='menuIcon' src={menu} alt=""/>
                </div>
            </div>
            <ul className={isNavExpanded ? "navItems active" : "navItems"} id='navItems'>
                <li><NavLink to="/" onClick={() => handleNavClick('/')}>{t('HomeNavBar')}</NavLink></li>
                <li><NavLink to="/productos" onClick={() => handleNavClick('/productos')}>{t('ProductsNavBar')}</NavLink></li>
                <li><NavLink to="/contacto" onClick={() => handleNavClick('/contacto')}>{t('ContactUsNavBar')}</NavLink></li>
                <li className='languageMobile'>
                    <img src={esp} alt="esp" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('es'); }}/>
                    <img src={eng} alt="eng" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('en'); }}/>
                    <img src={brazil} alt="pt" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('pt'); }}/>
                    <img src={china} alt="zh" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('zh'); }}/>
                </li>
            </ul>
            <div className='language' onClick={() => {setIsLangExpanded(!isLangExpanded);}}>
                <button className='languageVisibleButton'>
                    <div>
                        <img src={getLanguageDisplay().flag} alt="bandera" />
                        <p>{getLanguageDisplay().name}</p>
                    </div>
                    {/* <img id='arrow' src={arrow} alt="" style={{rotate: isLangExpanded == true ? '180deg' : '0deg'}}/> */}
                    <img id='arrow' src={arrow} alt="" style={isLangExpanded == true ? {rotate: '180deg', transition: '.3s'} : {rotate: '0deg', transition: '.3s'}}/>
                </button>
                <div className={isLangExpanded ? "languageDropdown active" : "languageDropdown"}>
                    <div className='languageDropdownList'>
                        <button style={{display: i18n.language == 'es' ? 'none' : 'flex'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('es'); }}>
                            <img src={esp} alt="bandera" />
                            <p>Español</p>
                        </button>
                        <button style={{display: i18n.language == 'en' ? 'none' : 'flex'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('en');}}>
                            <img src={eng} alt="bandera" />
                            <p>English</p>
                        </button>
                        <button style={{display: i18n.language == 'pt' ? 'none' : 'flex'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('pt');}}>
                            <img src={brazil} alt="bandera" />
                            <p>Português</p>
                        </button>
                        <button style={{display: i18n.language == 'zh' ? 'none' : 'flex'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('zh');}}>
                            <img src={china} alt="bandera" />
                            <p>中文</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export {NavBar}