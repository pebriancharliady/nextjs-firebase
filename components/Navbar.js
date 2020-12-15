import { useState } from "react";
import ActiveLink from "./common/ActiveLink";
import Logo from "../public/logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="absolute w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-40">
          <Logo />
        </div>
        <div className="fixed w-full container px-4">
          <div className="flex justify-center items-center float-right text-center">
            <div className={show ? "opacity-100 transition transform translate-x-0 bg-white shadow-lg rounded-lg p-3 flex" : "opacity-0 p-3 transition transform translate-x-1"}>
              <ActiveLink href="/" activeClassName="text-blue-logo">
                <a className="px-3 font-semibold active:text-blue-logo transform hover:translate-y-2 transition ">Home</a>
              </ActiveLink>
              <ActiveLink href="/about" activeClassName="text-blue-logo">
                <a className="px-3 font-semibold">About</a>
              </ActiveLink>
              <ActiveLink href="/ourworks" activeClassName="text-blue-logo">
                <a className="px-3 font-semibold">Our Works</a>
              </ActiveLink>
              <ActiveLink href="/contact" activeClassName="text-blue-logo">
                <a className="px-3 font-semibold">Contact</a>
              </ActiveLink>
            </div>

            <button
              onClick={() => setShow(!show)}
              className="focus:outline-none active:outline-none focus:bg-gray-100 z-100"

            >
              <svg viewBox="0 0 100 80" width="30" height="30" fill="#E9327C">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
              </svg>
              <small className="text-1">Nav</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
