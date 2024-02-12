import React from "react";
import TableWithShowMore from "../components/TableWithShowMore";
import{ xrayData} from "../data";
import { NavLink } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";

export default function Xray() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400">
        <img
          src="/services/xray1.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover brightness-50"
          alt="Radiology Doctor looking on Xray"
        />
        <div className="relative w-1/3 h-[100px] lg:h-[250px] overflow-hidden flex justify-center items-center">
          <img
            src="/services/xray.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover brightness-50 bg-center bg-cover object-center"
            alt="Radiologic Technologist"
          />
          <h1 className="flex justify-center items-center absolute text-sm lg:text-5xl font-bold  text-white cursor-default tracking-widest">
            X-Ray
          </h1>
        </div>
        <img
          src="/services/xray2.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover object-center brightness-50"
          alt="Xray Machine"
        />
      </div>
      
      <TableWithShowMore data={xrayData} />

      <div className="grid relative justify-center items-center md:pt-3 2xl:pt-5">
        <h2 className="flex justify-evenly justify-items-center content-evenly items-start text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Evacuation Plan
        </h2>
        <img
          src="/FloorPlan/ultra.jpg"
          alt="xray evacuation plan"
          className="h-auto w-auto xl:h-[480px] xl:w-[800px] 2xl:h-[790px] 2xl:w-full px-5"
        />

        <button
          type="button"
          className="fixed opacity-30 xl:opacity-50 hover:opacity-100 duration-500 top-[100px] xl:top-[170px]"
        >
          <NavLink
            to="/services"
            className="font-bold text-white hover:pl-8 hover:text-[#337CCF] bg-blue-300 hover:bg-blue-50 hover:border-blue-400 rounded-r-full px-3 py-1 border-white-400 border-4 pb-2 text-sm lg:text-lg duration-500"
          >
            <BiSolidChevronLeft className="inline-block relative right-[1px] bottom-[2px]" />
            Back
          </NavLink>
        </button>
      </div>
    </>
  );
}
