import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, View, ViewOff } from "@carbon/icons-react";
import Envelope from '../../assets/custom-icons/Envelope';
import Lock from '../../assets/custom-icons/Lock';
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";

const Signin = ({ setStep }) => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const [inputPassword, setInputPassword] = useState(true);
    const [ isDisabled, setIsDisabled ] = useState(false);

    const signIn = (fields) => {
        console.log(fields);
    }

    return (
        <section className='xui-py-1 xui-px-1'>
            <h1 className='xui-font-w-600 xui-font-sz-200'>Sign in</h1>
            <p className='xui-font-sz-100 color-inactive-grey xui-mt-half'>Login and start shopping</p>
            <div className='xui-mt-2 xui-px-3'>
                <form className="xui-form asc-signin-form" onSubmit={handleSubmit(signIn)} autoComplete="off" noValidate>
                    <div className="asc-auth-form-grp">
                        <div className='xui-d-flex xui-flex-ai-center bg-grey-iv xui-py-half xui-px-1-half xui-bdr-rad-1-half'>
                            <span className='xui-w-40'>
                                <Envelope />
                            </span>
                            <input style={{width: 'calc(100% - 40px)', border: 'none'}} className="xui-text-lowercase" {...register('email', {required: 'This field is required',pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        {errors.email && <span className="xui-form-error-msg">{errors.email.message}</span>}
                    </div>
                    <div className="asc-auth-form-grp">
                        <div className='xui-d-flex xui-flex-ai-center xui-pos-relative bg-grey-iv xui-py-half xui-px-1-half xui-bdr-rad-1-half'>
                            <span className='xui-w-40'>
                                <Lock />
                            </span>
                            <input style={{width: 'calc(100% - 40px)', border: 'none'}} type={inputPassword ? 'password' : 'text'} name="password" id="password" {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} placeholder="Password" />
                            <div onClick={() => setInputPassword(!inputPassword)} className="hensard-eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center">
                                {inputPassword ? <View size={20} color="#7C848F" /> : <ViewOff size={20} color="#7C848F" />}
                            </div>
                        </div>
                        {errors.password && <span className="xui-form-error-msg">{errors.password.message}</span>}
                    </div>
                    <div className="asc-auth-form-grp">
                        <button className="xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white " disabled={isDisabled}>Sign in</button>
                    </div>
                    <div className="asc-auth-form-grp xui-d-flex xui-flex-jc-flex-end">
                        <p className='xui-font-sz-85 xui-font-w-500 xui-cursor-pointer' onClick={() => setStep(2)}>Forgot password?</p>
                    </div>
                </form>
                <div className="or-sign xui-font-sz-85 xui-opacity-8">
                    <p>Continue with</p>
                </div>
                <div className="asc-auth-form-grp">
                    <button className="xui-py-half xui-bdr-rad-1 xui-d-block xui-w-fluid-100 xui-px-1-half bdr-grey-v xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1">
                        <img src={Google} alt="" className='xui-img-30' />
                        <p className='xui-font-w-600 xui-font-sz-100'>Continue with Google</p>
                    </button>
                </div>
                <div className="asc-auth-form-grp">
                    <button className="xui-py-half xui-bdr-rad-1 xui-d-block xui-w-fluid-100 xui-px-1-half bdr-grey-v xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1">
                        <img src={Apple} alt="" className='xui-img-30' />
                        <p className='xui-font-w-600 xui-font-sz-100'>Continue with Apple</p>
                    </button>
                </div>
                <div className="asc-auth-form-grp xui-d-flex xui-flex-jc-center">
                    <p className='xui-font-sz-85'>Don’t have an account? <span className='xui-font-w-500'>Sign up</span></p>
                </div>
            </div>
        </section>
    );
};

export default Signin;