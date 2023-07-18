/* eslint-disable */
import { useState } from 'react';

import './MainPage.scss';
import Navbar from '../components/Navbar/Navbar';
import StickyNavbar from '../components/StickyNavbar/StickyNavbar';
import Footer from '../components/Footer/Footer';
import ShortGallery from '../components/ShortGallery/ShortGallery';
import InfoSection from '../components/InfoSection/InfoSection';
import content from './MainPage.content';


const MainPage = () => {

    const [activeTab, setActiveTab] = useState<any>("About");

    return (
        <>
            <Navbar />
            <StickyNavbar activeTab={activeTab} />
            <div className='container'>
                <div className='image-container'>
                    <div className='main-image' />
                    <p className='image-text'>Ableton</p>
                </div>

            </div>
            <InfoSection
                head={content.aboutCompany.head}
                body={content.aboutCompany.body}
            />

            <ShortGallery />
            <InfoSection
                head={content.aboutMusic.head}
                body={content.aboutMusic.body}
            />
            <Footer />
        </>

    )
}

export default MainPage;