import SpecialistCard from "./ReusablesHome/SpecialistCard";
import ExperienceImg from "../assets/achievement.png";
import QualityImg from "../assets/customer-satisfaction.png";
import MaintainanceImg from "../assets/settings.png";
import StailnessImg from "../assets/stainless.png";
import BriefIntroCard from "./ReusablesHome/BriefIntroCard";

import ServiceImg from "../assets/support.png";
import StandardImg from "../assets/checklist.png";
import TeamImg from "../assets/team.png";
import CreativityImg from "../assets/creativity.png";
// import ProductImg1 from '../assets/110-SS-G-02-600x600.png';
// import ProductImg2 from '../assets/600-ss-g-600x600.png';
// import ProductImg3 from '../assets/FLOUR-KNEADING-MACHINE-1-1-600x600.png';
import Khova1Img from "../assets/products3.png";
import Khova2Img from "../assets/products2.png";

import "./Header.css";
import ProductCard from "./ReusablesHome/ProductCard";
// import Footer from "./Footer";

// icon
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuilding } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const SpecialistCardArray = [
    {
      imageCard: ExperienceImg,
      nameCard: "Experience",
      descriptionCard: "Over 48 years of experience in this field",
    },
    {
      imageCard: QualityImg,
      nameCard: "Quality & Durability",
      descriptionCard: "High standard quality and durability of the products.",
    },
    {
      imageCard: MaintainanceImg,
      nameCard: "Maintainance Free",
      descriptionCard: "Heighly Reliable and Maintenance Free Products.",
    },
    {
      imageCard: StailnessImg,
      nameCard: "Stainless steel Body",
      descriptionCard: "Stainless steel Body",
    },
  ];

  //   BriefIntroCard
  const BriefIntroCardArray = [
    {
      imageCard: StailnessImg,
      nameCard: "Years of Experience",
      numberCard: "2",
    },
    {
      imageCard: StailnessImg,
      nameCard: "Products",
      numberCard: "2+",
    },
    {
      imageCard: StailnessImg,
      nameCard: "Trained Professionals",
      numberCard: "5",
    },
  ];

  //   Products

  const ProductsArray = [
    {
      productImg: Khova1Img,
      productMachine: "Milk Mawa (Khova) Machine",
    },

    {
      productImg: Khova2Img,
      productMachine: "Milk / Basundi Boiling Machine",
    },
  ];
  return (
    <>
      <div className="grid px-[15px] mt-[70px] md:px-[40px] lg:px-[60px]">
        <div className="">
          <div className="grid place-items-center border-2 border-b-1 border-dotted border-collapse py-3">
            <h2 className="text-2xl text-black font-medium w-fit md:text-4xl md:font-semibold">
              We are Specialists
            </h2>
          </div>

          <p className="border-2 border-dotted border-t-0 text-[#666]  md:text-lg p-3 border-collapse">
            <span className="p-1 text-[#0074de]">Omcar engineering</span>
            Is One of the leading & famous firms in manufacturing of Milk Mawa
            (Khova) Machine & Milk / Basundi Boiling Machine for Mordern Kitchen
            Over 2 Years of experience in this field.
          </p>

          <p className="text-start border-2 border-dotted text-[#666] border-t-0 md:text-lg p-3 border-collapse">
            The most powerful mechanical revolution has spread far and wide and
            it is increasing very fast. Man has constructed unbelievable things
            with the help of machines.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 text-center py-5 border-2 mb-5 border-dotted">
          <p className="text-2xl font-semibold">Our We Serve</p>
        </div>
        <div className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <SpecialistCard
              imageCard={SpecialistCardArray[0].imageCard}
              nameCard={SpecialistCardArray[0].nameCard}
              descriptionCard={SpecialistCardArray[0].descriptionCard}
            />
          </div>
          <div>
            <SpecialistCard
              imageCard={SpecialistCardArray[1].imageCard}
              nameCard={SpecialistCardArray[1].nameCard}
              descriptionCard={SpecialistCardArray[1].descriptionCard}
            />
          </div>
          <div>
            <SpecialistCard
              imageCard={SpecialistCardArray[2].imageCard}
              nameCard={SpecialistCardArray[2].nameCard}
              descriptionCard={SpecialistCardArray[2].descriptionCard}
            />
          </div>
          <div>
            <SpecialistCard
              imageCard={SpecialistCardArray[3].imageCard}
              nameCard={SpecialistCardArray[3].nameCard}
              descriptionCard={SpecialistCardArray[3].descriptionCard}
            />
          </div>
        </div>

        {/* brief info about company */}
        <div className="mt-10 text-center py-5 border-2 mb-5 border-dotted">
          <p className="text-2xl font-semibold">Our Achievements</p>
        </div>
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <BriefIntroCard
              imageCard={BriefIntroCardArray[0].imageCard}
              nameCard={BriefIntroCardArray[0].nameCard}
              numberCard={BriefIntroCardArray[0].numberCard}
            />
          </div>

          <div>
            <BriefIntroCard
              imageCard={BriefIntroCardArray[1].imageCard}
              nameCard={BriefIntroCardArray[1].nameCard}
              numberCard={BriefIntroCardArray[1].numberCard}
            />
          </div>

          <div>
            <BriefIntroCard
              imageCard={BriefIntroCardArray[2].imageCard}
              nameCard={BriefIntroCardArray[2].nameCard}
              numberCard={BriefIntroCardArray[2].numberCard}
            />
          </div>
        </div>

        {/* Our Products */}
        <div className="mt-10 text-center py-5 border-2 mb-5 border-dotted">
          <p className="text-2xl font-semibold">Our Products</p>
        </div>
        <div className="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-2 ">
          <div className="max-w-[300px]">
            <ProductCard
              productImg={ProductsArray[0].productImg}
              productMachine={ProductsArray[0].productMachine}
            />
          </div>
          <div className="max-w-[300px]">
            <ProductCard
              productImg={ProductsArray[1].productImg}
              productMachine={ProductsArray[1].productMachine}
            />
          </div>
        </div>

        {/* our values */}
        <div className="mt-10 text-center py-5 border-2 mb-5 border-dotted">
          <p className="text-2xl font-semibold"> Our Core Values</p>
        </div>
        <div className="grid text-center">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 sm:gap-0">
            <div className="flex justify-between items-center flex-col gap-2 border rounded-l-md w-fit p-4  hover:-translate-y-1 hover:border-black ">
              <div>
                <p className="text-start">
                  &quot;We take pride in delivering exceptional services that
                  exceed expectations. Our commitment to excellence is reflected
                  in every aspect of what we do.&quot;
                </p>
              </div>
              <div className="flex justify-start items-start border-t-2 border-dotted pt-2">
                <img src={ServiceImg} alt="" className="w-8" />
                <p className="text-[#666]">Great Services</p>
              </div>
            </div>

            <div className="flex justify-between items-center flex-col gap-2 border w-fit p-4  hover:-translate-y-1 hover:border-black ">
              <div>
                <p className="text-start">
                  &quot; Our unwavering commitment to the highest standards sets
                  us apart. We adhere to the strictest quality and performance
                  benchmarks in everything we do, ensuring your satisfaction and
                  trust in our work.&quot;
                </p>
              </div>
              <div className="flex justify-start items-start border-t-2 border-dotted pt-2">
                <img src={StandardImg} alt="" className="w-8" />
                <p className="text-[#666]">Highest Standards</p>
              </div>
            </div>

            <div className="flex justify-between items-center flex-col gap-2 border w-fit p-4  hover:-translate-y-1 hover:border-black ">
              <div>
                <p className="text-start">
                  &quot; With years of experience and a passion for excellence,
                  we deliver results that reflect our commitment to
                  professionalism in every project we undertake.&quot;
                </p>
              </div>
              <div className="flex justify-start items-start border-t-2 border-dotted pt-2">
                <img src={TeamImg} alt="" className="w-8" />
                <p className="text-[#666]">Professional Team</p>
              </div>
            </div>

            <div className="flex justify-between items-center flex-col gap-2 border w-fit p-4 rounded-r-md hover:-translate-y-1 hover:border-black ">
              <div>
                <p className="text-start">
                  &quot; We specialize in crafting innovative and imaginative
                  solutions to address your unique needs. Our creative approach
                  adds a touch of originality to every project, ensuring
                  tailored, effective, and standout results.&quot;
                </p>
              </div>
              <div className="flex justify-start items-start border-t-2 border-dotted pt-2">
                <img src={CreativityImg} alt="" className="w-8" />
                <p className="text-[#666]">Creative Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
