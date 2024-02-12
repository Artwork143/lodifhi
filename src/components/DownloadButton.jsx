import React from 'react';
import { RiDownload2Fill } from "react-icons/ri";

const DownloadButton = () => {
  const handleDownload = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Do you want to download the file?');

    // If the user confirms, proceed with the download
    if (isConfirmed) {
      // Replace 'your-file-url' with the actual URL of the file you want to download
      const fileUrl = '/pharmaPriceList.pdf';
    
      // Create a link element
      const link = document.createElement('a');
    
      // Set the href attribute to the file URL
      link.href = fileUrl;
    
      // Set the download attribute to specify the default file name
      link.download = 'Pharmacy Pricelist.pdf';
    
      // Append the link to the document body
      document.body.appendChild(link);
    
      // Trigger a click event on the link to start the download
      link.click();
    
      // Remove the link from the document body
      document.body.removeChild(link);
    }
  };

  return (
    <button onClick={handleDownload} className='mt-1 py-1 me-2 mb-2 font-bold text-white hover:text-[#337CCF] bg-blue-300 hover:bg-blue-50 hover:border-blue-400 rounded-lg px-3 border-white-400 border-4 text-sm lg:text-2xl duration-500'>
    <RiDownload2Fill className="inline-block relative bottom-[3px] right-1" />
      Price List
    </button>
  );
};

export default DownloadButton;
