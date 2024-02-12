import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";

function ER() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400">
        <img
          src="/services/er1.avif"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover brightness-50"
          alt="Emergency Room hallway"
        />
        <div className="relative w-1/3 h-[100px] lg:h-[250px] overflow-hidden flex justify-center items-center">
          <img
            src="/services/er2.png"
            className="w-full h-[100px] lg:h-[250px] object-cover brightness-50 bg-center bg-cover object-center"
            alt="Nurses rushing patient to the ER"
          />
          <h1 className="flex justify-center items-center absolute text-xs lg:text-4xl 2xl:text-5xl font-bold  text-white cursor-default tracking-widest">
            Emergency Room
          </h1>
        </div>
        <img
          src="/services/er3.jpg"
          className="w-1/3 h-[100px] lg:h-[250px] object-cover object-center brightness-50"
          alt="Dextrose on ER"
        />
      </div>

      <div className="bg-gray-100 pt-1 md:pb-6">
        <div className="grid grid-cols-1 gap-1 mx-0 lg:mx-32 xl:mx-52 2xl:mx-80 my-7 justify-evenly justify-items-center content-evenly items-start cursor-default">
          <div className="bg-[#1450A3] bg-opacity-70 w-full h-full shadow-inner2 text-white my-2">
            <p className=" m-5 text-justify text-base sm:text-lg">
              The Emergency Department provides immediate medical assessment and
              initiates treatment. <br />
              Its capabilities include:
            </p>
            <div className="ml-12 grid grid-cols-1 sm:grid-cols-3 mb-5">
              <div className="mr-10">
                <ul class="list-disc xl:text-lg font-bold">
                  <li>Emergent Care</li>
                  <p className="text-base font-normal">
                    - Cardiopulmonary neurologic resuscitation for Adult and
                    Pediatric Cases
                  </p>
                  <p className="text-base font-normal">
                    - Life -/ limb-threatening conditions requiring
                  </p>
                  <li>Trauma Care and Burn</li>
                  <li>Poisoning</li>
                  <p className="text-base font-normal">
                    - ingestion of all types of harmful substances found in
                    household cleaners (i.e., hydrogen peroxide, alkaline
                    chemicals), food poisoning, overdose of all types of
                    medicines and illegal drugs
                  </p>
                </ul>
              </div>

              <div className="mr-10 sm:ml-10">
                <ul class="list-disc xl:text-lg font-bold">
                  <li>Urgent Care</li>
                  <p className="text-base font-normal">
                    - Consultation and initial diagnostic work-up
                  </p>
                  <p className="text-base font-normal">
                    - Initial order for patients requiring emergency admission
                  </p>
                  <li>Non-Urgent Care</li>
                  <p className="text-base font-normal">- Bite Management</p>
                  <p className="text-base font-normal">- Ambulatory services</p>
                  <p className="text-base font-normal">
                    - Loading of Antibiotics
                  </p>
                  <li>Isolation Room</li>
                  <p className="text-base font-normal">
                    - ordinary isolation room can hold patients with chicken
                    pox, tuberculosis and measles; while Airborne Isolation (AI
                    Unit) can accommodate patients diagnosed to manifest
                    symptoms of Ebola and MERS-CoV
                  </p>
                </ul>
              </div>

              <div className="sm:ml-10">
                <ul class="list-disc xl:text-lg font-bold">
                  <li>ENT and Ophthalmology cases</li>
                  <li>Transport</li>
                  <p className="text-base font-normal mr-16">
                  - Pick-up, transfer and home services through our Ambulance transport
                  </p>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 justify-evenly justify-items-center content-center">
              <h2 className="flex justify-center my-4 items-center text-sm lg:text-2xl font-bold cursor-default">
                Schedule: Open 24/7
              </h2>

              <h2 className="flex justify-center my-4 items-center text-sm lg:text-2xl font-bold cursor-default">
                Call Us: 0938 163 0291
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid relative justify-center items-center md:pt-3 2xl:pt-5">
        <h2 className="flex justify-evenly justify-items-center content-evenly items-start text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Evacuation Plan
        </h2>
        <img
          src="/FloorPlan/EMERGENCY ROOM.jpg"
          alt="emergency room evacuation plan"
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

export default ER;
