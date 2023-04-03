import Sidebar from "../Components/Sidebar";
import SidebarRight from "../Components/SidebarRight";

export default function Settings() {
  return (
    <div className="flex fondo h-max w-screen justify-between">
      <Sidebar />
      <SidebarRight />
    </div>
  )
  }
