import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-14 bg-primary">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-center">
            <img src={logoImg} className="h-[6rem]" alt="" />
            <p className="desc md:max-w-[15rem] text-sm text-center">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-white desc text-sm hover:text-primary transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-white desc text-sm"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <h6 className="text-[.9rem] mb-1">Office Address</h6>
                <p className="text-white desc text-sm max-w-[15rem]">
                  India - {companyDetails.address}
                </p>
                <p className="text-white desc text-sm max-w-[15rem] mt-3">
                  Dubai - {companyDetails.address2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-white/90 border-primary w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link
                to={companyDetails.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsFacebook className="text-xl text-white/90 hover:text-black transition-all duration-300" />
              </Link>
              <Link
                to={companyDetails.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsTwitter className="text-xl text-white/90 hover:text-black transition-all duration-300" />
              </Link>
              <Link
                to={companyDetails.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsLinkedin className="text-xl text-white/90 hover:text-black transition-all duration-300" />
              </Link>
              <Link
                to={companyDetails.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsInstagram className="text-xl text-white/90 hover:text-black transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFooter;
