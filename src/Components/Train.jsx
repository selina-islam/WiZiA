import { FaRegCheckCircle } from "react-icons/fa";

const Train = () => {
  const listItem = [
    {
      icon: <FaRegCheckCircle />,
      title: "Quick to ramp",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Easy to optimize",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Quick to scale up",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Works with all your existing tools",
    },
  ];
  return (
    <section className="bg-deepJungleGreen">
      <div className="bg-[url(/secondcover.png)] bg-no-repeat bg-cover sm:mx-12 mx-8 sm:py-28 py-8 ">
        <div className="flex justify-center items-center">
          <div className="lg:ps-60 md:ps-40 sm:ps-20 ps-6">
            <h3 className="text-white font-Montserrat font-semibold sm:text-[40px] text-[28px] sm:leading-[48px] leading-8 -tracking-[1%]">
              Train your aiDR on your...
            </h3>
            <h4 className="text-electricCyan font-Montserrat italic font-[500] sm:text-[40px] text-[28px] sm:leading-[48px] leading-[34px] -tracking-[1%]">
              prefered email st|
            </h4>
            <div className="sm:pt-[30px] pt-5 sm:pb-16 pb-10">
              <p className="text-gray-400 font-workSans font-[300] sm:text-2xl text-[18px] sm:leading-[31px] leading-[23px] -tracking-[1%] max-w-md">
                You&apos;re in control. Train your aiDR on elements of your
                Marketing strategy.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
              {listItem.map((item, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-electricCyan">{item.icon}</span>
                  <p className="text-electricCyan font-montserrat font-[500] sm:text-[20px] sm:leading-[26px] leading-5 -tracking-[1%]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Train;
