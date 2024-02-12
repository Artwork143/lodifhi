import React from "react";
import ServiceImage from "../components/ServiceImage";

function Services() {
  return (
    <>
      {/* <h1 className="flex justify-center items-center text-sm lg:text-2xl font-bold pt-3 mb-2 text-[#337CCF] cursor-default">
        Our Services
      </h1> */}
      <div className="flex border-b-4 border-blue-400 ">
        <div className="relative w-full h-[100px] lg:h-[200px] overflow-hidden flex justify-center items-center">
          <img
            src="/services.png"
            className="w-full h-[100px] lg:h-[250px] object-cover opacity-50 bg-center bg-cover object-center"
            alt="Pharmacy"
          />
          <h1 className="flex justify-center items-center absolute text-2xl lg:text-5xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Our Services
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center pt-3 lg:my-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 mx-4 lg:mx-32 xl:mx-48 2xl:mx-60">
          <ServiceImage src="/services/lab1.jpg" route="/services/laboratory" title="Laboratory" />
          <ServiceImage src="/services/pharmacy.jpg" route="/services/pharmacy" title="Pharmacy" />
          <ServiceImage src="/services/x-ray.jpg" route="/services/xray" title="X-Ray" />
          <ServiceImage src="/services/ultra.jpg" route="/services/ultrasound" title="Ultrasound" />
          <ServiceImage src="/services/or.jpg" route="/services/or" title="Operating Room" />
          <ServiceImage src="/services/er.jpg" route="/services/er" title="Emergency Room" />
          <ServiceImage src="/services/opd.jpg" route="/services/outpatient" title="Outpatient" />
        </div>
      </div>
    </>
  );
}

export default Services;
