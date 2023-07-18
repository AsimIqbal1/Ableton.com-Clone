/* eslint-disable */
import './StickyNavbar.scss'

interface IStickyNavbarProps {
    activeTab: "About" | "Jobs" | "Appren";
    onTabClick?: (selectTab: "About" | "Jobs" | "Appren") => void;
}

const StickyNavbar = (props: IStickyNavbarProps) => {
    const { activeTab } = props;
    return (
        <div className='sticky-navbar'>
            <a href="#" className={activeTab === "About" ? 'active-page' : ''}>About</a>
            <a href="#" className={activeTab === "Jobs" ? 'active-page' : ''}>Jobs</a>
            <a href="#" className={activeTab === "Appren" ? 'active-page' : ''}>Apprenticeships</a>
        </div>
    )
}

export default StickyNavbar;

