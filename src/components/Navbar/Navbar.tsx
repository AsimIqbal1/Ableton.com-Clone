/* eslint-disable */
import Logo from '../../assets/images/logo.svg';
import './Navbar.scss'

const Navbar = () => {
    return (
        <header className='navbar'>
            <img className='nav-logo' src={Logo} />
            <a href="#">Live</a>
            <a href="#">Push</a>
            <a href="#">Note</a>
            <a href="#">Link</a>
            <a href="#">Shop</a>
            <a href="#">Packs</a>
            <a href="#">Help</a>
            <a href="#" className='more-button'>More +</a>
            <div className='nav-empty-space' />
            <a href="#" className='live-button'>Try Live for free</a>
            <a href="#" className='login-button'>Log in or register</a>
        </header>
    )
}

export default Navbar;

