import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offer from '../Components/Offer'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

export default function Shop(){
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <NewsLetter />
            <Footer />
        </div>
    )
}