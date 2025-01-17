import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  companyDetails,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";
import { Link } from "react-router-dom";
import aboutUsImg from "../../assets/images/landing-aboutus.jpg";
import CoreValuesSection from "../../components/common/OurValues";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          About Us
        </h2>
      </div>
      <section className="py-[5rem]  text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2 text-primary">
                Enhancing Operations with Advanced Technology.
              </h2>
              <p className="desc text-black ">
                At {companyDetails.name}, we’re driven by the belief that
                technology can solve some of the most complex challenges
                businesses face today. Founded with a passion for innovation, we
                specialize in crafting customized digital solutions that help
                organizations grow, adapt, and thrive in a fast-paced,
                ever-evolving digital world. Our team combines years of
                experience in web development, mobile app creation, artificial
                intelligence, blockchain, and digital marketing to bring you
                results that matter.
                <br /> <br />
                We know that every business is different, which is why we
                approach each project with a fresh perspective. Whether you're a
                startup looking to establish your digital presence or an
                established enterprise aiming to enhance and scale your
                operations, we take the time to understand your unique needs and
                goals. Our solutions are always tailored to meet the specific
                challenges you face, ensuring that what we deliver fits
                perfectly with your vision. <br /> <br />
                More than just a service provider, we see ourselves as a
                long-term partner. We focus on building strong, lasting
                relationships with our clients, founded on trust, transparency,
                and collaboration. We are committed to delivering top-notch
                solutions on time and within budget, ensuring that your digital
                transformation journey is as smooth and successful as possible.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-cover max-h-[47rem] h-full rounded-xl"
              alt=""
            />
          </div>
        </div>
      </section>
      <CoreValuesSection />
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <h2 data-aos="fade-up" className="heading-2 text-primary">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem] text-black">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-primary"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At {companyDetails.name}, innovation is our driving force.
                    We constantly explore emerging technologies and trends to
                    create future-ready solutions that push the boundaries of
                    what’s possible. We aim to deliver solutions that not only
                    solve today’s challenges but anticipate the needs of
                    tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div data-aos="fade-left" className="rounded-xl p-5 bg-black">
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique, and so are its
                    challenges and goals. We take a highly personalized
                    approach, tailoring each project to align perfectly with
                    your specific needs. From startups to enterprises, we work
                    closely with our clients, building long-term partnerships
                    grounded in trust, transparency, and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-primary"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality and reliability are at the core of everything we do.
                    We pride ourselves on delivering world-class digital
                    products that are robust, scalable, and secure. Every
                    project undergoes rigorous quality assurance, ensuring that
                    we exceed expectations and industry standards at every turn.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div data-aos="fade-left" className="rounded-xl p-5 bg-black">
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    Technology without purpose is meaningless. At{" "}
                    {companyDetails.name}, we believe in leveraging technology
                    to create meaningful impact—whether it’s streamlining
                    processes, enhancing customer experiences, or driving
                    growth. Our solutions are designed to transform businesses,
                    help them scale, and lead in their industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-primary"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We offer a complete suite of services, providing holistic
                    support from concept to deployment and beyond. Our goal is
                    to be your trusted partner throughout your entire digital
                    journey—whether it’s building your online presence,
                    automating your operations, or creating immersive
                    experiences for your customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <UnlockEfficiency />
        <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2 text-primary">
            Why Choose {companyDetails.name}?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-black">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-black ml-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
