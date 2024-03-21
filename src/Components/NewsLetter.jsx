import './NewsLetter.css'

export default function NewsLetter(){
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers In Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <form>
                <input type="text" placeholder="Type your email..." />
                <button>Subscribe</button>
            </form>
        </div>
    )
}