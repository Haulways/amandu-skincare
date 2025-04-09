import { useLocation, useNavigate } from "react-router-dom";
import Google from "../assets/images/google.png";
import { useEffect, useState } from "react";
// import Cookies from 'js-cookie';
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function GoogleAuth({ setIsGoogleDisabled, setIsDisabled }) {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    });

    const googleRegister = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            setIsGoogleDisabled(true);
        },
        onError: (error) => {
            // console.log('Login Failed:', error);
            setIsGoogleDisabled(false);
        }
    });

    const signMeIn = (email) => {
        console.log('ddkdkdk');
        console.log(email);
    }

    useEffect(() => {
        if (user && user.access_token) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    // const newUser = {
                    //     method: "Google",
                    //     firstname: res.data.given_name,
                    //     middlename: undefined,
                    //     lastname: res.data.family_name ? res.data.family_name : 'Via-Google',
                    //     email: res.data.email,
                    //     profile_image: res.data.picture
                    // };
                    console.log(res);
                    setUserData(res);
                    signMeIn(res.data.email);
                })
                .catch((err) => {
                    console.error(err);
                    setIsDisabled(false);
                    setIsGoogleDisabled(false);
                });
        }
    }, [user, setIsDisabled, setIsGoogleDisabled]);

    return (
        <>
            <button onClick={() => googleRegister()} className="xui-py-half xui-bdr-rad-1 xui-d-block xui-w-fluid-100 xui-px-1-half bdr-grey-v xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1">
                <img src={Google} alt="" className='xui-img-30' />
                <p className='xui-font-w-600 xui-font-sz-100'>Continue with Google</p>
            </button>
        </>
    )
}
