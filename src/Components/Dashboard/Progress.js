import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Progress() {
    const [cx, setCx] = useState(0);
    const { accountlist, global } = useSelector((state) => state.accounts)
    let id = useParams().id
    let state
    if(!id) { 
        state = global;
    } else {
        state = accountlist.find((account) => account.accountid === id).phase;
    }
    useEffect(() => {
        if (state === "Phase 1") {
            setCx(91.98)
        } else if (state === "Phase 2") {
            setCx(368.006)
        } else if (state === "Founded Account") {
            setCx(649.573)
        } else if (state === "Payout") {
            setCx(959.482)
        } else {
            setCx(0)
        }
    }, [state, cx]);

    return (
        <div className="flex fondo3 h-64 rounded-2xl mx-6 flex-col">
            <h1 className="m-6 text-white">Progress:</h1>
            <div className="flex justify-between list-none mx-52 text-white mt-2">
                    <li className="ml-1">Phase 1</li>
                    <li className="ml-6">Phase 2</li>
                    <li>Founded Account</li>
                    <li>Payout Date</li>
            </div>
            <div className="flex justify-center">
                <div className="mt-2 mr-5">
                    <svg viewBox="0 0 1036 36" width="1036" height="36" fill="none">
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="79.7184" y1="27.516" x2="969.632" y2="19.4691" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 0, 2)">
                            <stop stopColor="#F24E1E"></stop>
                            <stop offset="0.2433" stopColor="#F08C37"></stop>
                            <stop offset="0.4976" stopColor="#FFC700"></stop>
                            <stop offset="0.7472" stopColor="#99C456"></stop>
                            <stop offset="1" stopColor="#5EC282"></stop>
                            </linearGradient>
                        </defs>
                        <line x1="92" y1="18" x2="949" y2="18" stroke="url(#paint0_linear_0_1)" strokeWidth="8"></line>
                        <circle cx="91.98" cy="18" r="15" fill="#E05A33"></circle>
                        <circle cx="368.006" cy="18" r="15" fill="#f6a322"></circle>
                        <circle cx="649.573" cy="18" r="15" fill="#bdc638"></circle>
                        <circle cx="959.482" cy="18" r="15" fill="#5EC282"></circle>
                        {cx !== 0 && <circle cx={cx} cy="18" r="9" fill="#282828"></circle>}
                    </svg>
                </div>
            </div>
        </div>
    )
} 