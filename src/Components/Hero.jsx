import './Hero.css'
import hand_icon from './Assets/hand_icon.png'
import arrow from './Assets/arrow.png'
import hero_image from './Assets/hero_image.png'

export default function Hero(){
    return (
      <div className="hero">
        <div className="hero-left">
            <h3>NEW ARRIVALS ONLY</h3>
            <div className="new-and-hand">
                <p>new</p>
                <img src={hand_icon} className="hand-icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
                <span>Latest Collection</span>
                <img src={arrow} />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} />
        </div>
      </div>
  )
}