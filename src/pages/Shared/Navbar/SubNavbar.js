import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="hidden sm:hidden md:flex lg:flex justify-between py-3">
      <div>
        <h6 className="text-sm font-medium text-text flex items-center gap-2">
          Need help?
          <b className="flex items-center gap-2 cursor-pointer hover:text-secondary duration-200">
            <FaPhoneAlt className="text-secondary" /> (+123) 456 7890
          </b>
        </h6>
      </div>
      <div className="flex gap-4">
        <h6 className="text-sm font-medium text-text flex items-center gap-2 cursor-pointer hover:text-secondary duration-200">
          <FaEnvelope className="text-secondary" /> help@support.com
        </h6>
        <h6 className="text-sm font-medium text-text flex items-center gap-2 cursor-pointer hover:text-secondary duration-200">
          <FaMapMarkerAlt className="text-secondary" /> Our Locations
        </h6>
      </div>
    </div>
  );
};

export default SubNavbar;
