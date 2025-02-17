import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import Send from '../assets/custom-icons/Send';

const Footer = () => {
    
    return (
        <>
        <section className="asc-footer xui-text-white xui-lg-py-5 xui-py-2 xui-container bg-grey">
            <div className='xui-row'>
                <div className='xui-lg-col-3 xui-col-12'>
                    <img className='xui-img-150' src={Logo} alt="" />
                    <p className='xui-line-height-1-half xui-font-sz-85 xui-mt-half xui-lg-w-fluid-95 xui-w-fluid-100 color-inactive-grey'>At Amandu Beauty, we believe self-care is more than a routine—it’s a ritual of self-love andempowerment</p>
                </div>
                <div className='xui-lg-col-9 xui-col-12 xui-text-black'>
                    <div className='xui-row'>
                        <div className='xui-col-2'>
                            <h3 className='xui-font-sz-110 xui-font-w-600'>Quick Links</h3>
                            <ul className='xui-mt-1-half'>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>About Us</Link></li>
                                <li><Link to={'/'}>Brands</Link></li>
                                <li><Link to={'/'}>Face</Link></li>
                                <li><Link to={'/'}>Bath & Body</Link></li>
                                <li><Link to={'/'}>Perfume & Scents</Link></li>
                            </ul>
                        </div>
                        <div className='xui-col-10'>
                            <div className='xui-d-grid xui-grid-col-2'>
                                <div>
                                    <h3 className='xui-font-sz-110 xui-font-w-600'>Contacts</h3>
                                    <ul className='xui-mt-1-half'>
                                        <li>Phone No: +234 703 664 1675</li>
                                        <li>Email address: contact@amandubeauty.com</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <h3 className='xui-font-sz-110 xui-font-w-600'>Newsletter</h3>
                                        <p className='xui-font-sz-80 xui-font-w-500'>&copy; 2025 Powered by Grascope</p>
                                    </div>
                                    <div className='xui-d-flex xui-mt-1'>
                                        <div style={{width: 'calc(100% - 40px)'}} className='xui-pr-1'>
                                            <input type="email" className='xui-w-fluid-100 xui-text-white xui-pl-1 xui-h-fluid-100 bg-inactive-grey xui-bdr-rad-2 xui-font-sz-85' style={{border: 'none', outline: 'none'}} placeholder='Email address' />
                                        </div>
                                        <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'><Send /></span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Footer;