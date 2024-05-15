import React from "react";
import Logo from "./Logo";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 shadow-sm bg-white">
      <div className="container h- h-full mx-auto flex items-center px-4 justify-between">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-between w-full max-w-sm border rounded-full focus-within:shadow-lg pl-2">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search your product..."
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full text-white cursor-pointer">
            <BsSearch />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-3xl cursor-pointer">
            <HiOutlineUserCircle />
          </div>
          <div className="text-3xl cursor-pointer relative">
            <span>
              <IoMdCart />
            </span>
            <div className="bg-red-600 text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-1">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link to={"/Login"} className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
