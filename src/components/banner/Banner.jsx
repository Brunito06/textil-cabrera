//imoprt styles
import './Banner.css'

const Banner = ({num, title}) =>{
    return(
        <div className="banner" id={num}>
            <h1>{title}</h1>
        </div>
    );
}

export {Banner}