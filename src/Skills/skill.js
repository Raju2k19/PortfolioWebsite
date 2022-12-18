import React from 'react';
import './skill.css'

const skill = () => {
    return (
        <div className='skill-area'>
                <div id='Skill' class="skills-container">
            <h1>Our Skils</h1>
            <p className='pera'>Below is a sample of all the things you need to know and use to design a beautiful website <br />
                My aim is to present a beautiful website to the client</p>
     <div className="row">
        <div className="col-6">
            <div className="basic-part">
            <ul>
            <li class="html" >HTML</li>
            <li class="css">CSS</li>
            <li class="bootstrap">Bootstrap</li>
            <li class="js">JavaSCript</li>
          
        </ul>
            </div>
        </div>
        <div className="col-6">
            <div className="advance-part">
            <ul>                        
            <li class="node">Node.js</li>
            <li class="express">Express.js</li>
            <li class="git">GitHub</li>
            <li class="react">React.js</li> 
        </ul>

            </div>
        </div>

     </div>
    </div>
        </div>
    );
};

export default skill;