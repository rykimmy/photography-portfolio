import { useState } from 'react';
import './styles.css';
import sunset from './img/nature/thesunset.jpg';

function App() {

  return (
    <>
      <div>

        <body>
          <img className="coverPhoto" src={sunset} />
          <div className="centeredTitle">Welcome.</div>
          <div className="centeredDescription">Hello, my name is Ryan, and I am a photographer.<br></br>I hope you enjoy my work!</div>
        </body>

      </div>
    </>
  );
};

export default App
