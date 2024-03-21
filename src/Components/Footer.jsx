import './Footer.css'
import logo from './Assets/logo.png'
import instagram_icon from './Assets/instagram_icon.png'
import pintester_icon from './Assets/pintester_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'

export default function Footer(){
return (
    <div className="footer">
        <div className="footer-logo-div">
            <img src={logo} className="footer-logo" />
            <h2>SHEKINAH STORES</h2>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Ofices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <img src={instagram_icon} />
            <img src={pintester_icon} />
            <img src={whatsapp_icon} />
        </div>
        <div className="footer-copyright">
            Copyright @ 2024 - All Right Reserved
        </div>
        
    </div>
)}