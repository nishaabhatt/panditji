import {MdOutlineAdminPanelSettings} from "react-icons/md";

const Sidebar = () => {
    return (
      <nav className="bg-secondary  min-h-screen">
        {/* Sidebar content goes here */}
        <div className="p-4">
          <h1 className="text-white text-2xl font-bold hidden md:block"> Super Admin Panel</h1>
          <MdOutlineAdminPanelSettings className="text-white md:hidden text-[30px]"/>
          <h1 className="text-white text-[14px] md:hidden">super admin <span className="">panel</span></h1>
        </div>
      </nav>
    );
  };
  
  export default Sidebar;
  