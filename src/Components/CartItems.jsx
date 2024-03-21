import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

export default function CartItems(product){
    const {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
    
    return (
        <div className='cart-items'>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    all_product.map((e)=>
                        cartItems[e.id] > 0 &&
                    <tr key={e.id}>
                        <td><img src={e.image} className='cart-item-image'/></td>
                        <td className='title'>{e.name}</td>
                        <td>${e.new_price}</td>
                        <td>{cartItems[e.id]}</td>
                        <td>${e.new_price * cartItems[e.id]}</td>
                        <td className='remove' onClick={()=>removeFromCart(e.id)}>X</td>
                    </tr> 
                    )
                    }
                </tbody>
            </table>
            
            <div className='cart-totals'>
                <div className='cart-totals-left'>
                    <h3>Cart Totals</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>subtotal</td>
                                <td>${getTotalCartAmount()}</td>
                            </tr>
                            <tr>
                                <td>shipping fee</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td className="total-row">Total</td>
                                <td className="total-row">${getTotalCartAmount()}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='proceedBtn'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-totals-right'>
                    <p>If you have a promo code, enter it here</p>
                    <form> 
                        <input tssype="text" placeholder="promo code"></input>
                        <button className='submitBtn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}