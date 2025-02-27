/* eslint-disable no-unused-vars */
import { div } from 'motion/react-client';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.userType.value;
        const profileImage = form.profileImage.value;
        // console.log(name,email,password,userType,profileImage)

        createUser(email, password)
        .then(result => {
            updateUserProfile({displayName: name, photoURL: profileImage})
            .then(()=> {
                navigate('/')
                console.log(result.user)
            })
            .catch(()=>{
            });
        })
        .catch(error => {
        })
    }
    
    
    return (
        <div className='pt-[102px] bg-stone-200'>
            <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSignUp}>
                    <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded mb-2" required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mb-2" required />
                    <input type="password" name="password" placeholder="Password"  className="w-full p-2 border rounded mb-2" required />
                    <select name="userType"  className="w-full p-2 border rounded mb-2" required>
                        <option value="User">User</option>
                        <option value="DeliveryMen">DeliveryMen</option>
                    </select>
                    <input type="url" name="profileImage" className="w-full p-2 border rounded mb-2" />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;