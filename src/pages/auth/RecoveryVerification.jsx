import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import ErrorAlert from "../../components/alerts/Error";
// import SuccessAlert from "../../components/alerts/Success";
import PinInput from 'react-pin-input';

const RecoveryVerification = ({ setStep }) => {
    const { register, handleSubmit, setValue, watch, setError, clearErrors, formState: { errors } } = useForm();
    const [isDisabled, setIsDisabled] = useState(false);
    // const [validationErrMsg, setValidationErrMsg] = useState('');
    // const [successErrMsg, setSuccessErrMsg] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const pinValue = watch('pin');
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const sendRequest = (fields) => {
        if (!fields.pin || fields.pin.length !== 5 || !/^[0-9]*$/.test(fields.pin)) {
            setError("pin", {
                type: "manual",
                message: "Invalid verification code",
            });
            return;
        }

        clearErrors("pin");
        console.log(fields);
        setIsDisabled(true);
        setIsAlert(true);
        setSeconds(30);
    };

    useEffect(() => {
        if (seconds <= 0) {
            setIsDisabled(false);
        }
    }, [seconds]);

    return (
        <>
        <section className="xui-py-1 xui-md-py-2 xui-px-1 xui-md-px-2 xui-bg-white">
            <div className="xui-text-center xui-mt-1">
                <h1 className="xui-font-sz-150 semi-bold-font">Enter Verification Code</h1>
                <p className="xui-font-sz-100 xui-lg-w-fluid-65 xui-w-fluid-100 xui-mx-auto xui-line-height-1-half xui-opacity-6 xui-mt-1">Enter verification code sent to example@gmail.com to recover your account</p>
            </div>
            <form className="xui-form xui-container xui-mt-1-half" onSubmit={handleSubmit(sendRequest)} autoComplete="off" noValidate>
                <input type="hidden" {...register('pin')} value={pinValue} />
                <PinInput 
                    length={5} 
                    initialValue=""
                    secret={false}
                    onChange={(value) => setValue('pin', value)}
                    type="numeric" 
                    inputMode="number"
                    style={{padding: '10px'}}  
                    inputStyle={{borderColor: '#737373'}}
                    inputFocusStyle={{borderColor: '#737373'}}
                    onComplete={(value) => setValue('pin', value)}
                    autoSelect={true}
                    regexCriteria={/^[0-9]*$/}
                />
                <div className="asc-auth-form-grp xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    {errors.pin && (
                        <p className="error xui-font-sz-85">{errors.pin.message}</p>
                    )}
                </div>  
                <div className="asc-auth-form-grp xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    {isAlert && seconds > 0 && (
                        <p className="xui-font-sz-85">{`Resend in ${formatTime(seconds)}s`}</p>
                    )}
                </div>
                <div className="asc-auth-form-grp">
                    <button className={"xui-btn xui-btn-block xui-bdr-rad-half xui-bg-black xui-text-white " + (isDisabled || seconds > 0 ? 'bg-grey-vi color-inactive-grey' : 'xui-bg-black')} disabled={isDisabled || seconds > 0}>Continue</button>
                </div>
            </form>
        </section>
        </>
    );
};

export default RecoveryVerification;
