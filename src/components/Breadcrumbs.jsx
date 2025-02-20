import React from 'react';
import ChevronRight from '../assets/custom-icons/ChevronRight';
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
    const { array, current, color, textColor } = props
    return (
        <section className='xui-py-1'>
            <div className={`xui-d-flex xui-flex-ai-center hensard-breadcrumb ${textColor} xui-grid-gap-half`}>
                <Link className={'color-grey-ii xui-text-dc-none'} to={'/'}>Home</Link>
                <ChevronRight color={color} />
                {array && array.map((obj, index) => (
                    <React.Fragment key={index}>
                        <Link className={'xui-text-inherit color-grey-ii xui-text-dc-none'} to={obj.path}>{obj.name}</Link>
                        <ChevronRight color={color} />
                    </React.Fragment>
                ))}
                <span>{current}</span>
            </div>
        </section>
    );
};

export default Breadcrumbs;