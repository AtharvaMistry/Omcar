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
import ProductImg1 from '../assets/110-SS-G-02-600x600.png';
import ProductImg2 from '../assets/600-ss-g-600x600.png';
import ProductImg3 from '../assets/FLOUR-KNEADING-MACHINE-1-1-600x600.png';


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
      numberCard: "48",
    },
    {
      imageCard: StailnessImg,
      nameCard: "Products",
      numberCard: "12",
    },
    {
      imageCard: StailnessImg,
      nameCard: "Trained Professionals",
      numberCard: "20",
    },
  ];

  //   Products

  const ProductsArray = [
    {
      productImg: ProductImg1,
      productMachine: "Milk Mawa (Khova) Machine",
    },

    {
      productImg: ProductImg2,
      productMachine: "Milk / Basundi Boiling Machine",
    },

    {
      productImg: ProductImg3,
      productMachine: "Milk Mawa (Khova) Machine",
    },

    {
      productImg: ProductImg1,
      productMachine: "Flour Kneading Machine",
    },

    {
      productImg: ProductImg2,
      productMachine: "Namkeen Machinee",
    },

    {
      productImg: ProductImg3,
      productMachine: "Nylon Sev Machine",
    },
  ];
  return (
    <>
      <div className="grid px-[15px] mt-[60px] md:px-[40px] lg:px-[60px]">
        <div className="grid grid-cols-1 place-items-center">
          <h2 className="text-2xl text-black font-medium w-fit border-b">
            We are Specialists
          </h2>
          <br />
          <p>
            <span className="p-1 text-[#0074de]">
              The Ambica Engineering Works, Talaja & Bangalore
            </span>
            Is One of the leading & famous firms in manufacturing of Diesel /
            Kersene Burner plants & Food Processing Equipments for Mordern
            Kitchen Over 42 Years of experience in this field.
          </p>
          <br />
          <p>
            The most powerful mechanical revolution has spread far and wide and
            it is increasing very fast. Man has constructed unbelievable things
            with the help of machines m
          </p>
        </div>

        {/* cards */}

        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-10 backgroundBriefInfo grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3">
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

        <div className="grid grid-cols-1  gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="max-w-[300px]">
            <ProductCard
              productImg={ProductsArray[2].productImg}
              productMachine={ProductsArray[2].productMachine}
            />
          </div>

          <div className="max-w-[300px]">
            <ProductCard
              productImg={ProductsArray[3].productImg}
              productMachine={ProductsArray[3].productMachine}
            />
          </div>

          
        </div>

        {/* our values */}
        <div className="grid text-center mt-10">
          <div className="flex justify-center items-center">
            <p className="text-4xl font-medium w-fit border-b mb-10">
              Our Core Values
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 place-items-center sm:grid-cols-4">
            <div className="flex justify-center items-center flex-col gap-y-2 border rounded-md w-fit p-3 min-h-[130px] min-w-[130px] shadow-md hover:-translate-y-1 hover:border-[#0074de] hover:text-[#0074de]">
              <img src={ServiceImg} alt="" className="w-12" />
              <p>Great Services</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-2 border rounded-md w-fit p-3 shadow-md min-h-[130px] min-w-[130px] hover:-translate-y-1 hover:border-[#0074de] hover:text-[#0074de]">
              <img src={StandardImg} alt="" className="w-12" />
              <p>Highest Standards</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-2 border rounded-md w-fit p-3 min-h-[130px] min-w-[130px] shadow-md hover:-translate-y-1 hover:border-[#0074de] hover:text-[#0074de]">
              <img src={TeamImg} alt="" className="w-12" />
              <p>Professional Team</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-2 border rounded-md w-fit p-3 min-h-[130px] min-w-[130px] shadow-md hover:-translate-y-1 hover:border-[#0074de] hover:text-[#0074de]">
              <img src={CreativityImg} alt="" className="w-12" />
              <p>Creative Solutions</p>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
