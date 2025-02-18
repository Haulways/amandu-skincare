import React from 'react';
import SustainableBeauty from "../../assets/images/about/sustainable-beauty.png";
import LuxuriousSkincare from "../../assets/images/about/luxurious-skincare.png";
import SignatureFragrences from "../../assets/images/about/signature-fragrences.png";
import BathAndBodyCare from "../../assets/images/about/bath-and-body-care.png";
import OrganicProducts from "../../assets/images/about/organic-products.png";

const CoreValues = () => {
    return (
        <section className='xui-container xui-py-3'>
            <h1 className='xui-font-sz-300 xui-font-w-600 xui-max-w-800 xui-w-fluid-100'>Nurtured by Luxury, <span className='color-inactive-grey'>Shaping the Future of</span> Beauty and Wellness.</h1>
            <div className='xui-d-grid xui-lg-grid-col-5 xui-grid-col-1 xui-grid-gap-1-half xui-mt-2'>
                <div>
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 xui-bdr-rad-half' style={{backgroundImage: `url('${SustainableBeauty}')`}}></div>
                    <p className='xui-font-sz-95 xui-mt-half xui-font-w-500'>Sustainable Beauty</p>
                </div>
                <div>
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 xui-bdr-rad-half' style={{backgroundImage: `url('${LuxuriousSkincare}')`}}></div>
                    <p className='xui-font-sz-95 xui-mt-half xui-font-w-500'>Luxurious Skincare</p>
                </div>
                <div>
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 xui-bdr-rad-half' style={{backgroundImage: `url('${SignatureFragrences}')`}}></div>
                    <p className='xui-font-sz-95 xui-mt-half xui-font-w-500'>Signature Fragrances</p>
                </div>
                <div>
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 xui-bdr-rad-half' style={{backgroundImage: `url('${BathAndBodyCare}')`}}></div>
                    <p className='xui-font-sz-95 xui-mt-half xui-font-w-500'>Bath & Body Care</p>
                </div>
                <div>
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 xui-bdr-rad-half' style={{backgroundImage: `url('${OrganicProducts}')`}}></div>
                    <p className='xui-font-sz-95 xui-mt-half xui-font-w-500'>Natural & Organic Products</p>
                </div>
            </div>
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-mt-3'>
                <div>
                    <h3 className='xui-font-sz-150 xui-font-w-500'>// Core Values</h3>
                </div>
                <div>
                    <ul className='xui-p-none'>
                        <li className='xui-font-sz-85 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'><span className='xui-font-w-600'>Quality:</span> We prioritize offering only the best products from trusted and renowned brands.</li>
                        <li className='xui-font-sz-85 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1'><span className='xui-font-w-600'>Diversity:</span> We embrace global beauty trends, featuring a mix of designer, niche, and Arabian products.</li>
                        <li className='xui-font-sz-85 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1'><span className='xui-font-w-600'>Accessibility:</span> We aim to make luxury beauty accessible to every customer.</li>
                        <li className='xui-font-sz-85 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-mt-1'><span className='xui-font-w-600'>Innovation:</span> Constantly evolving to meet the needs of our customers with cutting-edge beauty solutions.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;