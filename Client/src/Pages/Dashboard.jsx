import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar for Recruiter Panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={(e) => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, GreatStack</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* Left sidebar with option to add job, manage applicartion */}
        <div className="inline-block min-h-screen border-r-2 border-gray-200">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border border-r-4 border-blue-500 "
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4 mr-2" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border border-r-4 border-blue-500 "
                }`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4 mr-2" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border border-r-4 border-blue-500 "
                }`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4 mr-2" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
            <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
