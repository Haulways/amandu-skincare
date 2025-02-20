// import axios from 'axios';
// import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Signin from './Signin';
import Close from "../../assets/custom-icons/Close";
import AccountRecovery from './AccountRecovery';
import RecoveryVerification from './RecoveryVerification';
import FullAccountRecovery from './FullAccountRecovery';
import SignUp from './Signup';

const GlobalAuthModal = () => {
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ step, setStep ] = useState(1);
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

    const closeAuthModal = () => {
        window.xuiModalHide('auth-modal');
        setTimeout(() => {
            setStep(1);
        }, 1000)
    }
    
    return (
        <>
        <section className="xui-modal" xui-modal={'auth-modal'} disable-click-on-outside={'true'}>
            <div className="xui-pos-relative xui-modal-content xui-max-w-650 xui-w-fluid-100 xui-bdr-rad-1">
                <div className="xui-d-flex xui-flex-jc-flex-end">
                    <div onClick={closeAuthModal} className="xui-w-50 xui-h-50 xui-bdr-rad-circle hensard-bg-blue xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-pointer">
                        <Close />
                    </div>
                </div>
                {step === 1 && <>
                    <Signin setStep={setStep} />
                </>}
                {step === 2 && <>
                    <AccountRecovery setStep={setStep} />
                </>}
                {step === 3 && <>
                    <RecoveryVerification setStep={setStep} />
                </>}
                {step === 4 && <>
                    <FullAccountRecovery setStep={setStep} />
                </>}
                {step === 5 && <>
                    <SignUp setStep={setStep} />
                </>}
            </div>
        </section>
        </>
    );
};

export default GlobalAuthModal;