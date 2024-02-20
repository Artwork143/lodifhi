import React, { useState } from "react";
import { contactData } from "../data";

function Contact() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [mobileNo, setMobileNo] = useState("");

  const handleMobileChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleSendEmail = () => {
    const encodedMobileNo = encodeURIComponent(mobileNo);
    const encodedMessage = encodeURIComponent(message);
    const encodedName = encodeURIComponent(name);
    const mailtoLink = `mailto:lodifhi@gmail.com?body=Name: ${encodedName} | Mobile Number: ${encodedMobileNo} | Message: ${encodedMessage}`;

    // Open the default email client
    if (message.length > 0) {
      window.location.href = mailtoLink;
    }
  };
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5 my-5 sm:my-5">
          <div className="bg-[#337CCF] row-span-2 lg:col-start-2 lg:col-end-4 w-full h-auto rounded-lg px-5 py-5">
            <label className="text-white mb-2 cursor-default">Full Name</label>
            <input
              required
              value={name}
              onChange={handleNameChange}
              className="border rounded-md p-2 w-full h-auto focus:outline-blue-300"
            ></input>
            <div className="grid grid-cols-2 gap-2">
              <label className="text-white mt-2 cursor-default">
                Mobile Number
              </label>
              <label className="text-white mt-2 cursor-default">
                Email Address
              </label>
              <input
                required
                value={mobileNo}
                onChange={handleMobileChange}
                type="number"
                className="border rounded-md p-2 w-full h-auto focus:outline-blue-300 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              ></input>
              <input
                required
                type="email"
                className="border rounded-md p-2 w-full h-auto focus:outline-blue-300"
              ></input>
            </div>

            <label className="text-white my-2 cursor-default">Message</label>
            <textarea
              required
              type="text"
              value={message}
              onChange={handleInputChange}
              class="resize-none border rounded-md p-2 w-full h-72  focus:outline-blue-300"
            ></textarea>
            <button
              type="submit"
              onClick={handleSendEmail}
              className="bg-white font-bold xl:text-2xl mt-4 text-[#337CCF] hover:bg-blue-400 hover:text-white  h-12 w-1/2 rounded-lg"
            >
              Send
            </button>
          </div>

          <div className=" text-gray-600 lg:col-start-4 lg:col-end-6 mt-5 lg:mt-0">
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
                    <td class="py-2 px-4 border-b">
                      {contact.contactNum.length < 11
                        ? contact.contactNum.slice(0, 3)
                        : contact.contactNum.slice(0, 4)}{" "}
                      {contact.contactNum.length < 11
                        ? contact.contactNum.slice(3, 6)
                        : contact.contactNum.slice(4, 7)}{" "}
                      {contact.contactNum.length < 11
                        ? contact.contactNum.slice(6, 10)
                        : contact.contactNum.slice(7, 11)}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="h-auto w-full lg:row-start-2 lg:col-start-4 lg:col-end-6 mt-5 lg:mt-0">
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
