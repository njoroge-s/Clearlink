"use client"
import React, { useState } from "react";
import {  FiMenu } from "react-icons/fi"; // Import hamburger and close icons
import { CgClose } from "react-icons/cg"; // Import hamburger and close icons
import Logo from "public/logo.svg";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 border border-gray-300 mt-12 container rounded-full relative">
      {/* Desktop Navigation */}
      <div className="md:flex justify-between items-center w-[95%] mx-auto hidden py-2 flex-wrap">
        <div className="flex items-center gap-1">
          <Image src={Logo} alt="" />
          <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
        </div>
        <ul className="text-gray-500 flex gap-8 items-center  cursor-pointer">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className="flex items-center gap-4">
          <Button
            value="Talk to sales"
            styles="text-gray-900 bg-white border border-gray-400"
            link=""
          />
          <Button
            value="Sign up for free"
            styles="text-white bg-blue"
            link=""
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <Image src={Logo} alt="" />
          <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
        </div>
        {isMobileMenuOpen ? (
          <CgClose
            onClick={toggleMobileMenu}
            className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        ) : (
          <FiMenu
            onClick={toggleMobileMenu}
            className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-8 absolute top-20 left-0 right-0 z-50 w-full rounded-md ">
          <ul className="text-gray-700  cursor-pointer">
            <li className="py-2">Products</li>
            <li className="py-2">Solutions</li>
            <li className="py-2">Resources</li>
            <li className="py-2">Pricing</li>
          </ul>
          <div className="flex  flex-col gap-4  mt-4">
            <Button
              value="Talk to sales"
              styles="text-gray-900 bg-white border border-gray-400"
              link=""
            />
            <Button
              value="Sign up for free"
              styles="text-white bg-blue"
              link=""
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
