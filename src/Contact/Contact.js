import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id='Contact' className='Contact-area'>
            <div className='container-area'>
                <div className='from'>
                    <div className='row'>
                        <div className='col-8'>
                            <p>GET IN TOUCH</p>
                            <h2>Send us a message</h2>

                            <div className='input-box'>
                                <input type="text" placeholder='Your Nama*' />
                                <input type="text" placeholder='Your Gmail*' />
                            </div>
                            <div className='input-companyname'>
                                <input type="text" placeholder='Company Name*' />
                            </div>
                            <div className='text-message'>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Message*'></textarea>
                            </div>
                            <div className='button-area'>
                                <button>Submit</button>
                                <button>Reset</button>
                            </div>
                        </div>


                    </div>
                </div>

        
            </div>
        </div>
    );
};

export default Contact;