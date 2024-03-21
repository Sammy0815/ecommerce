import './RelatedProducts.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import ProductItems from './ProductItems'

export default function RelatedProducts(){
    const {all_product} = useContext(ShopContext)
    const relatedProducts = all_product.slice(8, 12);
    return (
        <div className='related-products'>
           <h2>Related Products</h2>
           <div className='related-underline'></div>
            <div className='related-products-items'>
                {
                relatedProducts.map((product, index)=>
                    <ProductItems
                        key = {index}
                        id = {product.id}
                        productName = {product.name}
                        productImage = {product.image}
                        productOldPrice = {product.old_price}
                        productNewPrice = {product.new_price}
                      />
                )
            }
            </div>
        </div>
    )
}