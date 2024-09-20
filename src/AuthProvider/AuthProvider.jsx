import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const signOutUser = () => {
        signOut(auth)
    }
    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
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
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;