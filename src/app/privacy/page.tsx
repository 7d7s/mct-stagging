"use client";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#0e305e] mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Effective Date: January 1, 2024
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            1. Introduction
          </h2>
          <p>
            Welcome to <span className="font-semibold">My Child Therapy</span>.
            Your privacy is important to us. This Privacy Policy outlines how
            we collect, use, and safeguard your personal information.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            2. Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <span className="font-semibold">Personal Information:</span>{" "}
              Includes name, email, phone number, and address.
            </li>
            <li>
              <span className="font-semibold">Medical Data:</span> If you use
              our services, we may collect health-related information, as per
              applicable laws.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Website
              analytics, device type, and browser information.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            3. How We Use Your Information
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc ml-6 space-y-3">
            <li>Provide and improve our healthcare services.</li>
            <li>Ensure compliance with medical and legal regulations.</li>
            <li>Communicate with you regarding appointments and updates.</li>
            <li>Enhance website performance and user experience.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            4. Data Security
          </h2>
          <p>
            We implement advanced security measures, including **encryption and
            secure data storage**, to protect your information. We comply with{" "}
            <span className="font-semibold">HIPAA, GDPR, and CCPA</span>.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            5. Sharing Your Data
          </h2>
          <p>We do not sell your personal data. However, we may share it with:</p>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              Healthcare professionals when necessary for your treatment.
            </li>
            <li>Legal authorities if required by law.</li>
            <li>Third-party service providers for payment processing.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            6. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 space-y-3">
            <li>Request access to your personal data.</li>
            <li>Request corrections or deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            7. Contact Us
          </h2>
          <p>
            If you have any questions, please contact us at:
          </p>
          <p className="font-semibold">Email: support@mychildtherapy.com</p>
          <p className="font-semibold">Phone: +91-8800001312</p>
        </section>

        <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
          © 2025 My Child Therapy. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
