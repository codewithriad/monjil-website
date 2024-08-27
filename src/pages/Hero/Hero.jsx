import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* Hero Container */}
      <div className="w-full min-h-[80vh] pt-32 bg-dark-color flex justify-center items-center flex-col">
        <div className="flex flex-col items-center gap-5 text-center">
          <img
            width={280}
            height={280}
            className="hero-image"
            src="https://i.ibb.co/N9Wg9Qp/hero.jpg"
            alt="hero-image"
          />
          <h1 className="text-text-color text-[3.75rem]">
            Hello 👋 , I M <span className="text-primary-color">Monjil</span>{" "}
          </h1>
          <p className="text-text-color leading-[2rem]">
            Welcome to my portfolio I M{" "}
            <strong className="text-primary-color">Graphics Designer</strong>{" "}
            Based in Bangladesh <br /> Over 8 Years of Professional Experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 my-2 text-text-color text-xl">

            <div className="flex justify-center items-center w-12 h-12 bg-bg-color rounded-full hover:bg-primary-color transition duration-500">
              <FaFacebookF className="" />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-bg-color rounded-full hover:bg-primary-color transition duration-500">
              <FaWhatsapp className="" />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-bg-color rounded-full hover:bg-primary-color transition duration-500">
              <FaTwitter className="" />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-bg-color rounded-full hover:bg-primary-color transition duration-500">
              <SiInstagram className="" />
            </div>
          </div>

          {/* Download CV Button */}
          <div>
            <button
              type="button"
              className="h-11 w-36 mb-4 border-none bg-bg-color hero-button text-text-color hover:text-text-color hover:bg-primary-color transition duration-500 ease-in-out rounded"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
