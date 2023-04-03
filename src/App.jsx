import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PriceList from './Components/PriceList'
import Dashboard from './Components/Dashboard'
import PhoneBar from './Components/PhoneBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList />
      <Dashboard />
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
