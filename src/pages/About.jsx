import React from "react";
import { leadersData } from "../data";

function Leaders(leadersData) {
  return (
    <div key={leadersData.id} className="w-auto bg-opacity-70 h-auto lg:h-full border-b-8 border-b-[#337CCF] border-t-8 border-t-[#337CCF] my-2 shadow-md">
      <img
        src={leadersData.Source}
        className="h-auto w-full"
        alt="Hospital leader"
      />
      <h3 className="font-bold 2xl:text-lg text-center text-[#337CCF] mt-1">
        {leadersData.Name}
      </h3>
      <p className="text-center text-sm 2xl:text-base text-gray-400">
        {leadersData.Position}
      </p>
    </div>
  );
}

function About() {
  return (
    <>
    <div className="flex border-b-4 border-blue-400 ">
        <div className="relative w-full h-[100px] lg:h-[200px] overflow-hidden flex justify-center items-center">
          <img
            src="/homepage.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover opacity-50 bg-center bg-cover object-center"
            alt="Pharmacy"
          />
          <h1 className="flex justify-center items-center absolute text-2xl lg:text-5xl font-bold text-[#337CCF] cursor-default tracking-widest">
          About Us
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 pt-1 md:pb-6">
        <div className="grid grid-cols-1 gap-1 mx-0 lg:mx-32 xl:mx-52 2xl:mx-80 my-2 justify-evenly justify-items-center content-evenly items-start cursor-default">
          <div className="bg-white bg-opacity-70 w-full h-full shadow-lg text-gray-700 my-2">
            <h2 className="flex justify-start my-2 ml-5 items-start text-sm lg:text-2xl font-bold cursor-default tracking-widest">
              Hospital Background
            </h2>
            <p className="mx-5 my-2 text-justify text-base sm:text-lg">
              A HUMBLE BEGINNING.... The hospital was conceived in 1972 by the
              then planters committee of the Lopez milling district, the
              prototype of the present Lopez District Farmers Foundation,
              Incorporated. In 1974, an out-patient clinic was opened. In
              December of the same year, medical and pediatric services were
              offered. Surgical Services started September 4, 1975. The
              Congregation of the Daughters of Charity was in charged of the
              administrative management. Currently, the Lopez District Farmers
              Foundation Incorporated has direct supervision of the hospital.
              LODIFHI is a level 1, private hospital with a capacity of 55-
              In-Patient beds. We have two functioning Operating rooms and a
              Delivery Room. Our OPD operates daily, from 8AM to 4PM.
            </p>

            <h2 className="mt-5 flex justify-start my-2 ml-5 items-start text-sm lg:text-2xl font-bold cursor-default tracking-widest">
              Mission
            </h2>
            <p className="mx-5 my-2 text-justify text-base sm:text-lg">
              To give the extra mile in our commitment to excellence in
              providing medical care.
            </p>

            <h2 className="mt-5 flex justify-start my-2 ml-5 items-start text-sm lg:text-2xl font-bold cursor-default tracking-widest">
              Vision
            </h2>
            <p className="mx-5 my-2 text-justify text-base sm:text-lg">
              Be a center of excellence in health care for Northern Negros.
            </p>

            <h2 className="mt-5 flex justify-start my-2 ml-5 items-start text-sm lg:text-2xl font-bold cursor-default tracking-widest">
              Goals
            </h2>
            <ul class="list-disc text-sm xl:text-base ml-14">
              <li>
                Uplift the lives of the sugar industry workers by providing
                quality health care
              </li>
              <li>Stimulate health consciousness</li>
              <li>
                Cultivate individual and professional growth of all personal so
                as to provide maximum quality care
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-1 md:pb-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-6 mx-0 lg:mx-32 xl:mx-52 2xl:mx-80 my-3 justify-evenly justify-items-center content-evenly items-start cursor-default">
        {leadersData.map(Leaders)}
        </div>
      </div>
    </>
  );
}

export default About;
