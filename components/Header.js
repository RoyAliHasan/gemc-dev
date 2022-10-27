import Image from "next/image";
import React from "react";
import rhino from "../assets/images/rhino.svg";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full  shadow  ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              {/* <h2 className="text-2xl font-bold text-white">LOGO</h2> */}
              <Image src={rhino} className="h-9" />
            </a>
            <div className="flex justify-center items-center ">
              <SearchIcon className="flex  h-5 w-5  text-white md:hidden " />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:text-sm md:space-y-0 font-nav-heading-font font-bold text-2xl">
              <li className="text-white hover:text-indigo-200 ">
                <a href="javascript:void(0)">COMMUNITY</a>
              </li>
              <li className="text-white hover:text-indigo-200 ">
                <a href="javascript:void(0)">MINT A GEMC</a>
              </li>
              <li className="text-white hover:text-indigo-200 ">
                <a href="javascript:void(0)">NESTING</a>
              </li>
              <li className="text-white hover:text-indigo-200 ">
                <a href="javascript:void(0)">BLUEPRINT</a>
              </li>{" "}
              <li className="text-white hover:text-indigo-200 ">
                <a href="javascript:void(0)">ABOUT US</a>
              </li>
            </ul>
          </div>
        </div>

        {/* icons */}
      </div>
    </nav>
  );
}

export default Header;