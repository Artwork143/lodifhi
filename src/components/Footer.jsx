import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#337CCF] grid sm:flex grid-cols-2 xl:grid-cols-4 gap-3 justify-evenly justify-items-center content-evenly py-5 border-b-2 border-white text-white text-lg cursor-pointer px-10 lg:px-28 xl:px-44 2xl:px-72">
        <div>
          <ul className="grid gap-4 text-xs md:text-base">
            <li className="hover:text-blue-300">
              <NavLink to="/about/doctors">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Doctors
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/services">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Our Services
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/about/patientrooms">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Patient Rooms
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to={"/"} state={{ source: 'footer' }}>
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                HMO & Corporate Accounts
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="grid gap-4 text-xs md:text-base">
            <li className="hover:text-blue-300">
              <NavLink to="/about">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Hospital Background
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/about">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Mission
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/about">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Vision
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/about">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Goals
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="grid gap-4 mr-14 sm:mr-0 mt-5 sm:mt-0 text-xs md:text-base">
            <li className="hover:text-blue-300">
              <NavLink to={"/about"} state={{ source: 'footer' }}>
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Hospital Leaders
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/contact">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Contact Numbers
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <NavLink to="/contact">
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Location
              </NavLink>
            </li>
            <li className="hover:text-blue-300">
              <a
                href="https://www.facebook.com/lodifhi.sagay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiSolidRightArrow className="inline-block relative bottom-[2px] right-1 text-blue-400 text-xs md:text-sm" />
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="text-xs">
          <ul className="grid gap-1">
            <li className="hover:text-blue-300">
              <img src="/logo.png" alt="hospital logo" className=" h-24 w-28" />
            </li>
            <li className="hover:text-blue-300">
              <MdEmail className="inline-block relative bottom-[2px] right-1 text-blue-400 text-sm" />
              lodifhi@gmail.com
            </li>
            <li className="hover:text-blue-300">
              <MdCall className="inline-block relative bottom-[2px] right-1 text-blue-400 text-sm" />
              034-488-0868
            </li>
            <li className="hover:text-blue-300">
              <MdLocationOn className="inline-block relative bottom-[2px] right-1 text-blue-400 text-sm" />
              Brgy. Poblacion 2, Sagay City, <br /> Negros Occidental, 6122,
              Philippines
            </li>
          </ul>
        </div>
      </div>
      <footer className="relative flex flex-col lg:gap-2 lg:flex-row w-full items-center text-center justify-center p-4 bg-[#337CCF] text-slate-50 shadow-md h-13 cursor-pointer md:py-3 bottom-0">
        <p>
          ⓒ {year} Lopez District Farmers' Hospital, Incorporated. All rights
          reserved.
        </p>
        <p className=" text-blue-200 text-sm lg:text-base">
          <span className="hidden lg:inline-block">|</span> Develope by Dionisio
          Miñano Jr.
        </p>
      </footer>
    </>
  );
}

export default Footer;
