import React from 'react';
import imagePicture from '../images/picture.png'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Banar = () => {
    return (
        <div id='Home' className='header-part'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header-content'>
                            <div className='header-section'>
                            <ul className='header__ul'>
                                <li>
                                    <div>
                                        <a href="https://www.facebook.com/rejaraju2k1" target={"_blank"}><FaFacebook /></a>
                                    </div>
                                    
                                </li>
                                <li>
                                    <FaInstagramSquare />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaWhatsapp />
                                </li>
                            </ul>
                            <h1> Md Rejaul Islam Raju </h1>
                            <p>
                            <span>A Trusted Digital Service Agency To Help Your Business reaches The Ultimate Goal</span>
                            <br />
                            <strong style={{color:'#ed1858', fontSize:'40px'}}>I love Coading</strong>
                            <br />
                            <span style={{fontSize:'17px'}}>I will create a professional website Or convert, clone, Copy any website you want by elementor page bulider. React JS is basically a JavaScript library built and maintained by Facebook. According to the creator of React JS, Jordan Walke, React is an efficient, declarative, and flexible open-source JavaScript library for building simple, fast, and scalable frontends of web applications.</span>
                            </p>

                            </div>
                            
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={imagePicture} alt="Main" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banar;