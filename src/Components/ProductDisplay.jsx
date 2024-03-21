import './ProductDisplay.css'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
import {ShopContext} from '../Context/ShopContext'
import { useContext } from 'react'

let clone = false;

export default function ProductDisplay(props) {
    const {addToCart, cartButton, setCartButton} = useContext(ShopContext)
    const {product} = props;
    
    function addToCartAndAnimate(){
        addToCart(product.id)
        setCartButton(true)
//        setTimeout(setCartButton(false), 6500)
    }

    
    return (
        <div className='productDisplay'>
          <div className='productDisplay-left'>
              <div className='productDisplay-img-list'>
                  <img src={product.image} className='grow' alt=''/>
                  <img src={product.image} className='grow' alt=''/>
                  <img src={product.image} className='grow' alt=''/>
                  <img src={product.image} className='grow' alt=''/>
              </div>
              <div className='productDisplay-main-image'>
                  <img src={product.image} alt='' />
              </div>
          </div>
          <div className='productDisplay-right'>
              <h2> {product.name} </h2>
              <div className='productDisplay-right-stars'>
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_dull_icon} alt=''/>
                  <p className='fs-14'>(122)</p>
              </div>
              <div className='productDisplay-right-prices'>
                  <p className='productDisplay-oldPrice'>${product.old_price}</p>
                  <p className='productDisplay-newPrice'>${product.new_price}</p>
              </div>
              <p className='productDisplay-right-info fs-14'>
                  A lightweight, usually knitted pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an under shirt or outer garment.
              </p>
              <div className='productDisplay-right-sizesDiv'>
                  <h4 className='select-size'>Select Size</h4>
                  <div className='size-unit-div'>
                      <div className='small size'>S</div>
                      <div className='medium size'>M</div>
                      <div className='large size'>L</div>
                      <div className='extraLarge size'>XL</div>
                      <div className='xxl size'>XXL</div>
                  </div>
              </div>
              <button className='addCartBtn grow' onClick={()=>addToCartAndAnimate()}>ADD TO CART</button>
              <div className='cat-tag'>
                  <p><strong>Category: </strong>Women T-shirt, Crop Top</p>
                  <p><strong>Tags: </strong>Moden, Latest</p>
              </div>
          </div>
           {
                cartButton ? <img src={product.image} className={cartButton ? "cloned" : ""} /> : ""
            }           
            
        </div>
    )
}