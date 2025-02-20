import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Lock from '../../assets/custom-icons/Lock';
import { View, ViewOff } from '@carbon/icons-react';

const FullAccountRecovery = ({ setStep }) => {
    const { register, handleSubmit, setValue, formState: { errors }, watch, reset } = useForm();
    const [ isDisabled, setIsDisabled ] = useState(false);
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    const [inputPassword, setInputPassword] = useState(true);
    const [inputConfirmPassword, setInputConfirmPassword] = useState(true);

    const recoverAccount = (fields) => {
        console.log(fields);
    }

    return (
        <section className='xui-py-1 xui-px-1'>
            <h1 className='xui-font-w-600 xui-font-sz-200'>Account Recovery</h1>
            <p className='xui-font-sz-100 color-inactive-grey xui-mt-half'>Kindly follow the process to recover your account</p>
            <div className='xui-mt-2 xui-px-3'>
                <form className="xui-form asc-signin-form" onSubmit={handleSubmit(recoverAccount)} autoComplete="off" noValidate>
                    <div className="asc-auth-form-grp">
                        <div className='xui-d-flex xui-flex-ai-center xui-pos-relative bg-grey-iv xui-py-half xui-px-1-half xui-bdr-rad-1-half'>
                            <span className='xui-w-40'>
                                <Lock />
                            </span>
                            <input style={{width: 'calc(100% - 40px)', border: 'none'}} type={inputPassword ? 'password' : 'text'} name="password" id="password" {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} placeholder="New password" />
                            <div onClick={() => setInputPassword(!inputPassword)} className="hensard-eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center">
                                {inputPassword ? <View size={20} color="#7C848F" /> : <ViewOff size={20} color="#7C848F" />}
                            </div>
                        </div>
                        {errors.password && <span className="xui-form-error-msg">{errors.password.message}</span>}
                    </div>
                    <div className="asc-auth-form-grp">
                        <div className='xui-d-flex xui-flex-ai-center xui-pos-relative bg-grey-iv xui-py-half xui-px-1-half xui-bdr-rad-1-half'>
                            <span className='xui-w-40'>
                                <Lock />
                            </span>
                            <input style={{width: 'calc(100% - 40px)', border: 'none'}} type={inputConfirmPassword ? 'password' : 'text'} name="password" id="password" {...register('confirmPassword', { required: 'This field is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} placeholder="Confirm password" />
                            <div onClick={() => setInputConfirmPassword(!inputConfirmPassword)} className="hensard-eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center">
                                {inputConfirmPassword ? <View size={20} color="#7C848F" /> : <ViewOff size={20} color="#7C848F" />}
                            </div>
                        </div>
                        {errors.confirmPassword && <span className="xui-form-error-msg">{errors.confirmPassword.message}</span>}
                        {!errors.confirmPassword && password !== confirmPassword && <span className="xui-form-error-msg">{`Password doesn't match`}</span>}
                    </div>
                    <div className="asc-auth-form-grp">
                        <button className="xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white " disabled={isDisabled}>Continue</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FullAccountRecovery;