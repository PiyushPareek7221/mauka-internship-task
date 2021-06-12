import React from 'react'
import './Welcome.css'
import Img from '../asset/Group 114.png';
import Img2 from '../asset/Group 207.png';
import Img3 from '../asset/Group 205.png';
function Welcome() {
    return (
        <div className='welcome'>
            <div className='welcome-head'>
                <div className='welcome-logo'>
                    <img src={Img} alt='logo'/>
                </div>
                <h1>Welcome to Nature</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='welcome-food'>
                <div className='img1'>
                    <img src={Img2} alt='logo'/>
                </div>
                <div>
                    <img src={Img3} alt='logo'/>
                </div>
                <div className='img2'>
                    <img src={Img2} alt='logo'/>
                </div>
                <div className='img2'> 
                    <img src={Img2} alt='logo'/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
