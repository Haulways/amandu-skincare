import React, { useState } from 'react';
import HeaderBG from "../../../../assets/images/home/header-bg.jpg";
import Breadcrumbs from '../../../Breadcrumbs';
import Subtract from '../../../../assets/custom-icons/Subtract';
import Add from '../../../../assets/custom-icons/Add';
import PImage from "../../../../assets/images/product-image.png";
import { Link } from 'react-router-dom';
import Product from '../../../Product';

const ViewFullFaceProduct = () => {
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
    <>
      <section className='xui-py-3 xui-bg-sz-cover xui-bg-pos-center xui-text-white xui-container' style={{backgroundImage: `url('${HeaderBG}')`}}>
        <h3 className='xui-font-sz-300 xui-font-w-500'>Face</h3>
        <Breadcrumbs current={'Radiance Renewal Serum'} array={[{name: 'Face', path: '/face'}]} color='white' textColor='xui-text-white' />
      </section>
      <section className='xui-container xui-py-5'>
        <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1'>
          <div className='xui-d-flex xui-flex-dir-column xui-flex-jc-center'>
            <h3 className='xui-font-sz-200 xui-font-w-600'>Radiance Renewal Serum</h3>
            <p className='xui-font-sz-90 xui-mt-1'>Price: <span className='xui-font-sz-120 xui-font-w-600'>NGN 9,999.99</span></p>
            <div className='xui-py-half xui-px-1 xui-max-w-150 xui-w-fluid-100 xui-bdr-black xui-bdr-rad-half xui-bdr-w-1 xui-bdr-s-solid xui-mt-1 xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between'>
              <div onClick={handleDecrement} className='xui-cursor-pointer xui-d-flex xui-flex-ai-center'><Subtract width='15' height='4' /></div>
              <div className='xui-font-sz-85'>{quantity}</div>
              <div onClick={handleIncrement} className='xui-cursor-pointer xui-d-flex xui-flex-ai-center'><Add width='15' height='21' /></div>
            </div>
            <div className='xui-d-grid xui-grid-col-2 xui-grid-gap-1 xui-mt-1'>
                <Link to='/' className='xui-text-dc-none xui-font-sz-90 xui-bg-black xui-text-white xui-btn xui-text-center xui-bdr-rad-half'>Buy Now</Link>
                <button style={{outline: 'none', background: 'transparent'}} className='xui-text-dc-none xui-font-sz-90 xui-bdr-black xui-bdr-s-solid xui-bdr-w-1 xui-text-black xui-btn xui-bdr-rad-half'>Add to cart</button>
            </div>
          </div>
          <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-350 xui-bdr-rad-1' style={{backgroundImage: `url('${PImage}')`}}>

          </div>
          <div className='xui-pt-2 xui-pl-1 bdr-linear-gradient1'>
            <h3 className='xui-font-sz-125 xui-font-w-500'>Product Details</h3>
            <p className='xui-mt-1 xui-font-sz-95 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>A powerful blend of antioxidants and hydrating actives to brighten and even out skin tone.</p>
            <div className='xui-mt-1 xui-p-1' style={{borderTop: '1px solid var(--black)', borderBottom: '1px solid var(--black)'}}>
                <p className='xui-font-sz-85'>Net wt: 80.5g/ 50ml</p>
            </div>
          </div>
        </div>
      </section>
      <section className='xui-container xui-py-3'>
        <h3 className='xui-font-sz-150 xui-font-w-600'>Related Product</h3>
        <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-2'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
      </section>
    </>
  );
};

export default ViewFullFaceProduct;