import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="px-6 md:px-20 lg:px-20 py-20 h-screen bg-lightBlue">
      {/* <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-heading mb-5">
            Office Contacts
          </h1>
          <p className="text-text text-base my-4">
            We're here to help! Contact us by phone, email, or message. We value
            your feedback and are committed to providing excellent customer
            service. Contact us today!
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold text-heading flex items-center gap-2">
                <FaPhoneAlt className="text-secondary" /> (+123) 456 7890
              </h3>
              <p className="text-sm text-text">Don't hesitate to contact us</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading flex items-center gap-2">
                <FaEnvelope className="text-secondary" /> help@support.com
              </h3>
              <p className="text-sm text-text">Mail us</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" /> Factory Address
              </h3>
              <p className="text-sm text-text">Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-heading text-xl font-bold">
            Get latest News and Special offers!
          </h1>
          <p className="text-text">
            Join for the latest news, including special offers, events etc
          </p>
          <div className="flex">
            <input
              className="bg-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="Email address"
            />
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 transition duration-150 text-white text-sm font-semibold px-7 py-3 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
