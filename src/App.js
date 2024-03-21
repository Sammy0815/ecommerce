import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import banner_men from './Components/Assets/banner_men.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'

function App() {
    return ( 
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/mens' element={<ShopCategory banner={banner_men} category='men'/>} />
                <Route path='/womens' element={<ShopCategory banner={banner_women} category='women'/> } />
                <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kid'/> } />
                <Route path='/products' element={<Products/>}>
                    <Route path=':productId' element={<Products/>} />
                </Route>
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<LoginSignup />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


