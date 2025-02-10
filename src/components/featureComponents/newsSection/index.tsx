import { FC } from "react";
import Image from "next/image";
const NewsSection: FC = () => {
  const newsItems = [
    {
      id: 1,
      image: "/Image/EffectiveParentingStrategies.jpg",
      date: "18 April",
      title: "Building Strong Bonds: Effective Parenting Strategies",
      description:
        "Learn practical ways to enhance communication, set boundaries, and foster a healthy parent-child relationship.",
    },
    {
      id: 2,
      image: "/Image/Adhd6.jpg",
      date: "18 April",
      title: "The Importance of Early Childhood Intervention",
      description:
        "Discover how early intervention programs can significantly enhance your child's developmental progress.",
    },
    {
      id: 3,
      image: "/Image/Behaviour.webp",
      date: "7 March",
      title: "Understanding and Managing Challenging Behaviors",
      description:
        "Gain insights into behavior management strategies that promote positive behaviors in children.",
    },
    {
      id: 4,
      image: "/Image/Parent4.jpg",
      date: "9 April",
      title: "Preparing Your Child for a Successful School Journey",
      description:
        "Equip your child with the skills they need for a smooth transition into school life.",
    },
    {
      id: 5,
      image: "/Image/Evidence.webp",
      date: "9 April",
      title: "Strengthening Family Connections Through Support Programs",
      description:
        "Explore various family support programs designed to empower and assist parents in their journey.",
    },
    {
      id: 6,
      image: "/Image/Kaleido.webp",
      date: "18 April",
      title: "Helping Kids Master Essential Daily Living Skills",
      description:
        "Discover strategies to support children in developing essential self-care and independence skills.",
    },
  ];

  return (
    <div className="bg-pink-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0e3054]">
            Your Guide to Parenting and Child Development.
          </h2>
          <a href="#" className="text-sm text-pink-600 hover:text-pink-700">
            More Insights &rarr;
          </a>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="rounded-sm shadow-md overflow-hidden relative group bg-white"
            >
              {/* Date Tag */}
              <div className="absolute z-20 top-2 left-2 bg-white rounded-lg text-[#e00e57] bg-opacity-80 text-sm font-bold px-3 py-1">
                {item.date}
              </div>

              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover"
                height={320}
                width={500}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-30 transition duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 z-10">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;