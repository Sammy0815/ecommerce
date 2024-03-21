import all_product from './Assets/all_product.js'
import './NewCollections.css'

const newCollections = all_product.slice(10, 18)


//New Collections Component
export default function NewCollections(){
    return (
        <div className="new-collections">
            <h2 className="new-coll-title">NEW COLLECTIONS</h2>
                <div className="new-coll-underline"></div>
                <div className="new-coll-products">
                    {
                    newCollections.map(product=>
                        <div className="new-coll-item grow" 
                            key={product.id}>
                            <img src={product.image} /> 
                            <p className="product-name">{product.name}</p>
                            <div className="prices">
                                <span  className="new-price">${product.new_price}</span><span className="old-price">${product.old_price}</span>
                            </div>
                        </div> 
                    )
                    }
                    
                </div>
        </div>
    )
}