import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileProgramsDropdown = () => {
    setIsMobileProgramsOpen(!isMobileProgramsOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-8 w-full z-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/assets/Logo.png" alt="Logo" width={80} height={80} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            <Link
              href="/"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href={"/services"}
                onClick={toggleServicesDropdown}
                className="lg:text-md font-semibold hover:text-[#e00e57] flex items-center transition-colors duration-200"
                aria-expanded={isMobileServicesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Services
                <FiChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-100"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href="/services/occupational-therapy"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Occupational Therapy
                  </Link>
                  <Link
                    href="/services/speech-therapy"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Speech Therapy
                  </Link>
                  <Link
                    href="/services/special-education"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Special Education
                  </Link>
                  <Link
                    href="/services/psychological-assessment"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Psychological Assessment
                  </Link>
                  <Link
                    href="/services/behavioral-therapy"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Behavioral Therapy
                  </Link>
                  <Link
                    href="/services/autism-services"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Autism Services
                  </Link>
                  <Link
                    href="/services/adhd-support"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    ADHD Support
                  </Link>
                  <Link
                    href="/services/counselling"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Counselling
                  </Link>
                  <Link
                    href="/services/psychology-screening"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Psychology Screening
                  </Link>
                  <Link
                    href="/services/cognitive-behavioral-therapy"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Cognitive Behavioral Therapy
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <Link href={"/programs"}
                onClick={toggleProgramsDropdown}
                className="lg:text-md font-semibold hover:text-[#e00e57] flex items-center transition-colors duration-200"
                aria-expanded={isMobileServicesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Programs
                <FiChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Programs Dropdown Menu */}
              {isProgramsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-100"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <Link
                    href="/programs/parenting-program"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Parenting Program
                  </Link>
                  <Link
                    href="/programs/adl-program"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    ADL Program
                  </Link>
                  <Link
                    href="/programs/behavioral-programs"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Behavioral Programs
                  </Link>
                  <Link
                    href="/programs/discipline"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Discipline
                  </Link>
                  <Link
                    href="/programs/school-holiday-camp"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    School Holiday Camp
                  </Link>
                  <Link
                    href="/programs/school-readiness-camp"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    School Readiness Camp
                  </Link>
                  <Link
                    href="/programs/prep-readiness"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Prep Readiness
                  </Link>
                  <Link
                    href="/programs/family-support-program"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Family Support Program
                  </Link>
                  <Link
                    href="/programs/early-intervention-program"
                    className="block px-4 py-2  hover:bg-gray-50 hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Early Intervention Program
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/location"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Location
            </Link>
            <Link
              href="/resources"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden overflow-y-auto">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md  hover:text-[#e00e57] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e00e57] transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed right-0 top-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={toggleMenu}
              className=" hover:text-[#e00e57] focus:outline-none transform transition-transform duration-500"
              aria-label="Close Menu"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-3 px-4">
            <Link
              href="/"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <Link href="/services" 
                onClick={toggleMobileServicesDropdown}
                className="lg:text-md font-semibold hover:text-[#e00e57] flex items-center transition-colors duration-200"
                aria-expanded={isMobileServicesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Services
                <FiChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Mobile Services Dropdown Menu */}
              {isMobileServicesOpen && (
                <div className="mt-2 pl-3 space-y-2">
                  <Link
                    href="/services/occupational-therapy"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Occupational Therapy
                  </Link>
                  <Link
                    href="/services/speech-therapy"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Speech Therapy
                  </Link>
                  <Link
                    href="/services/special-education"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Special Education
                  </Link>
                  <Link
                    href="/services/psychological-assessment"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Psychological Assessment
                  </Link>
                  <Link
                    href="/services/behavioral-therapy"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Behavioral Therapy
                  </Link>
                  <Link
                    href="/services/autism-services"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Autism Services
                  </Link>
                  <Link
                    href="/services/adhd-support"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    ADHD Support
                  </Link>
                  <Link
                    href="/services/counselling"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Counselling
                  </Link>
                  <Link
                    href="/services/psychology-screening"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Psychology Screening
                  </Link>
                  <Link
                    href="/services/cognitive-behavioral-therapy"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Cognitive Behavioral Therapy
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Programs Dropdown */}
            <div className="relative">
              <Link href="/programs"
                onClick={toggleMobileProgramsDropdown}
                className="lg:text-md font-semibold hover:text-[#e00e57] flex items-center transition-colors duration-200"
                aria-expanded={isMobileServicesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Programs
                <FiChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isMobileProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Mobile Programs Dropdown Menu */}
              {isMobileProgramsOpen && (
                <div className="mt-2 pl-3 space-y-2">
                  <Link
                    href="/programs/parenting-program"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Parenting Program
                  </Link>
                  <Link
                    href="/programs/adl-program"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    ADL Program
                  </Link>
                  <Link
                    href="/programs/behavioral-programs"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Behavioral Programs
                  </Link>
                  <Link
                    href="/programs/discipline"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Discipline
                  </Link>
                  <Link
                    href="/programs/school-holiday-camp"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    School Holiday Camp
                  </Link>
                  <Link
                    href="/programs/school-readiness-camp"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    School Readiness Camp
                  </Link>
                  <Link
                    href="/programs/prep-readiness"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Prep Readiness
                  </Link>
                  <Link
                    href="/programs/family-support-program"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Family Support Program
                  </Link>
                  <Link
                    href="/programs/early-intervention-program"
                    className="block  hover:text-[#e00e57] transition-colors duration-200"
                  >
                    Early Intervention Program
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/location"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Location
            </Link>
            <Link
              href="/resources"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="lg:text-md font-semibold hover:text-[#e00e57] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
