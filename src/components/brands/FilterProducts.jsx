import React from 'react';
import Search from '../../assets/custom-icons/Search';

const FilterProducts = () => {
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-row'>
                <div className='xui-lg-col-4 xui-col-12'>
                    <div className='asc-filter-products xui-form bg-grey-iii xui-p-1-half xui-bdr-rad-half'>
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
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12'>

                </div>
            </div>
        </section>
    );
};

export default FilterProducts;