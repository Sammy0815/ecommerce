import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext.jsx'
import { useContext } from 'react'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import ProductItems from '../Components/ProductItems.jsx'

export default function ShopCategory(props){
    const {all_product} = useContext(ShopContext)
    return (
        <div className='shopCategory'>
            <div className='shopCategoryBannerDiv'>
            <img src={props.banner} /> 
            </div>
            <div className='shopCategoryIndexSort'>
                <p><b>Showing 1 - 12</b> of 36 products</p>
                <div className='shopCategorySort'>
                <p>Sort by</p>
                <img className='dropdown' src={dropdown_icon} alt='' />
            </div>
            </div>
            
            <div className='shopCategoryProducts'>
                {
                    all_product.map((item, index)=>
                    item.category === props.category ? 
                        <ProductItems
                            key = {index}
                            id = {item.id}
                            productName = {item.name}
                            productImage = {item.image}
                            productOldPrice = {item.old_price}
                            productNewPrice = {item.new_price}
                          /> : ""
                    )
                }
            </div>
            <div className='showMore'>
                Show More
            </div>
        </div>
    )
} 