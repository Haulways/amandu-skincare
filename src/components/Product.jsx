import React from 'react';
import Heart from '../assets/custom-icons/Heart';
import PImage from "../assets/images/product-image.png";
import Stars from "../assets/images/stars.png";
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='asc-product xui-text-black'>
            <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-250 bdr-rad-half' style={{backgroundImage: `url('${PImage}')`}}>
                <div className='xui-p-1 xui-d-flex xui-flex-jc-flex-end'>
                    <span className='xui-w-40 xui-h-40 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'><Heart /></span>
                </div>
            </div>
            <div className='xui-pt-1'>
                <div className='xui-d-flex xui-flex-jc-space-between'>
                    <h3 className='xui-font-w-600 xui-font-sz-100' style={{width: 'calc(100% - 100px)'}}>Radiance Renewal Serum</h3>
                    <h3 className='xui-font-w-600 xui-font-sz-100 xui-w-100 xui-text-right'>N9,999.96</h3>
                </div>
                <p className='xui-line-height-1-half xui-font-sz-80 color-inactive-grey xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-half'>A powerful blend of antioxidants and hydrating actives to brighten and even out skin tone.</p>
                <div className='xui-mt-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <img src={Stars} alt="" />
                    <p className='xui-font-sz-65'>4.5</p>
                </div>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-mt-1'>
                    <Link to='/' className='xui-text-dc-none xui-font-sz-75 xui-bg-black xui-text-white xui-py-half xui-px-1 xui-bdr-rad-2'>Buy Now</Link>
                    <button to='/' style={{outline: 'none', background: 'transparent'}} className='xui-text-dc-none xui-font-sz-75 xui-bdr-black xui-bdr-s-solid xui-bdr-w-1 xui-text-black xui-py-half xui-px-1 xui-bdr-rad-2'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;