import React from 'react'
import './App.css'

import facebook from '../social/facebook.svg'
import instagram from '../social/instagram.svg'

import logo from '../Logos/FINAL_hushlittlebakery.png'
import banner from '../social/anshu-a-E5xgkSFan84-unsplash.jpg'

class Navbar extends React.Component {
    render() {
    return(
        <div>
                <div className="socials">
                    <img src={facebook} alt="facebook icon" style={{ width: '1.5em', height: '1.5em' }}/> 
                    <img src={instagram} alt="instagram icon" style={{ width: '1.5em', height: '1.5em' }}/> 
                </div>
                <div className="email">
                    <p>jess@hushlittlebakery.co.uk /
                    Tel: 07738626808</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="hush little bakery logo"></img>
                    <div className = "nav">
                        <nav>
                            <li>
                                <ul>Home</ul>
                                <ul>About</ul>
                                <ul>Menu</ul>
                                <ul>Gallery</ul>
                                <ul>Blogs</ul>
                                <ul>Contact</ul>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="banner-img">
            <img src={banner} alt="cake ingredients" />
            </div>

            <div className="About">
            <h1>Welcome to Hush Little Bakery</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p> <br></br>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            </div>

        </div>
    )
  }
}

export default Navbar