import React from 'react';
import photo from '../images/photoo.png'
import './About.css'
const About = () => {
    return (
        <div id='About' className='about-part'>
            <div className='about-container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={photo} alt="main" />
                    </div>
                    <div className='col-6'>
                        <div className='info'>
                            <h1 >ABOUT ME----</h1>
                            
                            <p> <strong style={{}}>Md Rejaul Islam Raju</strong>. I'm a Full-Time professional website developer and creative designer. I can Develop Top quality professional WebSite for your requerment. Which is responsive to any device. I focus on quality, creativity, clean, and simple design to help entrepreneurs and small businesses build a personal brand and create brand consistency. It's not only about money anymore, designing something beautiful for my clients to give me pleasure. ” Customer satisfaction is my priority “</p>

                            
                            <button className='btn' type="submit">HERE ME NOW</button>
                            <button className='btn-two' type="submit">VIEW RESUME</button>
                           
                        </div>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;