"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const menuItems = [
  { title: "Appointments", buttonText: "Appointments", link: "#" },
  { title: "Find a Doctor", buttonText: "Find Doctors", link: "#" },
  { title: "Patients & Visitors", buttonText: "Find out more", link: "#" },
];
const Menu = () => {
  return (
    <div className="w-full bg-[#0c3054] mx-auto">
      <div className="p-3 w-full">
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 text-white">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 items-center bg-[#0d355e] px-8 lg:px-0 py-3  shadow-md"
            >
              <div className="flex items-center space-x-2">
                <div className="w-1 h-6 bg-[#ffff]"></div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              <Link href={item.link}>
                <div className="bg-[#e00e57] text-white  py-2 px-4 text-sm hover:bg-[#365B66] transition inline-flex items-center space-x-3 ">
                  {item.buttonText} <MdOutlineKeyboardArrowRight size={25} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
