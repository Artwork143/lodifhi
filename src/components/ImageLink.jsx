import React from "react";
import { NavLink } from "react-router-dom";

function ImageLink(props) {
  return (
    <>
      <div class="relative group w-full md:w-1/3 md:hover:w-1/2 hover:scale-y-125 lg:transition-all lg:duration-500 lg:delay-300 overflow-hidden bg-cover bg-no-repeat">
        <img
          src={props.src}
          class="w-full h-28 md:h-72 bg-center bg-cover brightness-50 lg:filter-none"
          alt="Images"
        />
        <NavLink to={props.route}>
          <p
            className="transition-all transform text-slate-100 
            lg:translate-x-8 lg:group-hover:translate-x-0 opacity-100 lg:opacity-0 
                                lg:group-hover:opacity-100 
                                 duration-500 delay-300 flex justify-center items-center absolute text-xl lg:text-3xl font-bold bottom-0 left-0 right-0 top-0 lg:bg-[#1450A3] lg:bg-opacity-50"
          >
            {props.title}
          </p>
          {/* <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div> */}
        </NavLink>
      </div>
    </>
  );
}

export default ImageLink;
