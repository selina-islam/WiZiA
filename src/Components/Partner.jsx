import React from 'react'

function Partner() {
  return (
    <div className="bg-[#07292F] sm:pt-8 pt-6 sm:pb-10 pb-8 ">
      <h3 className="text-electricCyan font-montserrat text-base leading-[19px] tracking-[5%] text-center">
        our trusted partners
      </h3>
      <div className="sm:flex grid grid-cols-2 justify-center justify-items-center sm:items-center sm:gap-8 gap-1 mt-6 ">
        <img src="/partner1.png" alt="" />
        <img src="/partner2.png" alt="" />
        <img src="/partner3.png" alt="" />
        <img src="/partner4.png" alt="" />
        <img src="/partner5.png" alt="" className="col-span-2" />
      </div>
    </div>
  );
}

export default Partner