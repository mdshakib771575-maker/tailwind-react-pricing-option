
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOption/PricingOption'

function App() {
const pricingPromise = fetch('pricingData.json')
.then(res => res.json())

  return (
    <>
    
    <header>
      <Navbar></Navbar>
     {/* <DaisyNav></DaisyNav> */}
    <h2 className='text-7xl'>Hello React</h2>
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <PricingOption  pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
    </main>

    </>
  )
}

export default App
