const desktopsvg = './illustration-sign-up-desktop.svg'
const mobilesvg = './illustration-sign-up-mobile.svg'
const checksvg = './icon-list.svg'
import React, { useState } from 'react';

import {useRouter} from 'next/navigation'
import '../app/globals.css'

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

function App() {

    const [EmailName, setEmailName] = useState('');
    const router = useRouter()

    const handleEmailNameChange = (e) => {
        setEmailName(e.target.value);
    };

    async function validateEmail(e){
        e.preventDefault()
        router.push('/confirm')
        return
    }

    return (
    <div className="premaincontent">
      <div className="mainmaincontent">
        <div className="subcontentone">
          <h1 className="headertitle">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on: </p>
          <ul>
            <li>
              <img src={checksvg} alt='check icon'/>
              Product discovery and building what matters
            </li>
            <li>
              <img src={checksvg} alt='check icon'/>
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={checksvg} alt='check icon'/>
              And much more
            </li>
          </ul>
          <div className="form-container">
            <p>Email address </p>
            <form id='fill-me'>
              <input type="text" placeholder="email@company.com" onInput={handleEmailNameChange}/>
              <button onClick={validateEmail}>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
        <div className="subcontenttwo">
        <picture >
          <source media="(max-width: 660px)" srcSet={mobilesvg}/>
          <source media="(min-width: 660px)" srcset={desktopsvg}/>
         
          <img className='img2' id="main-img" src={desktopsvg} alt="Main Image" />
        </picture>
          {/* <img
            className='img2'
            id='main-img'
            src={desktopsvg}
            alt='bg image'/> */}
            
          
          {/* <img
            className="img2"
            id="main-img"
            src={desktopsvg}
          /> */}
        </div>
      </div>
    </div>
    );
}

export default App;
