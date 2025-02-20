import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Envelope from '../../assets/custom-icons/Envelope';

const AccountRecovery = ({ setStep }) => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const [ isDisabled, setIsDisabled ] = useState(false);

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
                        <div className='xui-d-flex xui-flex-ai-center bg-grey-iv xui-py-half xui-px-1-half xui-bdr-rad-1-half'>
                            <span className='xui-w-40'>
                                <Envelope />
                            </span>
                            <input style={{width: 'calc(100% - 40px)', border: 'none'}} className="xui-text-lowercase" {...register('email', {required: 'This field is required',pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        {errors.email && <span className="xui-form-error-msg">{errors.email.message}</span>}
                    </div>
                    <div className="asc-auth-form-grp">
                        <button onClick={() => setStep(3)} className="xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white " disabled={isDisabled}>Continue</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AccountRecovery;