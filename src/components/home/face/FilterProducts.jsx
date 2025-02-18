import React, { useState } from 'react';
import Search from '../../../assets/custom-icons/Search';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Product from "../../Product";

const FilterProducts = () => {
    const [value, setValue] = useState([2999, 999999]);

    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-row'>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div style={{top: '0', left: '0'}} className='asc-filter-products xui-pos-sticky xui-form bg-grey-iii xui-p-1-half xui-bdr-rad-1'>
                        <div className="">
                            <label htmlFor="perfume_brand" className='xui-font-w-500'>Filter by Brand Type</label>
                            <select name="perfume_brand"id="perfume_brand" className='bdr-inactive-grey xui-bdr-rad-half'>
                                <option value="">Perfume Brand</option>
                            </select>
                        </div>
                        <div className="xui-form-box">
                            <label htmlFor="perfume_brand" className='xui-font-w-500'>Filter by Product</label>
                            <select name="perfume_brand"id="perfume_brand" className='bdr-inactive-grey xui-bdr-rad-half'>
                                <option value="">Lattafa</option>
                            </select>
                        </div>
                        <div className="xui-form-box">
                            <label htmlFor="perfume_brand" className='xui-font-w-500'>Search</label>
                            <div className='xui-pos-relative'>
                                <input type="text" className='bdr-inactive-grey xui-bdr-rad-half' placeholder='Search product...' />
                                <span className='xui-pos-absolute' style={{right: '10px', top: '10px'}}>
                                    <Search />
                                </span>
                            </div>
                        </div>
                        <div className="xui-form-box">
                            <label htmlFor="perfume_brand" className='xui-font-w-500'>Filter by Price</label>
                            {/* <RangeSlider value={value} onInput={setValue} /> */}
                            <div className='xui-mt-1-half'>
                                <RangeSlider value={value} onChange={setValue} min={0} max={1000000} onInput={setValue} />
                            </div>
                            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-mt-1'>
                                <p className='xui-font-sz-70 xui-font-w-500'>Min Price: NGN{value[0].toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                                <p className='xui-font-sz-70 xui-font-w-500'>Max Price: NGN{value[1].toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12 xui-pl-1'>
                    <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterProducts;