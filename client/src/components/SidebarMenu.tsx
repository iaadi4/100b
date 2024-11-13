import { GoHomeFill } from "react-icons/go";
import { IoChatbubble } from "react-icons/io5";
import { FaPoll } from "react-icons/fa";
import { RiStickyNote2Fill2 } from "react-icons/ri";
import { PiLockSimpleFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/Redux/authSlice";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const SidebarMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <TooltipProvider>
      <div className="flex justify-center h-screen w-[5%] min-w-[65px]">
        <div className="flex items-center flex-col h-full w-full">
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-6 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <GoHomeFill className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/notes"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <RiStickyNote2Fill2 className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Notes</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/chats"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <IoChatbubble className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Chats</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/polls"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <FaPoll className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Polls</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/confession"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <PiLockSimpleFill className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Confessions</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/announcements"
                className={({ isActive }) => `h-10 w-10 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <IoNotifications className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Announcements</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to="/profile"
                className={({ isActive }) => `h-10 w-10 mb-6 flex justify-center items-center p-2 cursor-pointer rounded-lg mt-3 ${isActive ? 'bg-orange-500 text-white' : ''}`}>
                <FaUser className="w-5 h-5" />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
          <div className="mt-auto flex">
            <Tooltip>
              <TooltipTrigger>
                <div onClick={handleLogout} className="h-10 w-10 mb-6 flex justify-center items-center p-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded-lg">
                  <RiLoginBoxFill className="w-5 h-5" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="mb-8" side="right">
                <p>Sign out</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SidebarMenu;
