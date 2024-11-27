import React from "react";
import Buttons from "./Buttons";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='bg-[url("/firstcover.png")] bg-no-repeat bg-cover sm:px-10 px-4 w-full sm:py-[110px] xl:px-40 pb-[72px] pt-11 space-y-[10px] '>
      <h4 className="text-electricCyan font-montserrat sm:text-2xl  text-base sm:leading-7 leading-5 tracking-[5%]  text-center md:text-start">
        AI SDRs (aiDRs)
      </h4>
      <h1 className="font-montserrat font-bold sm:text-[64px] text-[40px] text-white sm:max-w-md sm:leading-[78px] leading-[44px] sm:text-start text-center -tracking-[1%]">
        More leads, less people.
      </h1>
      <p className="font-workSans font-[300] sm:text-xl text-[18px] text-white max-w-lg sm:text-start text-center sm:leading-[26px] leading-[23px] -tracking-[1%]">
        Train an aiDR on your ICP and messaging matrix. Activate it on a patch.
        It will send personalized sequences to every target contact.
      </p>
      <div className="flex sm:justify-start justify-center">
        <Buttons className="bg-electricCyan border text-deepJungleGreen border-sky-400 flex items-center px-[18px] py-[16px] gap-2 mt-3">
          Sign Up for the Beta <BsArrowUpRightSquare />{" "}
        </Buttons>
      </div>
    </div>
  );
};

export default Hero;
