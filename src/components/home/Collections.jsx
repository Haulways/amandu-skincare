import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product';

const Collections = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='xui-container xui-py-3 xui-text-black'>
            <div>
                <h3 className='xui-font-w-600 xui-font-sz-150'>Our Collections</h3>
                <div className='xui-mt-2 xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <div onClick={() => handleTabClick(0)} className={'xui-cursor-pointer xui-d-inline-block xui-font-w-600 xui-font-sz-95 xui-bdr-rad-1-half xui-py-1 xui-px-2 ' + (activeTab === 0 ? 'xui-bg-black xui-text-white' : 'bg-transparent xui-bdr-black xui-bdr-w-1 xui-bdr-s-solid xui-text-black')}>Face</div>
                    <div onClick={() => handleTabClick(1)} className={'xui-cursor-pointer xui-d-inline-block xui-font-w-600 xui-font-sz-95 xui-bdr-rad-1-half xui-py-1 xui-px-2 ' + (activeTab === 1 ? 'xui-bg-black xui-text-white' : 'bg-transparent xui-bdr-black xui-bdr-w-1 xui-bdr-s-solid xui-text-black')}>Bath and Body</div>
                    <div onClick={() => handleTabClick(2)} className={'xui-cursor-pointer xui-d-inline-block xui-font-w-600 xui-font-sz-95 xui-bdr-rad-1-half xui-py-1 xui-px-2 ' + (activeTab === 2 ? 'xui-bg-black xui-text-white' : 'bg-transparent xui-bdr-black xui-bdr-w-1 xui-bdr-s-solid xui-text-black')}>Perfumes and Scent</div>
                </div>
            </div>
            <div className='xui-mt-1'>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <p className='xui-font-sz-110 xui-font-w-500'>CeraVe</p>
                    <Link className='xui-font-sz-90 xui-text-dc-none xui-text-black xui-font-w-500'>View all</Link>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div className='xui-mt-2'>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <p className='xui-font-sz-110 xui-font-w-500'>Nivea</p>
                    <Link className='xui-font-sz-90 xui-text-dc-none xui-text-black xui-font-w-500'>View all</Link>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div className='xui-mt-2'>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <p className='xui-font-sz-110 xui-font-w-500'>Dove</p>
                    <Link className='xui-font-sz-90 xui-text-dc-none xui-text-black xui-font-w-500'>View all</Link>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div className='xui-mt-2'>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <p className='xui-font-sz-110 xui-font-w-500'>Aveeno</p>
                    <Link className='xui-font-sz-90 xui-text-dc-none xui-text-black xui-font-w-500'>View all</Link>
                </div>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    );
};

export default Collections;