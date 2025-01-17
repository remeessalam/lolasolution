import React from "react";
import OurServices from "../../components/website/OurServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import Testimonials from "../../components/common/Testimonials";
import Banner from "../../components/website/Banner";
import {
  FaCogs,
  FaUserShield,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <Banner page="Services" />
      <OurServices />
      <UnlockEfficiency />
      <Testimonials />
      <section className=" text-black py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-primary">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary p-6 rounded-full mb-4">
                <FaCogs className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customized Solutions
              </h3>
              <p className="text-lg">
                We take the time to understand your unique challenges and create
                solutions that align with your business goals.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary p-6 rounded-full mb-4">
                <FaUserShield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-lg">
                Our team of skilled professionals has deep expertise in a wide
                range of technologies, ensuring your projects are handled by
                industry experts.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary p-6 rounded-full mb-4">
                <FaProjectDiagram className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
              <p className="text-lg">
                From initial consultation to implementation and ongoing support,
                we provide comprehensive services that ensure the long-term
                success of your digital initiatives.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary p-6 rounded-full mb-4">
                <FaChartLine className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focused on Results</h3>
              <p className="text-lg">
                Our solutions are designed to deliver real, measurable results
                that drive growth, improve efficiency, and elevate your business
                to new heights.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg mb-4">
              At {`{companyDetails.name}`}, we are committed to helping
              businesses like yours navigate the digital landscape and achieve
              success. Whether you need a new website, a mobile app, or
              cutting-edge technology like AI or blockchain, our team is here to
              bring your vision to life and support your growth every step of
              the way.
            </p>
            <p className="text-xl font-semibold">
              Let’s Build Something Great Together.
            </p>
            <p className="text-lg mt-4">
              Get in touch with us today to discuss how we can help your
              business grow and succeed with our innovative technology
              solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
