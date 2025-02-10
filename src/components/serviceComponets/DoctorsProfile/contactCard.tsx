import Image from "next/image";
const ContactCard = ({  }) => {
    return (
        <>
            {/* Contact Section */}
            <section className="relative w-full bg-gradient-to-r from-[#0e305e] to-[#e00e57] text-white px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-2xl md:text-5xl font-bold mb-4">
                  We’re always here to help.
                  <br /> Contact us today.
                </h2>
                <p className="text-lg mb-6">
                  Connect with a customer care specialist Monday to Friday, 7 am – 7
                  pm (PST).
                </p>
                <button className="text-[#0e305e] bg-white font-bold py-3 px-6 text-lg shadow-lg hover:bg-gray50 transition">
                  Request An Appointment
                </button>
              </div>
              <div className="relative mt-8 md:mt-0">
                <Image
                  src="/Image/Adhd7.webp"
                  alt="Elderly woman with a doctor"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </section>
        </>
    );
};
export default ContactCard;