import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md"

export default function SidebarRight() {

    const { accountlist } = useSelector((state) => state.accounts)

    return (
        <aside className="min-w-fit shadow w-1/6">
            <div className="fondo sidebar2 py-4 px-6 overflow-y-auto h-full flex flex-col">
                <ul className="text-center pb-3">
                    <h1 className="nameh1">Notifications</h1>
                </ul>
                <ul className="text-center pb-3">
                    <h1 className="nameh1">Objetives Line</h1>

                </ul>
                <ul className="pb-3">
                    <h1 className="nameh1 text-center">Accounts</h1>
                    {accountlist.map((account) => (
                        <li key={account._id} className="account-li">
                            <Link to={"/dashboard/"+account.accountid} 
                                  className="w-full px-2 py-3 flex items-center acc3">
                                <MdAccountBalance className="mr-4 ml-2"/>
                                {account.name}
                            </Link>
                        </li>
                    ))}
                    

                </ul>
            </div>
        </aside>
    )
  }


