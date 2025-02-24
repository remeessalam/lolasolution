import {
  FaFileContract,
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaGlobe,
  FaEnvelope,
  FaGavel,
  FaExternalLinkAlt,
  FaTimesCircle,
  FaSyncAlt,
} from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FaFileContract className="text-primary text-3xl mr-2" />
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        </div>
        <h2 className="text-lg font-semibold mb-2">
          Terms and Conditions for www.lolasolution.com
        </h2>
        <p className="mb-4">Last Updated: February 22, 2025</p>
        <p className="mb-4">
          Welcome to www.lolasolution.com. By accessing or using this Website,
          you agree to be bound by these Terms and Conditions ("Terms"). If you
          do not agree with these Terms, please do not use the Website.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaGlobe className="mr-2" />
          1. Use of the Website
        </h3>
        <ul className="list-disc pl-5">
          <li>You must be at least 18 years old to use this Website.</li>
          <li>
            You agree to use the Website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the Website.
          </li>
          <li>
            Prohibited activities include, but are not limited to, hacking,
            distributing malware, or posting illegal content.
          </li>
        </ul>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaShieldAlt className="mr-2" />
          2. Intellectual Property
        </h3>
        <p>
          All content on this Website, including text, images, logos, and
          designs, is owned by Pentaprime Solutions LLP or its licensors and
          protected by copyright and trademark laws.
        </p>
        <p>
          You may not reproduce, distribute, or modify any content without prior
          written permission from Pentaprime Solutions LLP.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaUserShield className="mr-2" />
          3. User Accounts
        </h3>
        <ul className="list-disc pl-5">
          <li>
            If the Website requires registration, you are responsible for
            maintaining the confidentiality of your account and password.
          </li>
          <li>
            You agree to notify us immediately of any unauthorized use of your
            account.
          </li>
        </ul>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaLock className="mr-2" />
          4. Limitation of Liability
        </h3>
        <p>
          The Website is provided "as is" without warranties of any kind,
          express or implied.
        </p>
        <p>
          Pentaprime Solutions LLP is not liable for any direct, indirect,
          incidental, or consequential damages arising from your use of the
          Website.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaExternalLinkAlt className="mr-2" />
          5. Third-Party Links
        </h3>
        <p>
          The Website may contain links to third-party sites. Pentaprime
          Solutions LLP is not responsible for the content or practices of these
          sites.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaTimesCircle className="mr-2" />
          6. Termination
        </h3>
        <p>
          We reserve the right to suspend or terminate your access to the
          Website at our discretion, without notice, for any violation of these
          Terms.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaSyncAlt className="mr-2" />
          7. Changes to These Terms
        </h3>
        <p>
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated "Last Updated" date. Your continued use of
          the Website after changes signifies your acceptance of the revised
          Terms.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaGavel className="mr-2" />
          8. Governing Law
        </h3>
        <p>
          These Terms are governed by the laws of India 🇮🇳. Any disputes will be
          resolved in the courts of Mumbai Jurisdiction.
        </p>
        <p className="text-center pt-8">
          For questions about these Terms, please contact us at{" "}
          <a href="mailto:info@lolasolution.com" className="text-blue-600">
            info@lolasolution.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
