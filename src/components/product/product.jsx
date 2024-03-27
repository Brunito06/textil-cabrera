//import styles
import './product.css'

//import image
import imgMaterial from './assets/capas.png'
import imgPackage from './assets/box.png'

const Product = ({img, title, materials, pack}) =>{
    return(
        <article>
            <img src={img} alt={`imagen de ${title}`} />
            <div>
                <p className='productTitle'>{title}</p>
                <div>
                    <img src={imgMaterial} alt="Material" />
                    <p>{materials}</p>
                </div>
                <div>
                    <img src={imgPackage} alt="package" />
                    <p>{pack}</p>
                </div>
            </div>
        </article>
    );
}

export {Product}