"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
                <a href="#" id="brand" className="flex gap-2 items-center flex-1">
                  <Image
                    className="object-cover"
                    src="/assets/asset 0.png"
                    alt="Logo"
                    width={48}
                    height={48}
                  />
                  <span className="text-lg font-medium font-display">ToDesktop</span>
                </a>
                <div id="nav-menu" className="hidden lg:flex gap-12">
                  <a href="#" className="font-medium hover:text-primary">
                    Pricing
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    Docs
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    Changelog
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    Blogs
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    Login
                  </a>
                </div>
                <div className="hidden lg:flex flex-1 justify-end">
                  <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
                    <Image src="/assets/asset 1.svg" alt="" width={20} height={20} />
                    <span className="font-display font-medium">
                      Electron Developers
                    </span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
        
                <button className="p-2 lg:hidden" onClick={handleMenu}>
                  <i className="fa-solid fa-bars text-gray-600"></i>
                </button>
        
                <div
                  id="nav-dialog"
                  className={`${
                    isMenuOpen ? "" : "hidden"
                  } fixed z-10 md:hidden bg-white inset-0 p-3`}
                >
                  <div id="nav-bar" className="flex justify-between">
                    <a href="#" id="brand" className="flex gap-2 items-center">
                      <Image
                        className="object-cover"
                        src="/assets/asset 0.png"
                        alt="Logo"
                        width={48}
                        height={48}
                      />
                      <span className="text-lg font-medium font-display">
                        ToDesktop
                      </span>
                    </a>
                    <button className="p-2 md:hidden" onClick={handleMenu}>
                      <i className="fa-solid fa-xmark text-gray-600"></i>
                    </button>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
                    >
                      Docs
                    </a>
                    <a
                      href="#"
                      className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
                    >
                      Changelog
                    </a>
                    <a
                      href="#"
                      className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
                    >
                      Blogs
                    </a>
                    <a
                      href="#"
                      className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
                    >
                      Login
                    </a>
                  </div>
                  <div className="h-[1px] bg-gray-300"></div>
                  <button className="mt-6 w-full flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-50">
                    <Image src="/assets/asset 1.svg" alt="" width={20} height={20} />
                    <span>Electron Developers</span>
                  </button>
                </div>
              </nav>
    </div>
  )
}

export default Navbar
