import React from "react";
import {
  Home,
  Hash,
  Bell,
  Mail,
  User,
  Settings,
  Search,
  MoreHorizontal,
} from "react-feather";
import { faker } from "@faker-js/faker";
import Editor from "./Editor";
import Post from "./Post";
import Logo from "./assets/logo.svg";

const App = () => {
  const posts = Array(10)
    .fill(0)
    .map((_) => {
      const data = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        handle: "",
        content: faker.lorem.lines(),
        imageUrl: faker.image.urlLoremFlickr({
          width: 128,
          height: 128,
          category: "headshot",
        }),
      };
      data.handle = faker.internet.userName({
        firstName: data.firstName,
        lastName: data.lastName,
      });
      return data;
    });

  return (
    <div className="container mx-auto">
      <div className="flex">
        <header className="relative w-56">
          <div className="flex flex-col justify-between sticky top-0 h-screen">
            <div>
              <ul className="menu w-100 rounded-box">
                <li>
                  <a>
                    <img src={Logo} alt="Logoipsum" />
                  </a>
                </li>
                <li>
                  <a>
                    <Home />
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <Hash />
                    Explore
                  </a>
                </li>
                <li>
                  <a>
                    <Bell />
                    Notifications
                  </a>
                </li>
                <li>
                  <a>
                    <Mail />
                    Messages
                  </a>
                </li>
                <li>
                  <a>
                    <User />
                    Profile
                  </a>
                </li>
                <li>
                  <a>
                    <Settings />
                    Settings
                  </a>
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
        </header>
        <main className="flex-1">
          <div className="flex">
            <div className="flex-1 mx-5 border-x border-gray-200">
              <div className="border-gray-200 border-b">
                <Editor />
              </div>
              {posts.map((post, i) => (
                <Post key={i} post={post} />
              ))}
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
