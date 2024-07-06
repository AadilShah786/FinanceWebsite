import { useState } from 'react'
import Dashboard from '../Client/Dashboard'
import WhyChooseUs from './Whyus'
import Hero2 from './hero2'
import HowItWorks from './Working'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Faq from './Faq'
import Navbar from './Nav'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Hero2 />
            <WhyChooseUs />
            {/* <HowItWorks/> */}
            <Pricing />
            <Testimonials />
            <Faq />
            {/* <Footer /> */}
        </>
    )
}

export default App
