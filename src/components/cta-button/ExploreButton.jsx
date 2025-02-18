import React from 'react';
import { Link } from 'react-router-dom';
import CircleArrowUpRight from '../../assets/custom-icons/CircleArrowUpRight';

const ExploreButton = (props) => {
    const { text } = props;
    return (
        <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
            <Link className='xui-font-sz-100 xui-text-white'>{text}</Link>
            <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-w-30 xui-h-30 xui-bdr-rad-circle xui-bg-white'><CircleArrowUpRight /></span>
        </div>
    );
};

export default ExploreButton;