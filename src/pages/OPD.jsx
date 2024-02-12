import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";
import TableWithShowMore from "../components/TableWithShowMore";
import { opdData } from "../data";

function OPD() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400">
        <img
          src="/services/opd3.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover brightness-50"
          alt="Nurses taking patient's information"
        />
        <div className="relative w-1/3 h-[100px] lg:h-[250px] overflow-hidden flex justify-center items-center">
          <img
            src="/services/opd1.avif"
            className="w-full h-[100px] lg:h-[250px] object-cover brightness-50 bg-center bg-cover object-center"
            alt="Doctor consulting a patient"
          />
          <h1 className="flex justify-center items-center absolute text-sm lg:text-5xl font-bold  text-white cursor-default tracking-widest">
            Outpatient
          </h1>
        </div>
        <img
          src="/services/opd2.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover object-center brightness-50"
          alt="Nurse interviewing a patient"
        />
      </div>

      <TableWithShowMore data={opdData} />

      <div className="grid relative justify-center items-center md:pt-3 2xl:pt-5">
        <h2 className="flex justify-evenly justify-items-center content-evenly items-start text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Evacuation Plan
        </h2>
        <img
          src="/FloorPlan/OPD.jpg"
          alt="OPD evacuation plan"
          className="h-auto w-auto xl:h-[480px] xl:w-[800px] 2xl:h-[790px] 2xl:w-full px-5"
        />

        <button
          type="button"
          className="fixed opacity-50 hover:opacity-100 duration-500 top-[100px] xl:top-[170px]"
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

export default OPD;
