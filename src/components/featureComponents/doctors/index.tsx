import Image from "next/image";
import Link from "next/link";
type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  profile: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr Upinder Kaur",
    specialty: "Program Director / Sr. Psychologist",
    image: "/doctors/dr-upinder-kaur.webp",
    profile: "/doctors/profile/dr-upinder-kaur?utm_source=website-home&utm_medium=doctors",
  },
  {
    id: 2,
    name: "Dr. Arvind Kumar",
    specialty: "Senior Consultant Psychiatrist",
    image: "/doctors/dr-arvind.jpeg",
    profile: "/doctors/profile/dr-arvind-kumar?utm_source=website-home&utm_medium=doctors",
  },
  {
    id: 3,
    name: "Dr Varun Vij",
    specialty: "Pediatrician/ Child Specialist",
    image: "/doctors/dr-varun.webp",
    profile: "/doctors/profile/dr-varun-vij?utm_source=website-home&utm_medium=doctors",
  },
  {
    id: 4,
    name: "Dr. Ankur Mehra",
    specialty: "General Physician",
    image: "/doctors/dr-ankur.jpeg",
    profile: "/doctors/profile/dr-ankur-mehra?utm_source=website-home&utm_medium=doctors",
  },
];

export default function Doctors() {
  return (
    <section className="py-8 bg-gray-100">
      {/* Heading */}
      <div className="container mx-auto text-center ">
        <h3 className="text-sm font-semibold text-[#0e305e]">DOCTORS</h3>
        <h2 className="text-3xl font-bold text-gray-900">
          Our <span className="text-[#e00e57]">Outstanding</span> Doctors
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-20">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center p-2 ">
            <div className="w-full max-h-[350px] rounded-xl">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={1000}
                height={400}
                className="w-full h-full object-contain shrink-0 rounded-lg hover:text-[#e00e57]"
              />
            </div>
           <Link href={doctor.profile}>
            <h3 className="mt-2 text-lg font-semibold text-gray-700">
              {doctor.name}
            </h3>
            </Link>
            <p className="text-sm text-gray-500 uppercase">
              {doctor.specialty}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
