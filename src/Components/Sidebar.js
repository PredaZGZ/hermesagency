import React from "react";
import { NavLink } from "react-router-dom";

import { GoSettings } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Slices/AuthSlice"

export default function Sidebar() {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    let activeClassName = "flex m-2 py-2 px-10 items-center sidebar-item-active";
    let notactiveClassName = "flex m-2 py-2 px-10 items-center sidebar-item";

    const handleLogout = () => {
        dispatch(Logout());
    }

    return (
        <>
            <aside className="min-w-fit shadow w-1/6 h-screen">
                <div className="fondo sidebar py-4 overflow-y-auto h-full flex flex-col">
                    <ul className="">
                        <li>
                            <div className="flex px-10">
                                <div className="flex items-center p-">
                                    <CgProfile className="dash-icon" />
                                    <span className="ml-3">{user.name}</span>
                                </div>
                                <div className="flex items-center p-2">
                                    <CiLogout onClick={handleLogout} className="cursor-pointer" />
                                </div>
                            </div>
                        </li>

                    </ul>
                    <ul className="text-center">
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) =>
                                isActive ? activeClassName : notactiveClassName
                            }>
                                <AiOutlineDashboard className="dash-icon" />
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/accounts" className={({ isActive }) =>
                                isActive ? activeClassName : notactiveClassName
                            }>
                                <ImProfile />
                                <span className="ml-3">Accounts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={({ isActive }) =>
                                isActive ? activeClassName : notactiveClassName
                            }>
                                <GoSettings />
                                <span className="ml-3">Settings</span>
                            </NavLink>
                        </li>

                    </ul>


                </div>
            </aside>
        </>
    );
}
