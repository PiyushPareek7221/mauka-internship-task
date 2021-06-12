import React from 'react'
import './Intro.css'
import Logo from '../asset/Group 220.png';
import Img1 from '../asset/Group 228.png';
import Img2 from '../asset/Group 195.png';
function Introduction() {
    return (
        <div className='intro'>
            <nav className='nav'>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    <h1>organic</h1>
                </div>
                <div className='links'>
                    <h3 className='home'>Home</h3>
                    <h3>Products</h3>
                    <h3>Blog</h3>
                    <h3>About Us</h3>
                    <span>Contact</span>
                </div>
            </nav>
            <div className='head'>
                <div className='left-content'>
                    <h2>Healthy life with</h2>
                    <h1>Nature Organic</h1>
                    <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
                    <button>Explore Now</button>
                </div>
                <div className='right-content'>
                    <img className='front-image' src={Img2} alt='logo'/>
                     <div>
                         <img className='background-image' src={Img1} alt='logo'/>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
