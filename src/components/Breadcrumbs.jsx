import React from 'react';
import ChevronRight from '../assets/custom-icons/ChevronRight';
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
    const { array, current } = props
    return (
        <section className='xui-py-1'>
            <div className='xui-d-flex xui-flex-ai-center hensard-breadcrumb xui-text-white xui-grid-gap-half'>
                <Link className={'color-grey-ii xui-text-dc-none'} to={'/'}>Home</Link>
                <ChevronRight />
                {array && array.map((obj, index) => (
                    <React.Fragment key={index}>
                        <Link className={'xui-text-inherit color-grey-ii xui-text-dc-none'} to={obj.path}>{obj.name}</Link>
                        <ChevronRight />
                    </React.Fragment>
                ))}
                <span>{current}</span>
            </div>
        </section>
    );
};

export default Breadcrumbs;