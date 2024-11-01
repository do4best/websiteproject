import React from 'react';
import DarkMode from "@/components/pages/Navebar/darkMode";

function Topheader(props) {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Menu</a>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">News</a>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Popular Team</a>
                </div>
                <div className="flex-1">
                    <DarkMode/>
                </div>

                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                Login
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            );
            }

            export default Topheader;