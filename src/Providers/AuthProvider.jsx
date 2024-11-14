import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

   const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
        setLoading(true)
    
   }

   const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email,password)
    setLoading(true)
   }

   const signInGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
   }

   const signOutUser = () =>{
    return signOut(auth);
    setLoading(true)
   }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser);  
            setLoading(false)
    }) 
    return ()=>{
        unSubscribe();
    }
   })

//    onAuthStateChanged(auth, currentUser =>{
//     if(currentUser){
//         console.log('currently logged user' , currentUser);
//         setUser(currentUser)
//     }
//     else{
//         console.log('no user log in');
//         setUser(null)
//     }
//    })

    const authInfo = {
        name: 'mohon sagor',
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        signOut
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;