/* eslint-disable no-unused-vars */

import React, {useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    const authInfor = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signOutUser,
        signInUser
    }
    return (

        <AuthContext.Provider value={authInfor}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;