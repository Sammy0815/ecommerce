import { createContext } from 'react'
import all_product from '../Components/Assets/all_product.js'
import { useState } from 'react'

export const ShopContext = createContext(null);

//  function cloneItemImage(itemId){
//        const itemInfo = all_product.find((product)=>(product.id===itemId))
//        console.log(itemInfo.name)
//    }

function getDefaultCart(){
    let cart = {}
    for(let index = 0; index<all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart; 
} 


export default function ShopContextProvider(props){
    
    const [cartItems, setCartItems] = useState(getDefaultCart);
    let addedToCart = false;
    
    function getTotalCartAmount(){
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>(product.id===Number(item)))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        }  
    }
    
    const [cartButton, setCartButton] = useState(false)
   
    
    function addToCart(itemId, addedToCart){
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    function removeFromCart(itemId){
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, cartButton, setCartButton};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}