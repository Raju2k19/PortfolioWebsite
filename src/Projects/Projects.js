import React from 'react';
import './Projects.css'
import chakra from '../images/chakra-pro.png'
import picEight from '../images/picEight.png'
import picThree from '../images/picThree.png'
import picSeven from '../images/picSeven.png'
import pic12 from '../images/pic12.png'
import picSix from '../images/picSix.png'




const Projects = () => {
    return (
        <div id='Porjects' className='main'>
            <div className='Container-pro'>
            <h1>This is Our Projects Items.....</h1>
            <p className='pera'>Here are some examples of websites I have built so far... <br /> Here are some websites built in Html css javascript and React Js.
                    The work of making some more beautiful websites is going on</p>
            <div className='project-itmes'>
                <div className="items">
                    <img src={chakra} alt="" />
                    <div className='items-view'>
                    <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
                <div className="items">
                    <img src={picEight} alt="" />
                    <div className='items-view'>
                        <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
                <div className="items">
                    <img src={picThree} alt="" />
                    <div className='items-view'>
                    <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
                <div className="items">
                    <img src={picSeven} alt="" />
                    <div className='items-view'>
                    <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
                <div className="items">
                    <img src={pic12} alt="" />
                    <div className='items-view'>
                    <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
                <div className="items">
                    <img src={picSix} alt="" />
                    <div className='items-view'>
                    <button>LIVE PROJECT</button>
                        <button>CODE</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;