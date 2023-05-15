import './styles.css';
import cover from './img/nature.jpg';

import { ref, listAll, getDownloadURL } from 'firebase/storage';

function App() {

  return (
    <>
      <div>

        <body>
          <img className="coverPhoto" src={cover} />
          <div className="centeredTitle">Welcome.</div>
          <div className="centeredDescription">Hello, my name is Ryan, and I am a photographer.<br></br>I hope you enjoy my work!</div>
        </body>

      </div>
    </>
  );
};

export default App
