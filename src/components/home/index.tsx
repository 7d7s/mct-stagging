import { Fragment } from "react";
import SliderThree from "@/components/featureComponents/sliderThree";
import Doctors from "@/components/featureComponents/doctors";
import Menu from "@/components/appointmentMenu";
import Testimonial from "../testimonial/Testimonial";
import Services from "../services";
import NewsSection from "../featureComponents/newsSection";
import ShowcaseNumbers from "../featureComponents/showcaseNumber";
import About from "@/app/about-us/page";
import Steps from "../featureComponents/howItWorks";
import OurLocation from "@/components/featureComponents/ourLocation";

export default function Home() {
  return (
    <Fragment>
      <SliderThree />
      <div className="relative md:mx-12 lg:mx-16 md:-mt-16 z-40">
        <Menu />
      </div>
      <div className="relative md:-mt-[70px] z-10">
        <About />
      </div>
      <Doctors />
      <ShowcaseNumbers />
      <Services />
      <Steps />
      <OurLocation />
      <Testimonial />
      <NewsSection />
    </Fragment>
  );
}
