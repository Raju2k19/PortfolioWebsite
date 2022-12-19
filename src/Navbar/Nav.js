import React from 'react';
import './Nav.css'



const Nav = () => {
    return (
        <div className='navbar'>
            <div className='container'>
               <nav className='navbar-container'>
               <ul className='navbar__left'>
                    <div className='navbar__left-logo'>
                        <a href="/Home"><h1 id='Home'>REJ@UL</h1></a>
                    </div>
                </ul>
                <ul className='navbar__right'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skill">Skill</a></li>
                    <li><a href="#Porjects">Porjects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
               </nav>
            </div>
        </div>
    );
};

export default Nav;