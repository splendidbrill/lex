// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// import Image from "next/image";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <div>
//       <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
//         <a href="#" id="brand" className="flex gap-2 items-center flex-1">
//           <Image
//             className="object-cover"
//             src="/assets/asset 0.png"
//             alt="Logo"
//             width={48}
//             height={48}
//           />
//           <span className="text-lg font-medium font-display">ToDesktop</span>
//         </a>
//         <div id="nav-menu" className="hidden lg:flex gap-12">
//           <a href="#" className="font-medium hover:text-primary">
//             Pricing
//           </a>
//           <a href="#" className="font-medium hover:text-primary">
//             Docs
//           </a>
//           <a href="#" className="font-medium hover:text-primary">
//             Changelog
//           </a>
//           <a href="#" className="font-medium hover:text-primary">
//             Blogs
//           </a>

//           <Link href="/signin" className="font-medium hover:text-primary">
//             Login
//           </Link>

//         </div>
//         <div className="hidden lg:flex flex-1 justify-end">
//           <Link href="/signup">

//             <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
//               <Image src="/assets/asset 1.svg" alt="" width={20} height={20} />
//               <span className="font-display font-medium">
//                 Sign Up
//               </span>
//               <i className="fa-solid fa-arrow-right"></i>
//             </button>
//           </Link>
//         </div>

//         <button className="p-2 lg:hidden" onClick={handleMenu}>
//           <i className="fa-solid fa-bars text-gray-600"></i>
//         </button>

//         <div
//           id="nav-dialog"
//           className={`${isMenuOpen ? "" : "hidden"
//             } fixed z-10 md:hidden bg-white inset-0 p-3`}
//         >
//           <div id="nav-bar" className="flex justify-between">
//             <a href="#" id="brand" className="flex gap-2 items-center">
//               <Image
//                 className="object-cover"
//                 src="/assets/asset 0.png"
//                 alt="Logo"
//                 width={48}
//                 height={48}
//               />
//               <span className="text-lg font-medium font-display">
//                 ToDesktop
//               </span>
//             </a>
//             <button className="p-2 md:hidden" onClick={handleMenu}>
//               <i className="fa-solid fa-xmark text-gray-600"></i>
//             </button>
//           </div>
//           <div className="mt-6">
//             <a
//               href="#"
//               className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
//             >
//               Pricing
//             </a>
//             <a
//               href="#"
//               className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
//             >
//               Docs
//             </a>
//             <a
//               href="#"
//               className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
//             >
//               Changelog
//             </a>
//             <a
//               href="#"
//               className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
//             >
//               Blogs
//             </a>
//             <a
//               href="#"
//               className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
//             >
//               Login
//             </a>
//           </div>
//           <div className="h-[1px] bg-gray-300"></div>
//           <button className="mt-6 w-full flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-50">
//             <Image src="/assets/asset 1.svg" alt="" width={20} height={20} />
//             <span>Sign Up</span>
//           </button>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

"use client";
import React, { useState, useEffect } from "react";
import { SiAuth0 } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
    router.refresh();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-center">
      <nav className="w-full p-3 flex justify-between items-center backdrop-blur-md bg-white/60 transition-all duration-300 border-b-2 border-gray-200/50 shadow-lg lg:w-[90%] lg:rounded-full lg:border-2 lg:mt-4">
        {/* Brand */}
        <Link href="/" className="flex gap-2 items-center flex-1">
          <Image
            className="object-cover"
            src="/assets/lexnav.png"
            alt="Logo"
            width={48}
            height={48}
          />

          <span className="text-lg font-medium font-display">LexBot</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 items-center">
          <a href="#" className="font-medium hover:text-primary">
            Pricing
          </a>
          <Link href="/about" className="font-medium hover:text-primary">
            About
          </Link>
          {/* <Link href="/blog" className="font-medium hover:text-primary">
            Blog
          </Link> */}
          <Link href="/contact" className="font-medium hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
          {isMounted && !session ? (
            <>
              <Link href="/signin">
                <button className="flex gap-2 items-center text-white bg-amber-500 border border-amber-400 px-6 py-2 rounded-lg hover:border-gray-600 cursor-pointer">
                  <SiAuth0 />
                  <span className="font-display font-medium ">Login</span>
                </button>
              </Link>
              <Link href="/signup">
                <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 cursor-pointer">
                  <SiAuth0 />
                  <span className="font-display font-medium">Sign Up</span>
                </button>
              </Link>
            </>
          ) : isMounted && session ? (
            <>
              <span className="font-medium text-gray-700 mr-3">
                Hi, {session?.user?.email?.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="flex gap-2 items-center border border-red-500 text-red-600 px-6 py-2 rounded-lg hover:border-red-700 cursor-pointer"
              >
                <span className="font-display font-medium">Logout</span>
              </button>
            </>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 lg:hidden" onClick={handleMenu}>
          {isMenuOpen ? (
            <HiX className="text-gray-600 text-2xl" />
          ) : (
            <HiMenu className="text-gray-600 text-2xl" />
          )}
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMounted && isMenuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed z-40 md:hidden bg-white inset-0 p-3"
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex gap-2 items-center">
                  <Image
                    className="object-cover"
                    src="/assets/lexnav.png"
                    alt="Logo"
                    width={48}
                    height={48}
                  />
                  <span className="text-lg font-medium font-display">
                    LexBot
                  </span>
                </Link>
                <button className="p-2" onClick={handleMenu}>
                  <HiX className="text-gray-600 text-2xl" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="space-y-3">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Pricing
                </a>
                <Link
                  href="/about"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Contact
                </Link>

                {isMounted && !session ? (
                  <>
                    <Link
                      href="/signin"
                      className="block px-4 py-2  hover:bg-gray-100  rounded-lg"
                    >
                      Login
                    </Link>
                    <Link href="/signup">
                      <button className="w-full mt-3 flex justify-center items-center gap-2 border border-gray-400 px-4 py-3 rounded-lg hover:bg-gray-50">
                        <SiAuth0 />
                        Sign Up
                      </button>
                    </Link>
                  </>
                ) : isMounted && session ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Logout
                  </button>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMounted && isMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-40 md:hidden bg-white inset-0 p-3"
          >
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex gap-2 items-center">
                <Image
                  className="object-cover"
                  src="/assets/lexnav.png"
                  alt="Logo"
                  width={48}
                  height={48}
                />
                <span className="text-lg font-medium font-display">
                  LexBot
                </span>
              </Link>
              <button className="p-2" onClick={handleMenu}>
                <HiX className="text-gray-600 text-2xl" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="space-y-3 text-center">
              <a
                href="#pricing"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Pricing
              </a>
              <Link
                href="/about"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Contact
              </Link>

              {isMounted && !session ? (
                <>
                  <Link
                    href="/signin"
                    className="block px-4 py-2  hover:bg-gray-100  rounded-lg"
                  >
                    Login
                  </Link>
                  <Link href="/signup">
                    <button className="w-full mt-3 flex justify-center items-center gap-2 border border-gray-400 px-4 py-3 rounded-lg hover:bg-gray-50">
                      <SiAuth0 />
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : isMounted && session ? (
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Logout
                </button>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
