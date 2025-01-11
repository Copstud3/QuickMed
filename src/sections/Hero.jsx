import { LeafLeft, LeafRight } from "../assets/icons";
import { PeoplePictures } from "../assets/images";
import Button from "../components/Button";
import { heroLogos } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="my-10 mx-8">
      {/* Section 1: Text and Leaf Icons */}
      <div className="text-center">
        {/* Flex container for leaf icons and text */}
        <div className="flex justify-center items-center gap-5 px-4 md:px-0">
          <img src={LeafLeft} className="w-6 md:w-8" />
          <p className="text-[18px] max-md:text-sm">Trusted by leading healthcare providers</p>
          <img src={LeafRight} className="w-6 md:w-8" />
        </div>
        
        {/* Main Heading */}
        <h2 className="mt-[5px] font-[600] text-[36px] md:text-[64px] text-navy max-md:leading-10 max-sm:mt-3">
          Make clinical documentation easy
        </h2>
        
        {/* Subtext */}
        <p className="mx-[20px] sm:mx-[50px] font-400 text-[16px] max-sm:text-[14px] max-sm:mt-3 text-slate-gray mb-4">
          Our easy-to-use clinical documentation tool helps you spend less time typing and more time with patients.
        </p>
        
        {/* Button */}
        <Button label="Book a Demo" className="bg-purple-gradient max-sm:mb-3"/>
      </div>

      {/* Section 2: Image */}
      <div className="flex justify-center items-center mb-16">
        <img src={PeoplePictures} alt="" className="max-md:w-[700px] max-sm:mb-[-20px]" />
      </div>

      {/* Section 3: Hero Logos */}
      <div className="flex justify-center items-center gap-10 flex-wrap px-4">
        {heroLogos.map((logo) => (
          <div key={logo.id} className="w-[100px] md:w-[150px]">
            <img src={logo.src} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

