import React from "react";
import { FaLightbulb, FaHandshake, FaShieldAlt, FaStar } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { coreValues, whyWorkWithUs } from "../../constant";

const CoreValuesSection = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24">
      {/* Core Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Core Values
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Why Work With Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {whyWorkWithUs.map((reason) => (
            <div key={reason.id} className="flex items-start gap-4">
              {reason.icon}
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {reason.title}
                </h3>
                <p className="text-black">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
