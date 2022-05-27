import React from "react";

const ContactForm = () => {
  return (
    <section className="my-20 py-20 bg-zinc-100">
      {/* <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-16 lg:mx-28">
        <div>
          {" "}
          <h1 className="text-3xl font-extrabold text-slate-700  mb-6">
            Call Us or Fill the Form
          </h1>
          <div>
            <h3 className="text-lg font-bold text-slate-700">012-345-6789</h3>
            <p className="text-slate-600">Don't hesitate to contact us</p>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold text-slate-700">
              Factory Address
            </h3>
            <p className="text-slate-600">
              123 Chattogram <br />
              Bangladesh
            </p>
          </div>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full mt-4"
            />
            <textarea
              className="textarea textarea-primary w-full mt-4"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-primary w-full mt-2">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
