import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, black, transparent), url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      <div className="mx-4 md:mx-20 lg:mx-20">
        <h6 className="inline bg-secondary text-white text-xs font-medium px-4 py-1 text-center rounded-xl capitalize">
          Special Offer for this Week
        </h6>
        <h1 className="text-6xl font-bold uppercase text-white leading-tight mt-2 mb-5">
          Best Hand <br />
          Tools Collection
        </h1>
        <Link
          to="all-products"
          className="flex w-36 items-center justify-center gap-2 bg-accent hover:bg-teal-600 transition duration-150 text-white text-sm font-semibold py-3 rounded-full"
        >
          Order Now <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
