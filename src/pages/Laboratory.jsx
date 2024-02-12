import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";

function Laboratory() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400">
        <img
          src="/services/lab2.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover brightness-50"
          alt="Two Medical Technologist"
        />
        <div className="relative w-1/3 h-[100px] lg:h-[250px] overflow-hidden flex justify-center items-center">
          <img
            src="/services/lab3.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover brightness-50 bg-center bg-cover object-center"
            alt="Medical Technologist 1"
          />
          <h1 className="flex justify-center items-center absolute text-sm lg:text-5xl font-bold  text-white cursor-default tracking-widest">
            Laboratory
          </h1>
        </div>
        <img
          src="/services/lab4.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover object-center brightness-50"
          alt="Medical Technologist 2"
        />
      </div>
      <div className=" bg-gray-100 md:py-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mx-0 lg:mx-32 xl:mx-52 2xl:mx-80 my-7 justify-evenly justify-items-center content-evenly items-start shadow-inner2 text-white">
          <div className="grid grid-rows-2 sm:grid-rows-3 gap-9 h-full w-full bg-[#1450A3] justify-center bg-opacity-80 px-5">
            <div className="mt-5">
              <h3 className="font-bold text-lg">Hematology</h3>
              <ul class="list-disc text-sm xl:text-base">
                <li>CBC with Platelet - ₱273.00</li>
                <li>ESR - ₱154.00</li>
                <li>Clotting/bleeding time - ₱128.00</li>
                <li>Prothrombin time - ₱910.00</li>
                <li>Blood typing - ₱75.00</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mt-2">Clinical Microscopy</h3>
              <ul class="list-disc text-sm xl:text-base">
                <li>Urinalysis - ₱65.00</li>
                <li>Fecalysis - ₱65.00</li>
                <li>Pregnancy Test - ₱261.000</li>
                <li>Occult Blood - ₱556.00</li>
              </ul>
            </div>
            <div className="hidden sm:block">
            <p className="font-bold text-lg">Schedule: Open 24/7</p>
            </div>
          </div>

          <div className="grid grid-row-2 gap-3 h-full w-full bg-[#1450A3] justify-center bg-opacity-75">
            <div className="my-5 mb-11">
              <h3 className="font-bold text-lg">Clinical Chemistry</h3>
              <ul class="list-disc text-sm xl:text-base">
                <li>Creatinine - ₱157.00</li>
                <li>BUN - ₱143.00</li>
                <li>SGPT/ALT - ₱196.00</li>
                <li>SGOT/AST - ₱200.00</li>
                <li>Amylase - ₱772.00</li>
                <li>Albumin - ₱535.00</li>
                <li>Uric Acid - ₱157.00</li>
                <li>FBS - ₱143.00</li>
                <li>RBS - ₱143.00</li>
                <li>Total Cholesterol - ₱130.00</li>
                <li>HDL - ₱285.00</li>
                <li>LDL - ₱285.00</li>
                <li>Triglycerides - ₱315.00</li>
                <li>HbA1c - ₱1,164.00</li>
                <li>Total Bilirubin - ₱297.00</li>
                <li>Magnesium - ₱689.00</li>
                <li>ALP - ₱560.34</li>
                <li>Phosphorus - ₱315.00</li>
              </ul>
            </div>
          </div>

          <div className="grid h-full w-full bg-[#1450A3] justify-center bg-opacity-70 px-10">
            <div className="mt-5">
              <h3 className="font-bold text-lg">Electrolytes</h3>
              <ul class="list-disc text-sm xl:text-base">
                <li>Sodium - ₱249.00</li>
                <li>Potassium - ₱231.00</li>
                <li>Ionized Calcium - ₱700.00</li>
                <li>Chloride - ₱261.00</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mt-5 sm:mt-0">Serology</h3>
              <ul class="list-disc text-sm xl:text-base mb-7 sm:mb-0">
                <li>COVID-19 Rapid Antigen Test - ₱900.00</li>
                <li>RTPCR SWAB - ₱1200.00</li>
                <li>HBsAg - ₱273.00</li>
                <li>Troponin I/Trop I - ₱1,045.00</li>
                <li>C-Reactive Protein/CRP - ₱653.00</li>
                <li>Prostate Specific Antigen/PSA - ₱1,045.00</li>
                <li>T3 - ₱802.00</li>
                <li>T4 - ₱802.00</li>
                <li>TSH - ₱1,158.00</li>
                <li>Typhidot - ₱915.00</li>
                <li>Dengue Test - ₱1,045.00</li>
                <li>Anti-HAV - ₱990.00</li>
              </ul>
            </div>
            <div className="block sm:hidden">
            <p className="mb-3 font-bold text-lg flex justify-start">Schedule: <span className="ml-2">Open 24/7</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid relative justify-center items-center py-0 md:pt-3 2xl:pt-5">
        <h2 className="flex justify-evenly justify-items-center content-evenly items-start text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Evacuation Plan
        </h2>
        <img
          src="/FloorPlan/LABORATORY.jpg"
          alt="laboratory evacuation plan"
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

export default Laboratory;
