import './Popular.css'
import { Link } from 'react-router-dom'

export default function ProductItems(props){
    return (
        <div className="product-item grow">
            <Link to={`/products/${props.id}`}><img src={props.productImage} onClick={window.scrollTo(0, 0)} alt='' /> </Link>
            <p className="product-name">{props.productName}</p>
            <div className="prices">
                {<span  className="new-price">${props.productNewPrice}</span>}
                <span className="old-price">${props.productOldPrice}</span>
            </div>
        </div> 
    )
}