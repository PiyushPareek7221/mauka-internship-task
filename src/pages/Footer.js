import React from 'react'
import './Footer.css'
import Img from '../asset/Group 229.png';
import Img1 from '../asset/Group 225.png';
import Img2 from '../asset/Group 99.png';
import Img3 from '../asset/Group 100.png';
import Img4 from '../asset/Group 105.png';

function Footer() {
    return (
        <div className='footer'>
            <img src={Img} alt='logo'/>
            <div className='contact-details'>
                <div className='first'>
                    <div>
                        <img src={Img1} alt='logo'/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <hr className='line'/>
                    <h3>© Copyright 2020 Nature</h3>
                </div>
                <div className='second'>
                    <h2>Information</h2>
                    <hr className='info'/>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>Contact Us</p>
                    <p>Terms of service</p>
                </div>
                <div className='third'>
                    <h3>Follow Us</h3>
                    <hr className='info'/>
                    <div className='hyperlinks'>
                        <img src={Img2} alt='logo'/>
                        <img src={Img3} alt='logo'/>
                        <img src={Img4} alt='logo'/>
                        <img src={Img2} alt='logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
