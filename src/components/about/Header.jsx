import React, { useEffect, useState } from 'react';
import HeaderBG from "../../assets/images/about/header-bg.jpg";
import ShopNowButton from '../cta-button/ShopNowButton';
import ExploreButton from '../cta-button/ExploreButton';

const Header = () => {
    return (
        <>
            <section className='xui-py-8 xui-bg-sz-cover xui-bg-pos-center xui-text-white' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <div className='xui-text-center'>
                    <h1 className='xui-font-sz-450 xui-font-w-600 xui-max-w-800 xui-w-fluid-100 xui-mx-auto'>Amandu Beauty, Elevating Your Glow</h1>
                    <p className='xui-font-sz-100 xui-lg-w-fluid-60 xui-w-fluid-100 xui-line-height-1-half xui-mt-half xui-mx-auto'>At Amandu Beauty, self-care is a ritual of self-love and empowerment. We curate the finest skincare and fragrance products to enhance your natural beauty and indulge your senses.</p>
                    <div className='xui-mt-1-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-2'>
                        <ShopNowButton />
                        <ExploreButton text='Glow with us' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;