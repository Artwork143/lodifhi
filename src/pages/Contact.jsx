import React from 'react'

function Contact() {
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
          Contact Us
          </h1>
        </div>
      </div>
    </>
  )
}

export default Contact