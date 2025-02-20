import React, { useEffect, useState } from 'react';
import PImage from "../assets/images/product-image.png";
import VisaLogo from "../assets/images/visa-logo.png";
import Breadcrumbs from '../components/Breadcrumbs';
import Subtract from '../assets/custom-icons/Subtract';
import Add from '../assets/custom-icons/Add';
import Close from '../assets/custom-icons/Close';
import Key from '../assets/custom-icons/Key';
import ChevronRight from '../assets/custom-icons/ChevronRight';
import RedStar from '../assets/custom-icons/RedStar';
import { countries } from "../../globals.json";
import { useForm } from 'react-hook-form';
import { ChevronLeft } from '@carbon/icons-react';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const {register, handleSubmit,formState: { errors }, setValue, trigger} = useForm();
    const [addDeliveryLocation, setAddDeliveryLocation] = useState(false);
    const [ country, setCountry ] = useState(null);
    const [ state, setState ] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    
    const getStatesOfCountry = (countryName) => {
        const country = countries.find(country => country.name === countryName);
        return country ? country.states : [];
    }
    const handleCountryChange = (country) => {
        setValue('country', country);
        setCountry(country);
        setTimeout(() => {
            setValue('state', getStatesOfCountry(country)[0].name);
        }, 0);
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    const onSubmit = (data) => {
        console.log(data);
    }
    useEffect(() => {
        setCountry(countries[0].name);
        setState(countries[0].states[0].name);
    }, []);
    return (
        <>
        <section className='xui-py-3 xui-container'>
            <h1 className='xui-font-w-600 xui-font-sz-250'>My Cart</h1>
            <Breadcrumbs current={'Cart'} array={[]} color='black' textColor='xui-text-black' />
            {!addDeliveryLocation ? (
                <>
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
                        <div className='xui-lg-col-4 xui-col-12 xui-pl-1'>
                            <div className='asc-cart-delivery xui-p-1 xui-bdr-rad-half'>
                                <div>
                                    <h3 className='xui-font-w-600 xui-font-sz-100'>Delivery Location</h3>
                                    <div className='xui-d-flex xui-mt-1'>
                                        <span className='xui-w-35 xui-d-flex xui-flex-ai-center xui-flex-jc-center'><Key /></span>
                                        <div onClick={(() => {setAddDeliveryLocation(true)})} className='xui-cursor-pointer xui-pl-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between' style={{width: 'calc(100% - 35px)'}}>
                                            <p className='xui-font-w-600 xui-font-sz-85'>Add delivery location</p>
                                            <ChevronRight color='black' />
                                        </div>
                                    </div>
                                </div>
                                <div className='xui-mt-2'>
                                    <h3 className='xui-font-w-600 xui-font-sz-100'>Order Summary</h3>
                                    <div className='xui-d-flex xui-mt-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <p className='xui-mt-half xui-font-sz-80 color-inactive-grey'>Subtotal</p>
                                        <h3 className='xui-mt-half xui-font-sz-80 xui-font-w-600'>N6,956.46</h3>
                                    </div>
                                    <div className='xui-d-flex xui-mt-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <p className='xui-mt-half xui-font-sz-80 color-inactive-grey'>Shipping fee</p>
                                        <h3 className='xui-mt-half xui-font-sz-80 xui-font-w-600'>N1,000.00</h3>
                                    </div>
                                    <div style={{borderTop: '1px solid #D3D3D3', borderBottom: '1px solid #D3D3D3'}} className='xui-d-flex xui-mt-1 xui-py-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <p className='xui-mt-half xui-font-sz-90 xui-font-w-600'>Total</p>
                                        <h3 className='xui-mt-half xui-font-sz-90 xui-font-w-600'>N11,689.75</h3>
                                    </div>
                                </div>
                                <div className='xui-mt-2'>
                                    <h3 className='xui-font-w-600 xui-font-sz-100'>Payment Method</h3>
                                    <div className='xui-d-flex xui-mt-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                                        <img src={VisaLogo} alt="" className='xui-img-80' />
                                        <div className="xui-radio-btn">
                                            <input type="radio" id="visa" name="payment-method" />
                                            <label htmlFor="visa" className="xui-radio-btn-label">
                                                <span className="xui-radio-btn-checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="xui-mt-2 xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white xui-font-sz-80 ">Checkout</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <section className='xui-py-2'>
                        <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                            <span onClick={(() => {setAddDeliveryLocation(false)})} className='xui-cursor-pointer xui-d-flex xui-flex-ai-center xui-flex-jc-center'><ChevronLeft size={22} color='inherit' /></span>
                            <h3 className='xui-font-w-500 xui-font-sz-120'>Add Deliver Address</h3>
                        </div>
                        {country && state && 
                        <form className="xui-form asc-delivery-form xui-mt-1" autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className="xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-1">
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="country">Country <RedStar /></label>
                                    <select {...register('country')} name="country" id="country" defaultValue={country} onChange={(e) => handleCountryChange(e.target.value)}>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.name}>{country.name}</option>
                                        ))}
                                    </select>
                                    {errors.country && <span className='xui-form-error-msg'>{errors.country.message}</span>}
                                </div>
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="state">State <RedStar /></label>
                                    <select {...register('state')} name="state" id="state" defaultValue={state} onChange={(e) => handleStateChange(e.target.value)}>
                                        {country && country != null && getStatesOfCountry(country).map((state, index) => (
                                            <option key={index} value={state.name}>{state.name}</option>
                                        ))}
                                    </select>
                                    {errors.state && errors.state.type === "required" && (
                                        <span className="xui-form-error-msg">This field is required</span>
                                    )}
                                </div>
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="postal_Code">Postal code <RedStar /></label>
                                    <input {...register('postal_Code', { required: true })} type="number" name="postal_Code" id="postal_Code" placeholder="Postal code" />
                                    {errors.postal_Code && errors.postal_Code.type === "required" && <span className="xui-form-error-msg">This field is required</span>}
                                </div>
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="address">Delivery Address <RedStar /></label>
                                    <input {...register('address', { required: true, minLength: 2 })} type="text" name="address" id="address" placeholder="Enter your address" />
                                    {errors.address && errors.address.type === "required" && <span className="xui-form-error-msg">This field is required</span>}
                                    {errors.address && errors.address.type === "minLength" && <span className="xui-form-error-msg">This field should be longer than 2 characters</span>}
                                </div>
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="phone">Phone Number <RedStar /></label>
                                    <input {...register('phone', { required: "This field is required", pattern: {value: /^[0-9]{10,15}$/, message: "Phone number must be 10–15 digits"}, })} type="tel" name="phone" id="phone" placeholder="Phone number" />
                                    {errors.phone && (<span className="xui-form-error-msg">{errors.phone.message}</span>)}
                                </div>
                                <div className="asc-auth-form-grp">
                                    <label htmlFor="email">Email address <RedStar /></label>
                                    <input {...register('email', { required: "This field is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}, })} type="email" name="email" id="email" placeholder="example@gmail.com" />
                                    {errors.email && (<span className="xui-form-error-msg">{errors.email.message}</span>)}
                                </div>
                            </div>
                            <div className="xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-1 xui-mt-1-half">
                                <div></div>
                                <div className="asc-auth-form-grp">
                                    <button type="submit" className="xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white xui-font-sz-80 " disabled={isDisabled}>Add</button>
                                </div>
                                <div></div>
                            </div>
                        </form>}
                    </section>
                </>
            )}
        </section>
        </>
    );
};

export default Cart;