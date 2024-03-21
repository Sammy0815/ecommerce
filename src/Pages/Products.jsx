import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext.jsx'
import ProductDisplay from '../Components/ProductDisplay.jsx'
import Breadcrum from '../Components/Breadcrum'
import DescriptionBox from '../Components/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts'

export default function Products(props){
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
    return (    
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}