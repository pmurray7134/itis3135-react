import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from "./Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <main>
        <h2>Home</h2>
        <p>Hello, you've made it to my ITSC3135 Course page</p>
    </main>
      <Footer/>
    </>
  )
}

export default App
