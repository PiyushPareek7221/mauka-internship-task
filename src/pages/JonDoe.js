import React from 'react'
import './JonDoe.css'
import Img from '../asset/Group 86.png';
import star from '../asset/star.png';
import Jan from '../asset/jan.png';
import Img2 from '../asset/Group 134.png';
function JonDoe() {
    return (
        <div className='welcome'>
            <div className='welcome-head'>
                <div className='welcome-logo'>
                    <img src={Img} />
                </div>
                <div className='jon-logo'>
                    <img src={Jan} />
                </div>
                <h1>Jane Doe</h1>
                <div className='bottom-dots'>
                    <img className='star' src={star} />
                    <img className='star' src={star} />
                    <img className='star' src={star} />
                    <img className='star' src={star} />
                    <img className='star' src={star} />
                </div>
                <p>Thank you for all the amazing produce and products you deliver each week…</p>
                <p>you make my life so easy an bring goodness into our family eating. </p>
                <p>I’ve been ro asting a lot of brussel sprouts and</p>
                <div className='bottom-dots'>
                    <span className="dot blue"></span>
                    <span className="dot "></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <img className='flower' src={Img2} />
            <div className='subscribe'>
                <h1>Subscribe to Our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form>
                    <input type="text" className="textbox" placeholder="Enter Your email address" />
                    <input title="Search" value="Subscribe" type="submit" className="button" />
                </form>
            </div>
        </div>
    )
}

export default JonDoe
