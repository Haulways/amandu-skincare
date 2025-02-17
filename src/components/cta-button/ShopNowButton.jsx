import React from 'react';
import { Link } from 'react-router-dom';

const ShopNowButton = () => {
    return (
        <Link to={'/'} className='xui-py-1 xui-px-2-half xui-text-dc-none xui-bdr-rad-half xui-bg-white xui-font-sz-100 xui-text-black'>Shop Now</Link>
    );
};

export default ShopNowButton;