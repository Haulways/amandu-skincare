import React, { useState } from 'react';
import PImage from "../assets/images/product-image.png";
import Breadcrumbs from '../components/Breadcrumbs';
import Subtract from '../assets/custom-icons/Subtract';
import Add from '../assets/custom-icons/Add';
import Close from '../assets/custom-icons/Close';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    return (
        <section className='xui-py-3 xui-container'>
            <h1 className='xui-font-w-600 xui-font-sz-250'>My Cart</h1>
            <Breadcrumbs current={'Cart'} array={[]} color />
            <div className='xui-row xui-mt-1'>
                <div className='xui-lg-col-8 xui-col-12'>
                    <div className='asc-cart-table-holder xui-table-responsive'>
                        <table className="asc-cart-table xui-w-fluid-100">
                            <thead>
                            <tr className="">
                                <th className='xui-font-sz-80 color-inactive-grey'>PRODUCT</th>
                                <th className='xui-font-sz-80 color-inactive-grey'>PRICE</th>
                                <th className='xui-font-sz-80 color-inactive-grey xui-min-w-100'>QUANTITY</th>
                                <th className='xui-font-sz-80 color-inactive-grey'>TOTAL</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='xui-d-inline-flex xui-flex-ai-center'>
                                            <img className='xui-img-70 xui-bdr-rad-half' src={PImage} alt="" />
                                            <div className='xui-pl-half' style={{width: 'calc(100% - 70px)'}}>
                                                <h3 className='xui-font-sz-85 xui-font-w-600'>Radiance Renewal Serum</h3>
                                                <p className='xui-mt-half xui-font-sz-80 color-inactive-grey'>Nivea</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><h3 className='xui-font-sz-80 xui-font-w-600'>N3,499.96</h3></td>
                                    <td>
                                        <div className='xui-py-half xui-px-1 xui-max-w-150 xui-w-fluid-100 xui-bdr-black xui-bdr-rad-half xui-bdr-w-1 xui-bdr-s-solid xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                            <div onClick={handleDecrement} className='xui-cursor-pointer xui-d-flex xui-flex-ai-center'><Subtract width='8' height='4' /></div>
                                            <div className='xui-font-sz-80'>{quantity}</div>
                                            <div onClick={handleIncrement} className='xui-cursor-pointer xui-d-flex xui-flex-ai-center'><Add width='8' height='19' /></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-2'>
                                            <h3 className='xui-font-sz-80 xui-font-w-600'>N3,499.96</h3>
                                            <div className="xui-w-50 xui-h-50 xui-bdr-rad-circle hensard-bg-blue xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-pointer">
                                                <Close width='15' height='15' />
                                            </div>
                                        </div>
                                    </td>
                                </tr> 
                            </tbody>


                        </table>
                    </div>
                </div>
                <div className='xui-lg-col-4 xui-col-12'>

                </div>
            </div>
        </section>
    );
};

export default Cart;