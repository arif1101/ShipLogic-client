/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import loginAnimation from "../../../public/Lottie/login.json"
import Lottie from 'lottie-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signInUser(email, password)
        .then(result => {
            navigate(from)
        })
        .catch(error => {
        })
    }
    
    
    return (
        <div className='bg-zinc-200 min-h-[calc(100vh-70px)] pt-[102px] flex justify-between px-[64px] items-center'>
            {/* animation  */}
            <div className='w-[500px]'>
                <Lottie animationData={loginAnimation}></Lottie>
            </div>
            {/* login form  */}
            <div className='w-[450px] py-[25px] px-[40px] bg-white rounded-3xl shadow flex flex-col gap-6'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl font-semibold text-center'>Log-In</h1>
                    <p>new user ? <NavLink to='/signup' className='text-rose-600 font-semibold underline'>sign-up</NavLink></p>
                </div>
                <form onSubmit={handleSignIn} className="">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-rose-500 hover:bg-red-500 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;