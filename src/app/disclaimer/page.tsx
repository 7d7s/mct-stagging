"use client";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#0e305e] mb-6 text-center">
          Medical Disclaimer
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Last Updated: January 1, 2024
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            1. No Medical Advice
          </h2>
          <p>
            The content on <span className="font-semibold">My Child Therapy</span> 
            is for informational purposes only and **should not be considered medical advice**. 
            Always consult a qualified healthcare professional before making any health-related decisions.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            2. No Doctor-Patient Relationship
          </h2>
          <p>
            Your use of this website **does not establish a doctor-patient relationship** between 
            you and <span className="font-semibold">My Child Therapy</span>.  
            We do not diagnose, treat, or prescribe medications.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            3. Accuracy of Information
          </h2>
          <p>
            While we strive to keep our information **accurate and up to date**, we **do not guarantee** 
            that all content is free of errors, complete, or current. Health-related knowledge changes over time, 
            and we encourage you to verify information with medical professionals.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            4. External Links Disclaimer
          </h2>
          <p>
            This website may contain links to third-party websites for additional resources. 
            <span className="font-semibold">My Child Therapy</span> does not endorse, control, 
            or guarantee the accuracy of information found on these external websites.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            5. Limitation of Liability
          </h2>
          <p>
            Under no circumstances shall <span className="font-semibold">My Child Therapy</span> 
            or its team be held responsible for any damages, losses, or health consequences 
            resulting from the use of our website.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#0e305e]">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this disclaimer, please contact us at:
          </p>
          <p className="font-semibold">Email: support@mychildtherapy.com</p>
          <p className="font-semibold">Phone: +91-8800001312</p>
        </section>

        <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
          © 2024 My Child Therapy. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
