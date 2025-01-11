import React from "react";
import { QuickMedLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="pt-24 mx-10 md:mx-3 xl:-mx-36 mt-20">
      <div className="flex items-start md:justify-between pb-12 flex-col md:flex-row gap-6">
        <img src={QuickMedLogo} />
        <div className="flex gap-9 justify-between flex-col md:flex-row">
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
      </div>
      <hr className="border w-full md:mb-8 max-md:mb-4" />
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
      <div className="pb-8 md:ml-0">
        <p className="lg:text-xl text-slate-gray ">
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
