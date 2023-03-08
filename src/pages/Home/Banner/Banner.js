import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.shopify.com/s/files/1/0630/9521/0153/files/slider-bg.png?v=1665378533&width=1500')",
        height: "600px",
      }}
    >
      <div className="mx-20 space-y-3">
        <h6 className="inline bg-secondary text-white text-xs font-medium px-4 py-1 text-center rounded-xl">
          Special Offer for this Week
        </h6>
        <h1 className="text-6xl font-bold uppercase text-white leading-snug">
          Best Hand <br />
          Tools Collection
        </h1>
        {/*    <p className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          laudantium exercitationem cumque sed inventore, voluptate ratione.
          Fuga repudiandae libero illum.
        </p> */}
        <button className="flex items-center justify-center gap-2 bg-accent hover:bg-teal-600 transition duration-150 text-white text-md font-semibold px-7 py-3 rounded-full">
          Order Now <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
};

export default Banner;
