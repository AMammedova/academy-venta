import React from "react";
import LogoVPN from "../../public/images/Logo2.png";
import Facebook from "../../public/icon/facebook.svg";
import Twitter from "../../public/icon/twitter.svg";
import Instagram from "../../public/icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 py-12 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-4 items-center justify-center pb-8 lg:pb-0">
          <div className="sm:col-span-4 flex flex-col items-center sm:items-start">
            <Image
              src={LogoVPN}
              alt="Logo"
              width={240}
              height={240}
              className="w-40 sm:w-48 lg:w-60"
            />
            <div className="flex justify-center sm:justify-start w-full mt-4 mb-6 sm:ml-4">
              <div className="mx-2 bg-white-500 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
              </div>
              <div className="mx-2 bg-white-500 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <Image src={Twitter} alt="Twitter" width={24} height={24} />
              </div>
              <div className="mx-2 bg-white-500 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <Image src={Instagram} alt="Instagram" width={24} height={24} />
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-left">
              ©{new Date().getFullYear()} - Venta Academy. All rights reserved.
            </p>
          </div>
          <div className="sm:col-span-2 mt-8 sm:mt-0">
            <p className="text-black-600 mb-4 font-medium text-lg text-center sm:text-left">
              Product
            </p>
            <ul className="text-black-500 space-y-2 text-center sm:text-left">
              {[
                "Download",
                "Pricing",
                "Locations",
                "Server",
                "Countries",
                "Blog",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-colors text-sm sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 mt-8 sm:mt-0">
            <p className="text-black-600 mb-4 font-medium text-lg text-center sm:text-left">
              Engage
            </p>
            <ul className="text-black-500 space-y-2 text-center sm:text-left">
              {[
                "LaslesVPN ?",
                "FAQ",
                "Tutorials",
                "About Us",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-colors text-sm sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Earn Money Links */}
          <div className="sm:col-span-2 mt-8 sm:mt-0">
            <p className="text-black-600 mb-4 font-medium text-lg text-center sm:text-left">
              Earn Money
            </p>
            <ul className="text-black-500 space-y-2 text-center sm:text-left">
              {["Affiliate", "Become Partner"].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-colors text-sm sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
