import React from "react";
import { roomsData } from "../data";

function PatientRooms() {
  const RoomsComponent = ({ data }) => {
    return (
      <>
      <div className="hidden sm:block">
        {data.map((object, index) => (
          <div
            className={`flex justify-center items-center pt-3 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <div className="sm:grid-cols-2 gap-3 mb-4 mx-4 lg:mx-32 xl:mx-48 2xl:mx-60 py-5">
              <div
                key={object.id}
                className="grid sm:grid-cols-2 gap-2 2xl:gap-6 2xl:mx-28 my-0"
              >
                <div className={`${index % 2 === 0 ? "order-1" : "order-2"} relative flex justify-center items-center`}>
                  <img
                    src={object.source}
                    alt="services"
                    className="h-auto w-auto xl:h-[400px] xl:w-[600px] rounded-tl-3xl rounded-br-3xl"
                  />
                </div>
                <div className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
                  <h1 className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default`}>
                    {object.title}
                  </h1>
                  <p className={`${index % 2 === 0 ? "justify-end pr-3" : "justify-start pl-3"} h-10 my-1 bg-[#337CCF] text-white font-bold tracking-wider flex items-center cursor-default`}>
                    Rate: ₱ {object.rate.toLocaleString()}
                  </p>
                  <p className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex text-sm lg:text-lg font-bold text-gray-600 cursor-default`}>
                    Amenities
                  </p>
                  <ul className={`${index % 2 === 0 ? "text-left pr-28" : "text-right pl-28"} list-none text-gray-600`}>
                    {object.amenities.map((nestedValue, index) => (
                      <li key={index}>{nestedValue}</li>
                    ))}
                    <li className="italic">
                      <span className="font-bold">Note:</span> Any additional
                      bath towels, pillows, blankets, toiletries etc. will have
                      additional charge.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="block sm:hidden">
        {data.map((object, index) => (
          <div
            className={`flex justify-center items-center pt-3 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <div className="sm:grid-cols-2 gap-3 mb-4 mx-4 lg:mx-32 xl:mx-48 2xl:mx-60 py-5">
              <div
                key={object.id}
                className="grid sm:grid-cols-2 gap-2 2xl:gap-6 2xl:mx-28 my-0"
              >
                <div className={` relative flex justify-center items-center`}>
                  <img
                    src={object.source}
                    alt="services"
                    className="h-auto w-auto xl:h-[400px] xl:w-[600px] rounded-tl-3xl rounded-br-3xl"
                  />
                </div>
                <div >
                  <h1 className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex text-sm lg:text-2xl font-bold text-[#337CCF] cursor-default`}>
                    {object.title}
                  </h1>
                  <p className={`${index % 2 === 0 ? "justify-end pr-3" : "justify-start pl-3"} h-10 my-1 bg-[#337CCF] text-white font-bold tracking-wider flex items-center cursor-default`}>
                    Rate: ₱ {object.rate.toLocaleString()}
                  </p>
                  <p className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex text-sm lg:text-lg font-bold text-gray-600 cursor-default`}>
                    Amenities
                  </p>
                  <ul className={`${index % 2 === 0 ? "text-left pr-28" : "text-right pl-28"} list-none text-gray-600`}>
                    {object.amenities.map((nestedValue, index) => (
                      <li key={index}>{nestedValue}</li>
                    ))}
                    <li className="italic">
                      <span className="font-bold">Note:</span> Any additional
                      bath towels, pillows, blankets, toiletries etc. will have
                      additional charge.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex border-b-4 border-blue-400 ">
        <div className="relative w-full h-[100px] lg:h-[200px] overflow-hidden flex justify-center items-center">
          <img
            src="/hallway.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover opacity-50 bg-center bg-cover object-center"
            alt="Pharmacy"
          />
          <h1 className="flex justify-center items-center absolute text-2xl lg:text-5xl font-bold text-[#337CCF] cursor-default tracking-widest">
          Patient Rooms
          </h1>
        </div>
      </div>
      <RoomsComponent data={roomsData} />
    </>
  );
}

export default PatientRooms;
