//import react
import { useState } from 'react'

//import i18n
import { useTranslation } from 'react-i18next';

//import styles
import './NavBar.css'

//import react router
import { NavLink } from 'react-router-dom'

//import img
import logo from './assets/logo.png'
import esp from './assets/esp.png'
import eng from './assets/eng.png'
import arrow from './assets/arrowDown.svg'
import menu from './assets/menu.svg'


const NavBar = () =>{
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isLangExpanded, setIsLangExpanded] = useState(false); 
    const [isNavExpanded,  setIsNavExpanded] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    const changeLanguageButton = () =>{
        let txt
        let img
        if (i18n.language == 'en'){
            txt = "English"
            img = eng

        }else{
            txt = "Español"
            img = esp
        }
        return([txt, img]);
    }

    return(
        <nav>
            <div className='mobile-nav'>
                <NavLink to="/"><img id='logo' src={logo} alt="logo tcc" /></NavLink>
                <img id='menuIcon' src={menu} alt="" onClick={() => {setIsNavExpanded(!isNavExpanded);}}/>
            </div>
            <ul className={isNavExpanded ? "navItems active" : "navItems"} id='navItems'>
                <li><NavLink to="/" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>{t('HomeNavBar')}</NavLink></li>
                <li><NavLink to="/productos" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>{t('ProductsNavBar')}</NavLink></li>
                <li><NavLink to="/contacto" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>{t('ContactUsNavBar')}</NavLink></li>
                <li className='languageMobile'>
                    <img src={eng} alt="eng" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('en'); }}/>
                    <img src={esp} alt="esp" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('es'); }}/>
                </li>
            </ul>
            <div className='language' onClick={() => {setIsLangExpanded(!isLangExpanded);}}>
                <button className='languageVisibleButton'>
                    <div>
                        <img src={changeLanguageButton()[1]} alt="bandera" />
                        <p>{changeLanguageButton()[0]}</p>
                    </div>
                    <img src={arrow} alt="" style={{rotate: isLangExpanded == true ? '180deg' : '0deg', transition: '.3s'}}/>
                </button>
                <div className={isLangExpanded ? "languageDropdown active" : "languageDropdown"}>
                    <div className='languageDropdownList'>
                        <button style={{display: i18n.language == 'en' ? 'flex' : 'none'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('es'); }}>
                            <img src={esp} alt="bandera" />
                            <p>Español</p>
                        </button>
                        <button style={{display: i18n.language == 'es' ? 'flex' : 'none'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('en');}}>
                            <img src={eng} alt="bandera" />
                            <p>English</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export {NavBar}