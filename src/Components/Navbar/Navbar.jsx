import React from 'react'
import './Navbar.css'
import './NavbarMobile.css'
import logo from '../Assets/logo.png'
import navbar_logo from '../Assets/mobile_nav_icon.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'


export default function Navbar() {
    const { useState } = React;
    const [menu, setMenu] = useState("");
    const { cartButton } = useContext(ShopContext)
    
    return (
        <div className="navbar">
            <div className='nav-logo'> 
                <img className='mobile-menu-icon' src={navbar_logo} alt=''/>
                <img className='logo-img' src={logo} alt=''/>
                <h2>SHEKINAH STORES</h2>  
            </div>
            <ul>
              <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link>{menu==="shop" ?<hr/> : <span></span>}</li>
              
              <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: "none"}} to='mens'>Men</Link>{menu==="men" ? <hr/> : <span></span>}</li>
              
              <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: "none"}}to='womens'>Women</Link>{menu==="women" ?<hr/> : <span></span>}</li>
              
              <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: "none"}}to='kids'>Kids</Link>{menu==="kids" ?<hr/> : <span></span>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} className={cartButton ? "animCart" : ""} /></Link>
                <Link to='/cart'><div className="nav-cart-count"> 0</div></Link>
            </div>
            
            <div className='navbar-mobile'>
                
            </div>

        </div>
    )
}