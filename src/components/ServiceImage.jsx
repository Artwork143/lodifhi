import React from 'react'
import { NavLink } from 'react-router-dom'

function ServiceImage(props) {
  return (
    <div className="relative flex justify-center items-center">
            <img
              src={props.src}
              alt="services"
              className="h-[250px] w-[400px] rounded-lg shadow-md border-4 border-[#87C4FF]"
            />
            <NavLink to={props.route} className="flex justify-center items-center absolute text-xl lg:text-2xl font-bold bg-[#1450A3] bg-opacity-50 xl:bg-opacity-0 hover:bg-opacity-50 w-full h-full opacity-100 xl:opacity-0 hover:opacity-100 rounded-lg duration-300 text-white"><p >
              {props.title}
            </p></NavLink>
            
          </div>
  )
}

export default ServiceImage