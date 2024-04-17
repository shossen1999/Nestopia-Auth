import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
    const { logout, user, disName, photoLink } = useAuth();


    console.log(user);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate("/")
            })

    }
    // const navLinks = <>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/about">About</NavLink></li>
    //     <li><NavLink to="/career">Career</NavLink></li>
    //     <li><NavLink to="/login">Login</NavLink></li>
    //     <li><NavLink to="/register">Register</NavLink></li>
    // </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/">Home</NavLink></li>
                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/updateProfile">Update Profile</NavLink></li>

                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/userProfile">User Profile</NavLink></li>

                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/about">About Us</NavLink></li>



                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl">Nestopia</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/">Home</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/updateProfile">Update Profile</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/userProfile">User Profile</NavLink></li>

                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/about">About Us</NavLink></li>


                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-3 animate_animated animate_fadeInRight">
                            <div className="tooltip tooltip-hover tooltip-bottom" data-tip={user?.displayName || 'user name not found'}>
                                <div className="w-10 h-10 rounded-full border border-black">

                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : photoLink} className="h-full w-full mx-auto rounded-full" />
                                </div>

                            </div>


                            <button onClick={handleLogout} className="btn btn-accent btn-outline font-bold">Logout</button>

                        </div>


                        :
                        <div className="flex gap-2 animate_animated animate_fadeInRight ">
                            <Link to='/login'><button className="btn btn-accent btn-outline font-bold">Login</button></Link>

                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;