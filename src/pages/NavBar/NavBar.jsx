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


const NavBar = () =>{
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isLangExpanded, setIsLangExpanded] = useState(false);

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
            <NavLink to="/"><img id='logo' src={logo} alt="logo tcc" /></NavLink>
            <ul id='navItems'>
                <li><NavLink to="/">{t('HomeNavBar')}</NavLink></li>
                <li><NavLink to="/productos">{t('ProductsNavBar')}</NavLink></li>
                <li><NavLink to="/contacto">{t('ContactUsNavBar')}</NavLink></li>
            </ul>
            <div className='language' onClick={() => {setIsLangExpanded(!isLangExpanded);}}>
                <button>
                    <img src={changeLanguageButton()[1]} alt="bandera" />
                    <p>{changeLanguageButton()[0]}</p>
                </button>
                <div className={isLangExpanded ? "languageDropdown active" : "languageDropdown"}>
                    <div className='languageDropdownList'>
                        <button onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('es');}}>
                            <img src={esp} alt="bandera" />
                            <p>Español</p>
                        </button>
                        <hr />
                        <button onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('en');}}>
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