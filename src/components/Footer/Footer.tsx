/* eslint-disable */

import './Footer.scss';
import Logo from '../../assets/images/logo.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';
import Youtube from '../../assets/images/youtube.svg';
import Instagram from '../../assets/images/instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="grid-header">Ableton</div>
            <div>
                <a href="#">Register Live or Push &gt;</a>
                <a href="#">About Ableton &gt;</a>
                <a href="#">Jobs &gt;</a>
                <div className='socials'>
                    <img style={{ backgroundColor: "#4267B2" }} src={Facebook} />
                    <img style={{ backgroundColor: "#1DA1F2" }} src={Twitter} />
                    <img style={{ backgroundColor: "#FF0000" }} src={Youtube} />
                    <img style={{ backgroundColor: "#E1306C" }} src={Instagram} />
                </div>
            </div>
            <div>
                <p className='heading'>Education</p>
                <a href="#">Offers for students and teachers &gt;</a>
                <a href="#">Ableton for the Classroom &gt;</a>
                <a href="#">Ableton for Colleges and Universities &gt;</a>
            </div>
            <div >
                <p className='heading'>Sign up to our newsletter</p>
                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                <div className="newsletter-container">
                    <input placeholder='Email Address' />
                    <button>Sign up</button>
                </div>
            </div>
            <div >
                <p className='heading'>Community</p>
                <a href="#">Find Ableton User Groups &gt;</a>
                <a href="#">Find Certified Training &gt;</a>
                <a href="#">Become a Certified Trainer &gt;</a>
            </div>
            <div >
                <p className='heading'>Language and Location</p>
                <div className='select-box-container'>
                    <select className='lang-select'>
                        <option value="English"> English </option>
                        <option value="French"> French </option>
                        <option value="Spanish"> Spanish </option>
                        <option value="German"> German </option>
                        <option value="Other"> Other </option>
                    </select>
                    <select className='country-select'>
                        <option value="United States"> United States </option>
                        <option value="United Kingdom"> United Kingdom </option>
                        <option value="Germany"> Germany </option>
                        <option value="Pakistan"> Pakistan </option>
                        <option value="Other"> Other </option>
                    </select>
                </div>
            </div>
            <div className='end-footprints'>
                <a >Contact Us</a>
                <a >Press </a>
                <a >Resources </a>
                <a >Legal </a>
                <a >Info </a>
                <a >Privacy </a>
                <a >Policy </a>
                <a >Cookie Settings</a>
                <a >Imprint </a>
                <div className='nav-empty-space' />
                <div className="copyright">
                    <p>Made in Berlin</p>
                    <img className='nav-logo' src={Logo} />
                </div>
            </div>
        </footer>
    )
}


export default Footer;