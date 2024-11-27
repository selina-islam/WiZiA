import React from 'react'
import { BsArrowUpRightSquare } from "react-icons/bs";
import Buttons from './Buttons';

function Getstarted() {
  return (
    <section className="sm:py-24 py-12 bg-deepJungleGreen">
      <div className="space-y-6 sm:px-0 px-6">
        <h1 className="text-center text-electricCyan uppercase font-montserrat sm:text-xl text-base sm:leading-6 leading-[19px] tracking-[5%]">
          get started
        </h1>
        <h4 className="font-montserrat text-center font-[500] italic text-4xl leading-[43.88px]  -tracking-[1%] text-white">
          Embrace the new era of outbound.
        </h4>
        <p className="text-secondary font-workSans font-[300] sm:text-xl text-[18px] leading-[23.4px] sm:leading-[26px] -tracking-[1%] max-w-lg mx-auto text-center ">
          Wizia lets you train, activate, and optimize aiDRs.Take your outbound
          to new levels of performance and efficiency.
        </p>
        <div className="flex justify-center">
          <Buttons className="bg-electricCyan border text-deepJungleGreen border-sky-400 flex items-center gap-2 px-[18px] py-[16px]">
            Sign Up for the Beta <BsArrowUpRightSquare />{" "}
          </Buttons>
        </div>
      </div>
    </section>
  );
}

export default Getstarted