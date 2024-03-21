import breadcrum_arrow from './Assets/breadcrum_arrow.png'
import './Breadcrum.css'

export default function Breadcrum(props) {
    const {product} = props;
    return (
        <div className="breadcrum">
            Home <img src={breadcrum_arrow} alt='' /> Shop <img src={breadcrum_arrow} alt='' /> {product.category} <img src={breadcrum_arrow} alt='' /> {product.name}
        </div>
    )
}