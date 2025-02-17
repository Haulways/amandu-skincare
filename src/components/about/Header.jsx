import React from 'react';
import GeneralHeader from '../GeneralHeader';

const Header = () => {
    return (
        <GeneralHeader>
            <div className='xui-mt-6'>
                <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-font-w-600 xui-text-capitalize'><div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">We transform bold ideas</div> <div className='color-linear' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" style={{marginLeft: '14rem'}}>Into Scalable Solutions</div> <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">across industries.</div></h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100'>We engineer innovation, build strategic solutions, and help companies turn vision into tangible success.</p>
            </div>
        </GeneralHeader>
    );
};

export default Header;