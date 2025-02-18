import React, { useEffect, useState } from 'react';
import HeaderBG from "../../assets/images/home/header-bg.jpg";
import ShopNowButton from '../cta-button/ShopNowButton';
import ExploreButton from '../cta-button/ExploreButton';

const Header = () => {
    return (
        <>
            <section className='xui-py-8 xui-bg-sz-cover xui-bg-pos-center xui-text-white' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <div className='xui-text-center'>
                    <h1 className='xui-font-sz-450 xui-font-w-600 xui-max-w-800 xui-w-fluid-100 xui-mx-auto'>Nourish Your Skin, Elevate Your Glow</h1>
                    <p className='xui-font-sz-100 xui-lg-w-fluid-60 xui-w-fluid-100 xui-line-height-1-half xui-mt-half xui-mx-auto'>Advanced skincare formulations enriched with essential nutrients to restore balance, enhance hydration, and promote a naturally radiant complexion.</p>
                    <div className='xui-mt-1-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-2'>
                        <ShopNowButton />
                        <ExploreButton text='Explore Collections' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;