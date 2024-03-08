import { useState } from 'react'
import './App.css'
import NavbarSearch from './components/NavbarSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{background: 'linear-gradient(180deg, #594cee 0%, #8dd0f5 100%)',width:'90%',maxWidth:"500px",margin:"0 auto",padding:"3em 2em",marginTop:"5em",
    position:'absolute',transform:'translate(-50%)',left:'50%',right:'50%',borderRadius:'1em',paddingBottom:'3em'}}>
        <NavbarSearch/>
      </div>
    </>
  )
}

export default App
