import React from "react";
import { NavLink } from "react-router-dom";

import { GoDashboard, GoSettings } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Slices/AuthSlice"

export default function Sidebar() {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    let activeClassName = "flex items-center p-2 rounded-lg text-white bg-zinc-700";
    let notactiveClassName = "flex items-center p-2 rounded-lg text-white hover:bg-zinc-700";

    const handleLogout = () => {
        dispatch(Logout());
    }

    return (
        <>
            <aside className="min-w-fit shadow w-1/6">
                <div className="fondo sidebar py-4 overflow-y-auto h-full flex flex-col justify-between">
                    <ul className="text-center">
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) =>
                                isActive ? activeClassName : notactiveClassName
                            }>
                                <GoDashboard />
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/accounts" className={({ isActive }) =>
                                isActive ? activeClassName : notactiveClassName
                            }>
                                <GoDashboard />
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
                    <ul className="pt-4 mt-4 space-y-2 border-t border-zinc-700">
                        <li>
                            <div className="flex justify-between">
                                <div className="flex items-center p-2 text-white">
                                    <AiOutlineUser />
                                    <span className="ml-3">{user.name}</span>
                                </div>
                                <div className="flex items-center p-2 text-white">
                                    <CiLogout onClick={handleLogout} className="cursor-pointer" />
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </aside>
        </>
    );
}
