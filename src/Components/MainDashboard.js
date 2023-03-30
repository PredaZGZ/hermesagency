import MainRow from "./Dashboard/MainRow";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import LineChart from "./Dashboard/LineChart";
import Progress from "./Dashboard/Progress";

export default function MainDashboard() {

    const { accountlist, global } = useSelector((state) => state.accounts)
    let id = useParams().id
    let account;
    if(!id) { 
      account = global;
    } else {
      account = accountlist.find((account) => account.accountid === id);
    }

    return (
      <div className="m-5 w-full flex flex-col gap-8">
        <div className="nameh1 mb-4">
          {account.name} Account
        </div>
        <MainRow />
        <LineChart /> 
        <Progress />
      </div>
    )
  }
