import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='welcome'>
      <div className='day'>
        <img src=".\src\assets\logos\slipknot.png" alt="slipknot" className='logo' width={50%}/>
        <img src=".\src\assets\logos\maneskin.png" alt="maneskin" className='logo'/>
        <img src=".\src\assets\logos\linkinpark.png" alt="linkinpark" className='logo'/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum magni natus, iure, laborum beatae error hic quas alias, officiis ipsa culpa dignissimos commodi corporis unde aliquam. Sapiente maxime exercitationem odio.</p>
      </div>

      <div className='day'>
        <h1>SLEEP TOKEN</h1>
        <h1>BAD OMENS</h1>
        <h1>RAMMSTEIN</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod alias sed sapiente iste delectus. Alias ullam pariatur repellat ratione ad? Fugiat eaque quam officia suscipit voluptates soluta nesciunt architecto consequatur.</p>
      </div>

      <div className='day'>
        <h1>BRING ME THE HORIZON</h1>
        <h1>MUSE</h1>
        <h1>MARILYN MANSON</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, commodi veniam asperiores deserunt vitae delectus! Sapiente rerum quis porro, aut, expedita, esse odit cum voluptatem temporibus perspiciatis exercitationem officiis inventore!</p>
      </div>

      <div className='day'>
        <h1>MOTIONLESS IN WHTIE</h1>
        <h1>FRANZ FERDINAND</h1>
        <h1>REDZED</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae fugit saepe dolorum pariatur praesentium iure quos ab, maxime vitae beatae perspiciatis necessitatibus ea molestiae reiciendis quidem? Aliquid, quo aliquam?</p>
      </div>
    </div>
  )
}

export default App
