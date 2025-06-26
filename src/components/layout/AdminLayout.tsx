
import { Outlet } from "react-router-dom";
import { SidebarInset } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <AdminSidebar />
      <SidebarInset className="flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  );
};

export default AdminLayout;
