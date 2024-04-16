import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
// social auth
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    console.log(user);
    // create User
    const createUser =(email,password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signInUser
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logout =()=>{
        setUser(null);
        return signOut(auth);
       
    }

    // google Login

    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)

    }

    // github Login

    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider)

    }
    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])
    const authInfo={
         user,
         createUser,
         signInUser,
         googleLogin,
         githubLogin,
         logout
         
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;