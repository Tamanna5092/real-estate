import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // twitter login
    const twitterLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }
    // observ auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observing current user auth state changen', currentUser) 
                setUser(currentUser)
        })
        return () => unsubscribe()
    })

    const authInfo = {
        user,
        createUser,
        logInUser,
        signOutUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;