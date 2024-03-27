//import styles
import './Products.css'

//import components
import { Product } from '../../components/product/product';

//import img
import EstopaBlancaA from '../../assets/photos/EstopaBlancaA.png'

const Products = () =>{
    return(
        <div className='products'>
            <Product img={EstopaBlancaA} title="Estopa Blanca A" materials={"Recortes de tejido (recuperado), se destaca por su alto porcentaje de <span>algodón<span/>, blanco / crema"}/>
        </div>
    );
}

export {Products}