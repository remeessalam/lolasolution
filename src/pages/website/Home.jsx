import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.jpg";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { companyDetails, homeBannerVideo } from "../../constant";
import OurServices from "../../components/website/OurServices";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Welcome to
              <br />
              <span className="text-primary">{companyDetails.name}</span> <br />
              Shaping the Future of Your Business Through Technology
            </h1>
            <p className="desc">
              We specialize in delivering cutting-edge IT solutions tailored to
              meet the unique needs of modern businesses.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-white text-white wrapper">
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
              <p className="desc text-black">
                At {companyDetails.name}, we’re driven by the belief that
                technology can solve some of the most complex challenges
                businesses face today. Founded with a passion for innovation, we
                specialize in crafting customized digital solutions that help
                organizations grow, adapt, and thrive in a fast-paced,
                ever-evolving digital world. Our team combines years of
                experience in web development, mobile app creation, artificial
                intelligence, blockchain, and digital marketing to bring you
                results that matter.
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
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem]  text-black">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2  max-w-[50rem] mx-auto  bg-clip-text text-primary">
            Reliable IT Support for Your Business
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At {companyDetails.name}, we understand that in today’s
            digital-first world, your website is more than just an online
            presence—it’s the heart of your brand’s identity, a vital business
            tool, and often the first touchpoint for potential customers. In an
            era where first impressions matter more than ever, having a
            well-designed, fast, and responsive website is crucial to your
            business success. That’s why our website development services go
            beyond the basics—we aim to deliver not just a website, but a
            complete digital experience that drives engagement, boosts
            conversions, and empowers your business to grow.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
