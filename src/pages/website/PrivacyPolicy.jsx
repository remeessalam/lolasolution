import { FaShieldAlt, FaLock, FaEnvelope, FaCookieBite } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-primary text-3xl mr-2" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        <h2 className="text-lg font-semibold mb-2">
          Privacy Policy for www.lolasolution.com
        </h2>
        <p className="mb-4">Last Updated: February 22, 2025</p>

        <p>
          At Pentaprime Solutions LLP we value your privacy. This Privacy Policy
          explains how we collect, use, store, and protect your personal
          information By using the Website www.lolasolution.com, you consent to
          the practices described below.
        </p>
        <h3 className="font-semibold mt-4">1. Information We Collect</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Personal Information:</strong> We may collect information
            such as your name, email address, and phone number when you
            voluntarily provide it (e.g., through forms or account
            registration).
          </li>
          <li>
            <strong>Non-Personal Information:</strong> We may collect data like
            your IP address, browser type, and browsing behavior through cookies
            or similar technologies.
          </li>
        </ul>

        <h3 className="font-semibold mt-4">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5">
          <li>To provide and improve our services.</li>
          <li>
            To communicate with you, including responding to inquiries or
            sending promotional materials (with your consent).
          </li>
          <li>To analyze Website usage and enhance user experience.</li>
        </ul>

        <h3 className="font-semibold mt-4">3. How We Share Your Information</h3>
        <ul className="list-disc pl-5">
          <li>
            We do not sell or rent your personal information to third parties.
          </li>
          <li>
            We may share your information with service providers (e.g., hosting
            or payment processors) who assist us in operating the Website,
            provided they agree to keep it confidential.
          </li>
          <li>
            We may disclose information if required by law or to protect our
            rights.
          </li>
        </ul>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaCookieBite className="mr-2" /> 4. Cookies and Tracking
        </h3>
        <ul className="list-disc pl-5">
          <li>
            We use cookies to enhance your experience. You can manage cookie
            preferences through your browser settings.
          </li>
          <li>For more details, see our [Cookie Policy, if applicable].</li>
        </ul>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaLock className="mr-2" /> 5. Data Security
        </h3>
        <p>
          We implement reasonable security measures (e.g., encryption) to
          protect your information. However, no method is 100% secure, and we
          cannot guarantee absolute security.
        </p>

        <h3 className="font-semibold mt-4">6. Your Rights</h3>
        <ul className="list-disc pl-5">
          <li>
            You may request access, correction, or deletion of your personal
            information by contacting us at{" "}
            <a href="mailto:info@lolasolution.com" className="text-blue-600">
              info@lolasolution.com
            </a>
            .
          </li>
          <li>
            Depending on your location, you may have additional rights under
            laws like GDPR or CCPA (e.g., to opt out of data sharing).
          </li>
        </ul>

        <h3 className="font-semibold mt-4">7. Third-Party Links</h3>
        <p>
          The Website may link to external sites. We are not responsible for
          their privacy practices.
        </p>

        <h3 className="font-semibold mt-4">8. Updates to This Policy</h3>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          here with an updated "Last Updated" date. Please review it regularly.
        </p>

        <h3 className="font-semibold mt-4 flex items-center">
          <FaEnvelope className="mr-2" /> 9. Contact Us
        </h3>
        <p>
          For questions or concerns about this Privacy Policy, reach us at{" "}
          <a href="mailto:info@lolasolution.com" className="text-blue-600">
            info@lolasolution.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
