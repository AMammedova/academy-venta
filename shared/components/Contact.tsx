"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto  rounded-lg font-roboto">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
        <div>
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Have some big idea or brand to develop and need help? Then reach out
            wed love to hear about your project and provide help.
          </p>

          <ul className="mt-12 space-y-8">
            <li className="flex items-center">
              <EnvelopeIcon className="w-6 h-6" />
              <a href="javascript:void(0)" className="text-white text-sm ml-4">
                info@example.com
              </a>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="w-6 h-6" />
              <a href="javascript:void(0)" className="text-white text-sm ml-4">
                +158 996 888
              </a>
            </li>
            <li className="flex items-center">
              <MapPinIcon className="w-6 h-6" />
              <a href="javascript:void(0)" className="text-white text-sm ml-4">
                123 Street 256 House
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-[#F8F8F8] p-6 rounded-lg">
          <p className="text-sm font-semibold text-gray-800">
            Im interested in...
          </p>

          <div className="space-y-2 max-lg:mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm tracking-wider font-medium outline-none mr-2 text-white-500"
            >
              Hr management
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-transparent text-black-500 text-sm tracking-wider font-medium outline-none  mr-2"
            >
              Digital Marketing
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-transparent text-black-500 text-sm tracking-wider font-medium outline-none"
            >
              Frontend Development
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-transparent text-black-500 text-sm tracking-wider font-medium outline-none"
            >
              Backend Development
            </button>
          </div>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
            />
            <input
              type="phone"
              placeholder="Phone"
              className="w-full rounded-lg py-3 px-4 text-black-600 text-sm outline-none"
            />
            <div className="mb-10">
              <h4 className=" text-black-500 text-sm tracking-wider font-medium leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center justify-between gap-2 mr-11">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className=" checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 pl-3"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer text-black-500 text-base font-normal leading-6"
                  >
                    Email
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="radio-group-2"
                    type="radio"
                    name="radio-group"
                    className=" checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio-group-2"
                    className="flex items-center cursor-pointer text-black-500 text-base font-normal leading-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-lg px-4 text-black-600 text-sm pt-3 outline-none"
            ></textarea>
            <button
              type="button"
              className="text-white bg-orange-500 text-white-500 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
