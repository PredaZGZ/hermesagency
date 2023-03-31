import Sidebar from "../Components/Sidebar";
import SidebarRight from "../Components/SidebarRight";
import SignUpForm from "../Components/SignupForm";

export default function Dashboard() {
  return (
    <div className="flex fondo h-screen w-screen grow justify-between">
      <Sidebar />
      <SignUpForm />
      <SidebarRight />
    </div>
  )
  }
