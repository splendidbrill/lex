"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Brand/Logo */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <Link href="/" className="flex gap-2 items-center">
              <Image
                className="object-cover"
                src="/assets/lexnav.png"
                alt="LexBot Logo"
                width={48}
                height={48}
              />
              <span className="text-lg font-medium font-display text-gray-900">LexBot</span>
            </Link>
            <p className="mt-4 text-base text-gray-600 font-inter max-w-xs">
              Your AI enhanced command center, cofounder and mentor.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Product</p>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200"></Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200">Pricing</Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200"></Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Company</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200">About Us</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200">Blog</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Legal</p>
              <ul className="space-y-3">
                <li>
                  <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=18acfba8-713a-4e53-aa03-d681624602b4" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-600 hover:text-gray-900 font-inter transition-colors duration-200"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
          <p className="text-base text-gray-500 font-inter">&copy; {new Date().getFullYear()} KOLKAR TECHNOLOGIES INC. All rights reserved</p>
          <div className="flex justify-center sm:justify-start space-x-6 mt-6 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;