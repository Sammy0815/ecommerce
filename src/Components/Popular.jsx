import all_product from './Assets/all_product.js'
import './Popular.css'
import ProductItems from './ProductItems'
import {ShopContext} from '../Context/ShopContext.jsx'
import { useContext } from 'react'


export default function Popular(){ 
    const {all_product} = useContext(ShopContext)
    const popularWomen = all_product.slice(0, 4)
        
    return (
        <div className='popular'>
            <div className='popular-women'>
                <h2 className="popular-women-title">POPULAR IN WOMEN</h2>
                <div className="popular-women-underline"></div>
                <div className="popular-women-products">
                    {
                    popularWomen.map((product, index)=>
                        product.category === "women" ? 
                        <ProductItems
                            key = {index}
                            id = {product.id}
                            productName = {product.name}
                            productImage = {product.image}
                            productOldPrice = {product.old_price}
                            productNewPrice = {product.new_price}
                          /> : ""
                        )
                    }
                    
                </div>
            </div>
        </div>
  )
}