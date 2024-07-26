import Header from "../../data/Header";
import HeaderImg from '../atoms/HeaderImg';

function Headerr() {
    return (
        
        Header.products.map (product => {
            return (<>
                    <HeaderImg Link={product.image}></HeaderImg>
                </>)
        }
    ))
}   

export default Headerr;