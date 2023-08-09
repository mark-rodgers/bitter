import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Home,
  Hash,
  Bell,
  Mail,
  User,
  Settings,
  MoreHorizontal,
} from "react-feather";
import Logo from "../assets/logo.svg";

const VerticalNavigation = () => {
  return (
    <div className="flex flex-col justify-between sticky top-0 h-screen">
      <div>
        <ul className="menu w-100 rounded-box">
          <li>
            <Link to="/">
              <img src={Logo} alt="Logoipsum" />
            </Link>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Hash />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Bell />
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Mail />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marknrodgers"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <User />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Settings />
              Settings
            </NavLink>
          </li>
        </ul>
        <div className="px-2 my-4">
          <button className="btn bg-blue-500 hover:bg-blue-600 btn-block text-white">
            Post
          </button>
        </div>
      </div>
      <div className="px-2 flex mb-4 justify-between">
        <div className="flex">
          <div className="avatar online mr-4">
            <div className="w-10 rounded-full">
              <img src="/user_images/mark-rodgers.jpg" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Mark Rodgers</div>
            <div className="text-base-content/50">@marknrodgers</div>
          </div>
        </div>
        <div>
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default VerticalNavigation;
