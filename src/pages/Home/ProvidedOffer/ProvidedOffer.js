import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";

const ProvidedOffer = () => {
  return (
    <section className="my-24 mx-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex items-center gap-4">
        <BiSupport className="text-5xl text-secondary" />
        <div className="space-y-1">
          <h1 className="text-sm text-heading font-bold">Online Support</h1>
          <p className="text-sm text-text">Supports 24hr a day</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MdOutlineLocalShipping className="text-5xl text-secondary" />
        <div className="space-y-1">
          <h1 className="text-sm text-heading font-bold">Free Shipping</h1>
          <p className="text-sm text-text">Free shipping all order</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <RiMoneyPoundCircleLine className="text-5xl text-secondary" />
        <div className="space-y-1">
          <h1 className="text-sm text-heading font-bold">Money Returns</h1>
          <p className="text-sm text-text">30 days for free returns</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TbSpeakerphone className="text-5xl text-secondary" />
        <div className="space-y-1">
          <h1 className="text-sm text-heading font-bold">
            Deals and Promotions
          </h1>
          <p className="text-sm text-text">Price savings and Discount</p>
        </div>
      </div>
    </section>
  );
};

export default ProvidedOffer;
