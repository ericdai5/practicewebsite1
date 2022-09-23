import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Eric Dai</a>
      <ul className='permalinks'>
        <li><a hfref="#">Home</a></li>
        <li><a hfref="#about">About</a></li>
        <li><a hfref="#experience">Experience</a></li>
        <li><a hfref="#services">Services</a></li>
        <li><a hfref="#portfolio">Portfolio</a></li>
        <li><a hfref="#testimonials">Testimonials</a></li>
        <li><a hfref="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a hfref="https://facebook.com"><FaFacebookF/></a>
        <a hfref="https://instagram.com"><FiInstagram/></a>
        <a hfref="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Eric Dai. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer