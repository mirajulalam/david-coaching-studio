import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
            </div>
            {errorElement}
            <div onClick={() => signInWithGoogle()} className='form-google'><FcGoogle className='form-icon' />  Continue with Google</div>
        </div>
    );
};

export default SocialLogin;