/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const {user, signOutUser, loading} = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
        })
        .catch(error => {
        })
    }

    const links = (
        <>
            <NavLink
            to='/'
            className={
                ({isActive})=> `text-[18px] tracking-widest font-semibold ${isActive? 'text-rose-400 border-b-2 border-rose-500' : 'text-black'}`
            }
            >
                Home
            </NavLink>
        </>
    )
    
    return (
        <div className="navbar py-[25px] fixed max-w-[1200px]">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex">
                    {
                        links
                    }
            </ul>
            </div>
            <div className="flex items-center gap-3">
            <img className="w-[48px] h-[48px]" src="/public/delivery-courier.png" alt="" />
            <a className="font-semibold text-2xl"><span className="text-red-600">S</span>hip<span className="text-red-600">L</span>ogic</a>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-10">
            {
                links
            }
            </ul>
        </div>
        <div className="navbar-end flex gap-5">
            {/* notification  */}
            <div className="text-[35px] relative w-10 flex justify-center">
                <IoMdNotifications className="text-rose-500"></IoMdNotifications>
                <p className="absolute text-xl -top-2 -right-2 font-bold text-black -6 h-6 flex items-center justify-center rounded-full">12</p>
                
            </div>
            {
                user?<>
                    <div className="dropdown dropdown-bottom dropdown-end">
                    <img tabIndex={0} className="w-[52px] h-[52px] rounded-full cursor-pointer" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1000] w-[130px] p-2 shadow flex flex-col items-center gap-3 text-xl">
                        <Link>Profile</Link>
                        <Link>Dashboard</Link>
                        <Link onClick={handleSignOut}>Logout</Link>
                    </ul>
                        
                    </div>
                </> : <>
                    <NavLink to='/login'><p className="btn bg-rose-500 text-white hover:bg-rose-500 hover:shadow">Loging</p></NavLink>
                </>
            }

            {/* avater */}


        </div>

        </div>
    );
};

export default Navbar;