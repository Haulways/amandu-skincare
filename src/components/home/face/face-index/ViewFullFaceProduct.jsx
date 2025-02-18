import React, { useEffect, useState } from 'react';
import HeaderBG from "../../../../assets/images/home/header-bg.jpg";
import Breadcrumbs from '../../../Breadcrumbs';

const ViewFullFaceProduct = () => {
    return (
        <>
            <section className='xui-py-3 xui-bg-sz-cover xui-bg-pos-center xui-text-white xui-container' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <h3 className='xui-font-sz-300 xui-font-w-500'>Face</h3>
                <Breadcrumbs current={'Radiance Renewal Serum'} array={[{name: 'Face', path: '/face'}]} />
            </section>
            <section className='xui-container xui-py-3'>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-half'>

                </div>
            </section>
        </>
    );
};

export default ViewFullFaceProduct;