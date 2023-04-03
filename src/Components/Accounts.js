import { useSelector } from "react-redux";
import ButtonBar from "./Accounts/ButtonBar";
import { BsPencil, BsTrashFill } from "react-icons/bs";
import axios from "axios";

export default function Accounts() {

  const { accountlist } = useSelector((state) => state.accounts)
  const { userToken } = useSelector((state) => state.auth)
  const { url } = useSelector(state => state.api)

  const toggleDelete = (event) => {
    const id = event.currentTarget.getAttribute('data');
    const url2 = url + '/accounts/' + id

    axios.delete(url2, {
      headers: {
        "auth-token": userToken
      }
    }).then(res => {
      if (res.status === 200) {
        document.location.reload()
      }
    })
  }

  const handleEdit = (event, accountId) => {
    event.preventDefault();
    const newName = prompt('Enter new account name');
    const url2 = url + '/accounts/' + accountId;
  
    axios.put(url2, { name: newName }, {
      headers: {
        "auth-token": userToken
      }
    }).then(res => {
      if (res.status === 200) {
        document.location.reload();
      }
    });
  };

  
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
            <th className="px-4 py-2 w-4">Options</th>
          </tr>
        </thead>
        <tbody className="table-body text-center">
          {accountlist.map((account) => (
            <tr key={account._id} className="fila">
              <td className="">{account.name}</td>
              <td className="px-4 py-2">{account.lastbalance}</td>
              <td className="px-4 py-2">{account.phase}</td>
              <td className="px-4 py-2">{account.accountid}</td>
              <td className="px-4 py-2 flex justify-center mt-1">
                <BsPencil onClick={(event) => handleEdit(event, account._id)} className="cursor-pointer" />
                <BsTrashFill data={account._id} onClick={toggleDelete} className="ml-4 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
