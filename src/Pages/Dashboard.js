import Sidebar from "../Components/Sidebar";
import MainDashboard from "../Components/MainDashboard";
import SidebarRight from "../Components/SidebarRight";
//import { useParams } from "react-router-dom";

export default function Dashboard() {
  //console.log(useParams())
  return (
    <div className="flex fondo h-max w-screen justify-between">
      <Sidebar />
      <MainDashboard />
      <SidebarRight />
    </div>
  )
  }
