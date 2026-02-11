import { GoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';

function LoginWithGoogle() {
    const handleSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        console.log("token", token)
        // OPTIONAL: decode on frontend (not validation)
        // const user = jwtDecode(token);
        // console.log(user);

        // IMPORTANT: send token to backend
        // fetch('http://localhost:3000/auth/google', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ token }),
        // });
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Login Failed')}
        />
    );
}

export default LoginWithGoogle;
