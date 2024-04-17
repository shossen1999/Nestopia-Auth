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
    const [loading, setLoading]=useState(true);
    console.log(user);
    // create User
    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signInUser
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logout =()=>{
       
        setUser(null);
        return signOut(auth);
       
    }

    // google Login

    const googleLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // github Login

    const githubLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)

    }
    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
            
          }
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);
    const authInfo={
         user,
         createUser,
         signInUser,
         googleLogin,
         githubLogin,
         logout,
         loading
         
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;