//import styles
import './Home.css'

//import react router
import { Link } from 'react-router-dom';


const Home = () =>{
    return(
        <div className='home'>
            <header>
                <h1>TEXTIL CABRERA</h1>
            </header>

            <section className='homeQuienesSomos'>
                <div className='homeSection1Text'>
                    <h2>¿Quienes somos?</h2>
                    <p id='quienesSomosText'>Somos una Empresa bajo el rubro de reciclaje textil fundada en 1989. Estamos dedicados a la fabricación de artículos de limpieza industrial (trapos, guatas, estopa, trapos no tejidos (TNT), etc.) y otros productos de calidad.</p>
                    <div className='vendemos-box'>
                        <h3>Vendemos a todo el país.</h3>
                        <p>Envios de Pando a Montevideo sin costo. Fuera del reparto, se envia por agencia de preferencia del cliente.</p>
                    </div>
                </div>
                <span id='quienesSomosImg'></span>
            </section>

            <section className='guata'>
                <div className='guataBox'>
                    <div className='queEsGuata'>
                        <h2>¿Qué es la Guata?</h2>
                        <p>La guata es un material versátil utilizado en la fabricación de una variedad de productos. Consiste en una capa de fibras de poliéster que se aglomeran y comprimen para formar una superficie suave y esponjosa.</p>
                    </div>
                    <div className='usosGuata'>
                        <div className='usosGuataTexto'>
                            <h3>¿Cuáles son sus usos?</h3>
                            <p>La guata tiene una amplia gama de aplicaciones, desde el relleno de almohadas, edredones y peluches, hasta la creación de acolchados, aislamientos térmicos en prendas de vestir e incluso en la industria automotriz para la fabricación de asientos. Este material proporciona tanto estructura como comodidad, adaptándose a diversas necesidades en distintos sectores.</p>
                            <Link><input type="button" value="Contactanos" /></Link>
                        </div>
                        <span id='guataUsosImg'></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export {Home}

