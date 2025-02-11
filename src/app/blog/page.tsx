import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  import Image from "next/image";
  import Link from "next/link";
  import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaPhone,
    FaYoutube,
  } from "react-icons/fa6";
  import { IoIosTime } from "react-icons/io";
  import FAQ from "@/components/featureComponents/faqSection";
  const BlogPost = () => {
    return (
      <div className="min-h-screen text-gray-700 pt-32 bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-white text-sm font-light uppercase mb-6">
              <span className="border-l-4 border-[#e00e57] px-2"> Home </span>|
              <span className="px-2">BLOG</span>
            </h1>
            <p className="text-3xl font-bold"></p>
          </div>
          <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-11 md:right-8">
            <Image
              src="/Image/Adhd7.webp"
              alt="Doctor Image"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-cover rounded-lg"
              width={500}
              height={500}
            />
          </div>
        </section>
        <section className="max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Text Content */}
            <div className="lg:col-span-2 space-y-8">
              <Image
                src="/avatar/nurse.jpg"
                alt="Nurse image"
                width={650}
                height={400}
              />
              <p className="text-[#0e305e] leading-relaxed">
                Integer suscipit quis facilisi pellentesque sem quisque convallis
                iaculis, donec auctor pharellus maecenas lacus non luctus
                ultricies class, etiam dictum ligula potenti ornare sodales ut.
              </p>
              <p className="text-[#0e305e] leading-relaxed mt-4">
                Condimentum posuere quam tempor curabitur fusce rutrum ac, mi
                ullamcorper dignissim per pretium torquent, venenatis metus
                aliquet sem eu euismod. Magnis sociosqu tempor sapien tincidunt.
              </p>
  
              <h2 className="text-2xl font-bold mt-6 text-[#0e305e]">
                Biobank finds a genetic variant with consequences
              </h2>
              <p className="text-[#0e305e] leading-relaxed mt-4">
                Integer suscipit quis facilisi pellentesque sem quisque convallis
                iaculis, donec auctor ullamcorper dignissim per pretium torquent,
                venenatis metus aliquet sem eu euismod. Magnis sociosqu tempor
                sapien tincidunt.
              </p>
  
              <ul className="mt-4 list-disc list-inside text-[#0e305e] space-y-2">
                <li>
                  <strong className="text-[#e00e57]">
                    You’re so uncomfortable
                  </strong>{" "}
                  that the condition is affecting sleep and daily activities.
                </li>
                <li>
                  <strong className="text-[#e00e57]">
                    You have a skin infection
                  </strong>{" "}
                  — look for new streaks, pus, yellow scabs.
                </li>
                <li>
                  <strong className="text-[#e00e57]">You have symptoms</strong>{" "}
                  even after trying self-care steps.
                </li>
                <li>
                  <strong className="text-[#e00e57]">Rash on swollen</strong> skin
                  that varies in color depending on skin color.
                </li>
              </ul>
  
              {/* Tags and Social Share */}
              <div className="flex justify-between items-center border-t border-b py-4 mt-6 text-[#0e305e]">
                <span className="font-semibold">
                  Tags: <span className="text-[#e00e57]">Behavioral Health</span>
                </span>
                <div className="flex space-x-4">
                  <FaFacebookF className="text-[#0e305e] cursor-pointer hover:text-[#e00e57] transition duration-300" />
                  <FaTwitter className="text-[#0e305e] cursor-pointer hover:text-[#e00e57] transition duration-300" />
                  <FaLinkedinIn className="text-[#0e305e] cursor-pointer hover:text-[#e00e57] transition duration-300" />
                  <FaInstagram className="text-[#0e305e] cursor-pointer hover:text-[#e00e57] transition duration-300" />
                </div>
              </div>
            </div>
  
            {/* Right - Contact Cards */}
            <div className="flex flex-col gap-8">
              <div className="bg-[#0e305e] text-white rounded-md">
                <h3 className="font-bold text-lg py-6 px-10">Media Resources</h3>
                <div className="bg-pink-50 text-[#0e305e] p-4 w-full rounded-md">
                  <div className="space-y-2 px-5">
                    <p className="font-bold">Media Contacts</p>
                    <p>About Beaumont</p>
                    <p>Beaumont Leadership</p>
                    <p>Beaumont History</p>
                    <p>Patient Condition</p>
                  </div>
                </div>
              </div>
  
              <div className="bg-pink-50">
                <div className="bg-[#0e305e] text-white rounded-md">
                  <h3 className="font-bold text-lg p-6">Media Enquiries</h3>
                </div>
                <div className="text-[#0e305e] p-4 pb-5 rounded-md">
                  {[
                    {
                      icon: IoIosTime,
                      title: "Office hours:",
                      info: "8.30am - 5.30pm 888-807-5000",
                    },
                    {
                      icon: FaPhone,
                      title: "Call hours:",
                      info: "6am - 10pm 888-807-5000",
                    },
                    {
                      icon: FaMapMarkerAlt,
                      title: "Location:",
                      info: "JI Soekarno-hatta",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email:",
                      info: "novant@mail.com",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-5 mb-3">
                      <item.icon size={25} className="text-[#e00e57]" />
                      <div>
                        <p className="text-lg font-medium text-[#0e305e]">
                          {item.title}
                        </p>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Social Media */}
              <div className="bg-pink-50">
                <div className="bg-[#0e305e] text-white p-6 rounded-md">
                  <h3 className="font-bold text-lg">Social Media</h3>
                </div>
                <div className="text-[#0e305e] p-5 flex justify-between rounded-md">
                  {[
                    FaFacebook,
                    FaTwitter,
                    FaLinkedin,
                    FaInstagram,
                    FaYoutube,
                  ].map((Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="hover:text-[#e00e57] transition-colors"
                    >
                      <Icon size={30} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-6 py-4 text-gray-900 border-b border-[#e00e57]">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {[
                {
                  img: "/Image/Adhd7.webp",
                  title: "Nurses recognised for excellence",
                  date: "October 21, 2023",
                },
                {
                  img: "/Image/Adhd7.webp",
                  title: "Leading trauma research and care",
                  date: "October 21, 2023",
                },
                {
                  img: "/Image/Adhd7.webp",
                  title: "Leading trauma research and care",
                  date: "October 21, 2023",
                },
              ].map((post, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    className="w-full h-60 object-cover transition-transform duration-300"
                    src={post.img}
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 p-4 text-white">
                    <h4 className="font-semibold">{post.title}</h4>
                    <p className="text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FAQ />
        </section>
  
        <section className="relative w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              We’re always here to help.
              <br /> Contact us today.
            </h2>
            <p className="text-lg mb-6">
              Connect with a customer care specialist Monday to Friday, 7 am – 7
              pm (PST).
            </p>
            <button className="bg-white text-[#e00e57] font-bold py-3 px-6  text-lg  hover:bg-gray-50 transition">
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
      </div>
    );
  };
  
  export default BlogPost;