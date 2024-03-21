import './Offer.css'
import exclusive_image from "./Assets/exclusive_image.png"

export default function Offer(){
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive <br/> Offers For You</h1>
                <p><b>ONLY ON BEST SELLERS PRODUCT</b></p>
                <button className="grow">Check Now</button>
            </div>
            <div className="offers-right">
                <img className="offer-right-img" 
                    src={exclusive_image} />
            </div>
        </div>
        
    )
}