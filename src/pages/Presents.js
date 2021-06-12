import React from 'react'
import Img from '../asset/Group 39.png';
import Img2 from '../asset/Group 64.png';
import Img3 from '../asset/Group 55.png';
import './Presents.css'
function Presents() {
    return (
        <div className='presents'>
            <div className='presents-head'>
                <h1>Proudly presented by</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='presents-logo'>
                <div>
                    <img src={Img} alt='logo'/>
                </div>
                <div>
                    <img src={Img2} alt='logo'/>
                </div>
                <div>
                    <img src={Img3} alt='logo'/>
                </div>
                <div>
                    <img src={Img2} alt='logo'/>
                </div>
                <div>
                    <img src={Img} alt='logo'/>
                </div>
            </div>
            <div className='bottom-dots'>
                <span className="dot"></span>
                <span className="dot blue"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Presents
