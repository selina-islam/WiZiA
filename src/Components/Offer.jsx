import React from 'react'

function Offer() {
         const offer = [
           {
             img: "/offer1.png",
             title: "You're in Control",
             description:
               "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
           },
           {
             img: "/offer2.png",
             title: "Infinitely Scalable",
             description:
               "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
           },
           {
             img: "/offer3.png",
             title: "Incredibly Flexible",
             description:
               "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
           },
         ];
  return (
    <div className="sm:px-10 px-8 sm:py-[120px] py-20 bg-deepJungleGreen">
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-center justify-items-center sm:gap-6 gap-[48px] ">
        {offer.map((offer, i) => (
          <div className="space-y-4" key={i}>
            <img src={offer.img} alt="" />
            <h3 className="font-montserrat font-semibold sm:text-[28px] text-2xl sm:leading-9 leading-7 text-white">
              {offer.title}
            </h3>
            <p className="font-workSans font-[300] text-electricCyan sm:text-[22px] text-[18px] sm:leading-7 leading-6 -tracking-[1%]">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer