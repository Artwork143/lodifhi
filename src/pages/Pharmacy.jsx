import React from "react";
import DownloadButton from "../components/DownloadButton";
import { NavLink } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";

function Pharmacy() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400">
        <img
          src="/services/pharmacy1.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover  brightness-50"
          alt="Pharmacist"
        />
        <div className="relative w-1/3 h-[100px] lg:h-[250px] overflow-hidden flex justify-center items-center">
          <img
            src="/services/pharmacy2.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover brightness-50 bg-center bg-cover object-center"
            alt="Pharmacy"
          />
          <h1 className="flex justify-center items-center absolute text-sm lg:text-5xl font-bold  text-white cursor-default tracking-widest">
            Pharmacy
          </h1>
        </div>
        <img
          src="/services/pharmacy3.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover object-center brightness-50"
          alt="Pharmacist"
        />
      </div>

      <div className="bg-gray-100 pt-1 md:pb-6">
        <div className="grid grid-cols-1 gap-1 mx-0 lg:mx-32 xl:mx-52 2xl:mx-80 my-7 justify-evenly justify-items-center content-evenly items-start cursor-default">
          <div className="bg-[#1450A3] bg-opacity-70 w-full h-full shadow-inner2 text-white my-2">
            <p className=" m-5 text-justify text-base sm:text-lg">
              This Department is responsible for the ordering, storing,
              dispensing, preparing, distribution and inventory of medications
              for effective drug-therapy management of inpatients and
              outpatients. The Department also practice advocacy of medication
              safety and efficiency in the hospital at all times through
              monitoring and assessment services completed by qualified and
              professionally competent pharmacists. The Department oversees
              rational selection, monitoring, dosing and control of patients’
              overall drug therapy program.
            </p>
            <div className="grid grid-cols-2 justify-evenly justify-items-center content-center">
              <h2 className="flex justify-center my-2 items-center text-sm lg:text-2xl font-bold cursor-default">
                Schedule: Open 24/7
              </h2>

              <DownloadButton />
            </div>
          </div>
        </div>
      </div>

      <div className="grid relative justify-center items-center md:pt-3 2xl:pt-5">
        <h2 className="flex justify-evenly justify-items-center content-evenly items-start text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Evacuation Plan
        </h2>
        <img
          src="/FloorPlan/PHARMACY.jpg"
          alt="pharmacy evacuation plan"
          className="h-auto w-auto xl:h-[480px] xl:w-[800px] 2xl:h-[790px] 2xl:w-full px-5"
        />

        <button
          type="button"
          className="fixed opacity-50 hover:opacity-100 duration-500 top-[100px] xl:top-[170px]"
        >
          <NavLink
            to="/services"
            className="font-bold text-white hover:pl-8 hover:text-[#337CCF] bg-blue-300 hover:bg-blue-50 hover:border-blue-400 rounded-r-full  px-3 py-1 border-white-400 border-4 pb-2 text-sm lg:text-lg duration-500"
          >
            <BiSolidChevronLeft className="inline-block relative right-[1px] bottom-[2px]" />
            Back
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default Pharmacy;
