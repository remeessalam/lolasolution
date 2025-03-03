import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem]  text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem] text-primary">
          Advanced and Highly Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem] text-black">
          Our success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg group p-[1px] bg-gradient-to-r shadow-xl from-black/10 to-primary/10 cursor-pointer"
            >
              <div className="rounded-lg bg-white hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="w-[5rem] group-hover:scale-105 transition-all duration-200 h-[5rem] bg-primary rounded-full text-white flex justify-center items-center">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway text-primary">
                    {service.title}
                  </h5>
                  <p className="desc text-black/80 group-hover:text-white">
                    {service.desc}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 text-black group-hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
