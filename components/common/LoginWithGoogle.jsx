import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../app/services/authService';
import toast from 'react-hot-toast/headless';
import { useState } from 'react';
import Loader from './Loader';
import { useRouter } from 'next/navigation';
// import jwtDecode from 'jwt-decode';

function LoginWithGoogle() {
    const [loader, setLoader] = useState(false)
    const router = useRouter();

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


    return (
        <div className='mt-5'>
            {loader ?
                <div className='flex items-center gap-2 mt-4 border border-[#D5D7DA] rounded-lg p-2.5 cursor-pointer flex justify-center items-center hover:bg-zinc-100 transition'>
                    <Loader />
                </div> :
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => console.log('Login Failed')}
                />}
        </div>
    );
}

export default LoginWithGoogle;
