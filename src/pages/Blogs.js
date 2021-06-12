import React from 'react'
import './Blogs.css'
import Img from '../asset/Group 114.png';
import Img1 from '../asset/blog1.png';
import Img2 from '../asset/blog2.png';
import Img3 from '../asset/blog3.png';

function Blogs() {
    return (
        <div className='welcome'>
        <div className='welcome-head'>
            <div className='welcome-logo'>
                <img src={Img} alt='logo'/>
            </div>
            <h1>Read Our Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='all-blogs'>
            <div>
                <img src={Img1} alt='logo'/>
                <h2>Big Post One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <h3>Read More</h3>
                <hr className='read'/>
            </div>
            <div>
                <img src={Img2} alt='logo'/>
                <h2>Big Post One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod.</p>
                <h3>Read More</h3>
                <hr className='read'/>
            </div>
            <div>
                <img src={Img3} alt='logo'/>
                <h2>Big Post One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <h3>Read More</h3>
                <hr className='read'/>
                <span></span>
            </div>
        </div>
    </div>
    )
}

export default Blogs
