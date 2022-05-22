import React from "react";

const BusinessSummary = () => {
  return (
    <section className="my-20 py-12 bg-slate-800 text-slate-50">
      <h1 className="text-4xl font-extrabold text-center my-4 uppercase">
        Million Business Trust Us
      </h1>
      <p className="text-center text-md uppercase mb-20">
        We're here to help you to finding a best way
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center flex flex-col items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </span>
          <h1 className="text-6xl font-bold my-4">28</h1>
          <p className="text-xl">Countries</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <h1 className="text-6xl font-bold my-4">38K</h1>
          <p className="text-xl">Happy Clients</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </span>
          <h1 className="text-6xl font-bold my-4">412+</h1>
          <p className="text-xl">Feedbacks</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </span>
          <h1 className="text-6xl font-bold my-4">99+</h1>
          <p className="text-xl">Tools</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
