/* eslint-disable */

import './InfoSection.scss';

const InfoSection = (props: { head: string | React.ReactElement, body: string | React.ReactElement }) => {
    const { head, body } = props;
    return (
        <div className='info-container'>
            <p className='about-text1'>{head} </p>
            <p className='about-text2'>{body} </p>

        </div>
    )
}

export default InfoSection;