
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOption/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'
import MarksChat from './components/MarksChat/MarksChat'
import axios from 'axios'

function App() {
const pricingPromise = fetch('pricingData.json')
.then(res => res.json())
// const markPromise =axios.get('marksData.json')
const markPromese = axios.get('marksData.json')


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
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
      <MarksChat markPromese={markPromese}></MarksChat>

      </Suspense>

      <ResultChart></ResultChart>
    </main>

    </>
  )
}

export default App
