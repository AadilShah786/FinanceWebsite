import { useState } from 'react'
import Dashboard from '../Client/Dashboard'
import WhyChooseUs from './Whyus'
import Hero2 from './hero2'
import HowItWorks from './Working'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Hero2/>
            <WhyChooseUs/>
            <HowItWorks/>
        </>
    )
}

export default App
