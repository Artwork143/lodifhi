import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home"
import Services from "../../pages/Services";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import OR from "../../pages/OR";
import Laboratory from "../../pages/Laboratory";
import Pharmacy from "../../pages/Pharmacy";
import Xray from "../../pages/Xray";
import Ultrasound from "../../pages/Ultrasound";
import ER from "../../pages/ER";
import OPD from "../../pages/OPD";
import Doctors from "../../pages/Doctors";
import PatientRooms from "../../pages/PatientRooms";
import LoginForm from "../LoginForm";


function NavPage() {
  return (
    <div className="mt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/or" element={<OR />} />
        <Route path="/services/laboratory" element={<Laboratory />} />
        <Route path="/services/pharmacy" element={<Pharmacy />} />
        <Route path="/services/xray" element={<Xray />} />
        <Route path="/services/ultrasound" element={<Ultrasound />} />
        <Route path="/services/er" element={<ER />} />
        <Route path="/services/outpatient" element={<OPD />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/doctors" element={<Doctors />} />
        <Route path="/about/patientrooms" element={<PatientRooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default NavPage;
