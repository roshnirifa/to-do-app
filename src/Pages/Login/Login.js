import React from 'react';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_int';

const Login = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/list');
    }
    return (
        <div className='container text-center login mt-5 text-primary'>
            <h1 className='my-5'>Please Login!!!!</h1>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary'>Continue With Google</button>
            </div>
        </div >
    );
};

export default Login;