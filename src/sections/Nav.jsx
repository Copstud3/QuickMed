import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { QuickMedLogo } from "../assets/images";
import Button from "../components/Button";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when clicking outside of it
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
      <nav className="flex pt-[23px] justify-between items-center font-[500]">
        {/* Logo */}
        <a href="/">
          <img src={QuickMedLogo} alt="Logo" width={300} />
        </a>

        {/* Hamburger Icon */}
        <img
          id="hamburger-icon"
          src={hamburger}
          className="hidden max-md:block justify-end cursor-pointer"
          width={25}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="Hamburger Icon"
        />

        {/* Desktop Menu */}
        <ul className="flex justify-between items-center gap-10 mr-[6%] max-md:hidden">
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
      {isMenuOpen && (
        <div
          id="dropdown-menu"
          className="absolute top-[96px] right-0 bg-white shadow-lg rounded-lg py-4 px-6 w-[80%] lg:hidden z-50"
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
      )}
    </header>
  );
};

export default Nav;
