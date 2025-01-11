import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { QuickMedLogo } from "../assets/images";
import Button from "../components/Button";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown-menu");
      const hamburgerIcon = document.getElementById("hamburger-icon");
      if (
        isMenuOpen &&
        dropdown &&
        !dropdown.contains(event.target) &&
        !hamburgerIcon.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="h-[96px] relative">
      <nav className="mx-10 xl:max-w-7xl xl:mx-auto flex pt-[23px] justify-between items-center font-[500]">
        {/* Logo */}
        <a href="/">
          <img src={QuickMedLogo} alt="Logo" width={300} />
        </a>

        {/* Hamburger Icon */}
        <div className="hidden max-md:block justify-end cursor-pointer relative w-6 h-6">
          <button
            id="hamburger-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full h-full"
          >
            <span className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen 
                ? "top-1/2 -translate-y-1/2 rotate-45" 
                : "top-0"
            }`} />
            <span className={`absolute w-full h-0.5 bg-black top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`} />
            <span className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen 
                ? "bottom-1/2 translate-y-1/2 -rotate-45" 
                : "bottom-0"
            }`} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="justify-between items-center gap-10 mr-[6%] hidden xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-slate-gray font-[500] hover:text-slate-400 hover:text-[20px] transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Login/Sign-up */}
        <div className="flex justify-between items-center gap-10 max-md:hidden">
          <a
            className="hover:text-slate-gray hover:text-[20px] transition-all duration-300"
            href="/"
          >
            Log in
          </a>
          <Button label="Sign Up" className="bg-purple-gradient max-sm:text-sm" />
        </div>
      </nav>

      {/* Dropdown Menu for Mobile */}
      <div
        id="dropdown-menu"
        className={`fixed top-[65px] right-0 bg-white shadow-lg rounded-lg py-4 px-6 w-[80%] lg:hidden z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-slate-gray font-[500] hover:text-slate-400 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col mt-6 gap-4">
          <a
            href="/"
            className="text-slate-gray text-center font-[500] hover:text-slate-400 transition-all duration-300"
          >
            Log in
          </a>
          <Button label="Sign Up" className="bg-purple-gradient" />
        </div>
      </div>
    </header>
  );
};

export default Nav;