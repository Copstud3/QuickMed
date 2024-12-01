import React from "react";
import { QuickMedLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-start pt-24">
      <div className="flex flex-row justify-evenly items-start lg:gap-[200px] pb-12 max-md:flex-col max-md:gap-6">
        <img src={QuickMedLogo} className="mr-[180px]" />
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className="text-base leading-normal font-medium mb-5 ">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className="mt-3 text-slate-gray text-base leading-6 hover:text-slate-gray cursor-pointer"
                  key={link.name}
                >
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="border w-full lg:mb-8 max-md:mb-4" />
      <div className="mb-16 flex justify-between items-center w-full max-sm:flex-col max-sm:gap-4 max-md:mb-8">
        {/* Text section */}

        <div className="flex justify-start">
          <p className="text-slate-gray text-base">
            Quick Med. All rights reserved. © 2024
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end space-x-8 lg:mr-[72px] ">
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.src}
              alt={social.alt}
              className="h-6 w-6"
            />
          ))}
        </div>
      </div>
      <div className="pb-8">
        <p className="lg:text-xl text-slate-gray">
          Designed by{" "}
          <a href="https://x.com/ayodeji_law" className="text-black hover:text-purple active:text-purple">
            Ayolaw
          </a>
          , Developed by{" "}
          <a href="https://linktr.ee/iam_chris" className="text-black hover:text-purple active:text-purple">
            Chris
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
