import Sidebar from "../Components/Sidebar";
import Accounts from "../Components/Accounts";
import SidebarRight from "../Components/SidebarRight";
//import { useParams } from "react-router-dom";

export default function Dashboard() {
  //console.log(useParams())
  return (
    <div className="flex fondo h-screen w-screen grow justify-between">
      <Sidebar />
      <Accounts />
      <SidebarRight />
    </div>
  )
  }
