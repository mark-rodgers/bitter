import React from "react";
import { Outlet } from "react-router-dom";
import { Search } from "react-feather";
import VerticalNavigation from "./components/VerticalNavigation";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <header className="relative w-56">
          <VerticalNavigation />
        </header>
        <main className="flex-1">
          <div className="flex">
            <div className="flex-1 mx-5 border-x border-gray-200">
              <Outlet />
            </div>
            <div>
              <div className="mt-4">
                <label className="relative block">
                  <Search className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <input
                    type="text"
                    name="searchbox"
                    id="searchbox"
                    placeholder="Search Bitter"
                    className="input input-bordered w-full max-w-xs pl-10"
                  />
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
