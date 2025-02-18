import React, { useEffect, useState } from 'react';
import HeaderBG from "../../../assets/images/home/header-bg.jpg";
import Breadcrumbs from '../../Breadcrumbs';

const Header = () => {
    return (
        <>
            <section className='xui-py-3 xui-bg-sz-cover xui-bg-pos-center xui-text-white xui-container' style={{backgroundImage: `url('${HeaderBG}')`}}>
                <h3 className='xui-font-sz-300 xui-font-w-500'>Bath & Body</h3>
                <Breadcrumbs current={'Bath & Body'} array={[]} />
            </section>
        </>
    );
};

export default Header;