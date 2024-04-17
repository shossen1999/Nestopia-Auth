import React from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className="text-center flex flex-col space-y-3">
             <Helmet>
                <title>User Profile </title>
            </Helmet>
            <h1 className="text-center text-2xl font-bold">Profile Picture</h1>
            
            <img
                className="h-80 w-80 mx-auto mt-4 rounded-full border-4 border-blue-500"
                src={user.photoURL}
                alt=""
            />

            <p className="text-xl"><span className="font-bold text-xl">User Name</span> :{user.displayName}</p>
            <p className="text-xl"><span className="font-bold text-xl">User Email</span> :{user.email}</p>
            <NavLink to='/updateProfile'><button className="btn btn-primary  ">Update Profile</button></NavLink>
        </div>
    );
};

export default UserProfile;
