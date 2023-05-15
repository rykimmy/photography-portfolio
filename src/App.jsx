import { useState, useEffect } from 'react';
import './styles.css';
import sunset from './img/nature/sunset.jpg';
// import { storage } from './services/datastore.js';

import { ref, listAll, getDownloadURL } from 'firebase/storage';

function App() {

  // for uploading files
  // const imageRef = ref(storage, 'images/nature/sunset.jpg');
  // const imageListRef = ref(storage, 'film/');

  // const [imageList, setImageList] = useState([]);

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //     console.log(reponse);
  //   });
  // }, []);

  return (
    <>
      <div>

        <body>
          {/* <img className="coverPhoto" src={imageList.map((url) => {
            return <img className="coverPhoto" src={url} />
          })} /> */}
          <img className="coverPhoto" src={sunset} />
          <div className="centeredTitle">Welcome.</div>
          <div className="centeredDescription">Hello, my name is Ryan, and I am a photographer.<br></br>I hope you enjoy my work!</div>
        </body>

      </div>
    </>
  );
};

export default App
