import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../app/services/authService';
import toast from 'react-hot-toast/headless';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useRouter } from 'next/navigation';
// import jwtDecode from 'jwt-decode';

function LoginWithGoogle() {
    const [loader, setLoader] = useState(false)
    const router = useRouter(); 
    const [width, setWidth] = useState(0);

    const handleSuccess = async (credentialResponse) => {
        setLoader(true)
        const token = credentialResponse.credential;
        try {
            const res = await googleLogin({ "credential": token });
            console.log("token", res)
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            router.push("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.error.message || "Something went wrong");
        } finally {
            setLoader(false)
        }
    };

    const handleResize = () => {
        const container = document.getElementById('google-btn-container');
        if (container) {
            setWidth(container.offsetWidth);
        }
    };

    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="google-btn-container" className='mt-5 w-full flex justify-center text-base font-semibold rounded-lg'>
            {loader ?
                <div className=' shadow outline-0 focus:border-black text-black mt-1.5 placeholder:text-text-7 px-3.5 py-2 w-full flex justify-center overflow-hidden rounded-lg'>
                    <Loader />
                </div> :
                <div className='w-full font-semibold overflow-hidden rounded-lg flex justify-center border border-[#D5D7DA] items-center'>
                    <GoogleLogin
                        width={width ? (width + 20).toString() : "350"}
                        fontWeight="600"
                        theme="outline"
                        shape="rectangular"
                        logo_alignment="center"
                        onSuccess={handleSuccess}
                        onError={() => console.log('Login Failed')}
                    />
                </div>}
        </div>
    );
}

export default LoginWithGoogle;
