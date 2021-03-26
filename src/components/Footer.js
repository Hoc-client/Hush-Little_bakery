import React from 'react';
import './App.css';

import facebook from '../social/facebook.svg'
import instagram from '../social/instagram.svg'

class Footer extends React.Component {
    render() {

    return(
        <div className="footer">
            <div className="footer-socials">
                <img src={facebook} alt="facebook icon" style={{ width: '1.5em', height: '1.5em' }}/> 
                <img src={instagram} alt="instagram icon" style={{ width: '1.5em', height: '1.5em' }}/> 
            </div>
            <div className="footer-text">
                <p>FAQS</p>
                <p>Terms and Conditions</p>
                <p>Contact</p>
            </div>
        </div>
    )
  }
}

export default Footer