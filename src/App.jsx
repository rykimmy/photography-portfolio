import { useState } from 'react'
import NavBar from './components/NavBar'
import './styles.css'

function App() {

  return (
    <>
      <div>
        <NavBar />

        <body>
          <img className="coverphoto" src="watersplash.jpg" />
          <div className="centeredTitle">Welcome.</div>
          <div className="centeredDescription">Hello, my name is Ryan, and I am a photographer.<br></br>I hope you enjoy my work!</div>
        </body>

        <footer>
          <a className="contact" href="mailto:rysjkim@gmail.com"><img className="contactimg" src="./email.png" /></a>
          <a className="contact" target="_blank" href="https://www.linkedin.com/in/ryan-kim-b013b81bb"><img className="contactimg" src="linkedin.png" /></a>
        </footer>
      </div>
    </>
  )
}

export default App
