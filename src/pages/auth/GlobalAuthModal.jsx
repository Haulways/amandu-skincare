// import axios from 'axios';
// import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Signin from './Signin';
import Close from "../../assets/custom-icons/Close";

const GlobalAuthModal = () => {
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ step, setStep ] = useState(1);
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    
    return (
        <>
        <section className="xui-modal" xui-modal={'auth-modal'} disable-click-on-outside={'true'}>
            <div className="xui-pos-relative xui-modal-content xui-max-w-650 xui-w-fluid-100 xui-bdr-rad-1">
                <div className="xui-d-flex xui-flex-jc-flex-end">
                    <div className="xui-w-50 xui-h-50 xui-bdr-rad-circle hensard-bg-blue xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-pointer" xui-modal-close={'auth-modal'}>
                        <Close />
                    </div>
                </div>
                {step === 1 && <>
                <Signin />
                </>}
                {step === 2 && <>
                    <h1>Account Recovery</h1>
                </>}
                {step === 3 && <>
                    <h1>Verification Code</h1>
                </>}
                {step === 4 && <>
                    <h1>Full Account Recovery</h1>
                </>}
                {step === 5 && <>
                    <h1>Signup</h1>
                </>}
            </div>
        </section>
        </>
    );
};

export default GlobalAuthModal;