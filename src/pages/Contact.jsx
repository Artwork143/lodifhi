import React from "react";
import { contactData } from "../data";

function Contact() {
  return (
    <>
      <div className="flex border-b-4 border-blue-400 ">
        <div className="relative w-full h-[100px] lg:h-[200px] overflow-hidden flex justify-center items-center">
          <img
            src="/admitting.jpg"
            className="w-full h-[100px] lg:h-[250px] object-cover opacity-50 bg-center bg-cover object-center sm:object-bottom"
            alt="Pharmacy"
          />
          <h1 className="flex justify-center items-center absolute text-2xl lg:text-5xl font-bold text-[#337CCF] cursor-default tracking-widest">
            Contact Us
          </h1>
        </div>
      </div>

      <form>
        <div className="grid sm:grid-cols-2 2xl:grid-cols-6 gap-5 my-5 sm:my-5">
          <div className="bg-[#337CCF] row-span-2 2xl:col-start-2 w-full h-auto  2xl:w-[600px] 2xl:h-full rounded-lg px-5 py-5">
            <p className="text-white mb-2 cursor-default">Name</p>
            <input className="required border rounded-md p-2 w-full h-auto focus:outline-none focus:ring focus:border-blue-400"></input>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-white mt-2 cursor-default">Mobile Number</p>
              <p className="text-white mt-2 cursor-default">Email Address</p>
              <input className="required border rounded-md p-2 w-full h-auto focus:outline-none focus:ring focus:border-blue-400"></input>
              <input className="required border rounded-md p-2 w-full h-auto focus:outline-none focus:ring focus:border-blue-400"></input>
            </div>

            <p className="text-white my-2 cursor-default">Message</p>
            <textarea class="resize-none border rounded-md p-2 w-full h-72 focus:outline-none focus:ring focus:border-blue-400"></textarea>
            <button className="bg-white font-bold xl:text-2xl mt-4 text-[#337CCF] hover:bg-blue-400 hover:text-white  h-12 w-1/2 rounded-lg">
              <a
                href="mailto:lodifhi@gmail.com"
                className="py-2 px-16 xl:px-28"
              >
                Send
              </a>
            </button>
          </div>

          <div className=" text-gray-600 2xl:col-start-4 2xl:col-end-6 mt-5 lg:mt-0">
            <p className="mb-1 ml-4 sm:ml-0 font-bold">CONNECT WITH US</p>
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b text-left">Department</th>
                  <th class="py-2 px-4 border-b text-left">Number</th>
                </tr>
              </thead>
              {contactData.map((contact) => (
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b">{contact.department}</td>
                  <td class="py-2 px-4 border-b">{contact.contactNum}</td>
                </tr>
              </tbody>
              ))}
            </table>
          </div>

          <div className="h-auto w-full 2xl:row-start-2 2xl:col-start-4 2xl:col-end-6  2xl:h-full mt-5 lg:mt-0">
            <p className="font-bold text-gray-600 mb-1 ml-4 sm:ml-0">
              Our Location
            </p>
            <iframe
              title="Map"
              className="h-[300px] w-full  2xl:h-[400px] border-2 border-[#337CCF] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8796129714315!2d123.41193941542!3d10.896752859939358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8dd359e8c0017%3A0x8c5912a9c408a05e!2sLopez%20District%20Farmers&#39;%20Hospital%20Inc!5e0!3m2!1sen!2sph!4v1579136555293!5m2!1sen!2sph"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
