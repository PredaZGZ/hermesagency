import { useSelector } from "react-redux";
import ButtonBar from "./Accounts/ButtonBar";

export default function Accounts() {

  const { accountlist } = useSelector((state) => state.accounts)

  return (
    <div className="m-5 w-full">
      <div className="nameh1 mb-4">
        Accounts
      </div>
      <ButtonBar />
      <table className="w-full mt-4">
        <thead className="title">
          <tr>
            <th className="px-4 py-2">Account Name</th>
            <th className="px-4 py-2">Balance</th>
            <th className="px-4 py-2">Phase</th>
            <th className="px-4 py-2">Account ID</th>
          </tr>
        </thead>
        <tbody className="table-body text-center">
          {accountlist.map((account) => (
            <tr key={account._id} className="fila">
              <td className="">{account.name}</td>
              <td className="px-4 py-2">{account.lastbalance}</td>
              <td className="px-4 py-2">{account.phase}</td>
              <td className="px-4 py-2">{account.accountid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
