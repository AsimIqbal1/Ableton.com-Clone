import './ShortGallery.scss';

const ShortGallery = () => {
    return (
        <div className='gallery-container'>
            <div className='yellow-square' />
            <img className='left-image' alt="image1" src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=2&fit=crop&h=300&ixjsv=1.1.3&q=50&w=300" />
            <img className='right-image' alt="image1" src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=2&fit=crop&h=360&ixjsv=1.1.3&q=50&w=480" />
        </div>
    )
}


export default ShortGallery;