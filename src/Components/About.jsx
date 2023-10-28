import ExperienceImg from "../assets/support.png";
import ServiceImg from "../assets/team.png";
import SalesImg from "../assets/sales.png";
import InfraImg from "../assets/infrastructure.png";
import TimeImg from "../assets/clock.png";
import StandardImg from "../assets/achievement.png";
import OperateImg from "../assets/cogwheel.png";
import DeliveryImg from "../assets/delivery-truck.png";
import Quatation from "./Quatation";
// import Footer from "./Footer";

function About() {
  return (
    <div className="grid px-[15px] mt-[60px] md:px-[40px] lg:px-[60px]">
      <div className="grid grid-cols-1 place-items-center">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Safe. Healthy. Quality
        </h2>
        <br />
        <p>
          When it comes to food, we all seek these three elements. But have you
          ever wondered, if there are distinctive machineries which help prepare
          different kinds of foods? And that’s where Ambica Engineering Works
          come in.
        </p>
        <br />
        <p>
          Established in the early 1974 in Talaja, Ambica Engineering Works is
          one of the leading & famous firms in manufacturing of Diesel /
          Kerosene Burner Plants & Food Processing equipment for modern Kitchen
          Over 47 Years of experience in this field.
        </p>
        <br />
        <p>
          <span className="text-[#0074de]">Nitin M. Rathod </span>
          started with the new age of Diesel / Kerosene fire-places. He made an
          unexpected successful progress & today under the patronage of{" "}
          <span className="text-[#0074de]">Omcar Eng.</span> Today the company
          produces wonderful food grade machines useful in dairy Industry,
          Ice-cream Production, Milk Pulp Performing, Namkeen/ Snacks Making and
          Wheat Flour varieties. These machines are available in different sizes
          and models at affordable prices.
        </p>
        <br />
        <p>
          After conducting many enterprises along with rolling shutter industry,
          Shree Arvindbhai Rathod has been producing contemporary and affordable
          machines. Today, <span className="text-[#0074de]">Omcar Eng.</span> is
          taking steps towards being more eco-friendly initiatives like
          recycling, and conducting manufacturing best practices.
        </p>
        <br />

        <p>
          Our machines are designed in a way which doesn’t hinder the quality of
          food that is made in it. For us the customer always comes first. So
          quality is a no bargaun area for us.
        </p>
        <br />
        <p>
          <span className="text-[#0074de]">Omcar Eng.</span> is spread across
          25,000 square feet of area with a lush green factory outlet. Our
          factory is quipped to deliver the best product in a very less time.
        </p>
        <br />
      </div>

      {/* team */}
      <div className="grid grid-cols-1 place-items-center bg-gray-300 py-5">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Meet Company Owner
        </h2>
        <div className="border-2 w-fit py-4 px-8 rounded-md mt-5 cursor-pointer  hover:border-[#0074de]">
          <p className="text-xl">Nitin M. Rathod</p>
          <p>Director</p>
          <p>+91 9898989898</p>
        </div>
      </div>

      {/* why us? */}
      <div className="grid grid-cols-1 place-items-center mt-10 bg-gray-300 py-5">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Why Our Products?
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="border-2 w-fit py-4 px-8 max-w-[300px] flex justify-center items-center flex-col gap-y-3 rounded-md mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={ExperienceImg} alt="" className="w-20" />
            </div>
            <p>WE HAVE 48 YEARS OF EXPERIENCE IN THIS FIELD</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={ServiceImg} alt="" className="w-20" />
            </div>
            <p>SATISFIED AFTER SALES & SERVICES</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={SalesImg} alt="" className="w-20" />
            </div>
            <p>NUMBERS OF PRODUCTS SALES ACROSS THE INDIA</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={InfraImg} alt="" className="w-20" />
            </div>
            <p>
              WELL INFRASTRUCTURE WITH STATE-OF-THE-ART EQUIPMENTS AND LATEST
              TECHNOLOGY
            </p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={TimeImg} alt="" className="w-20" />
            </div>
            <p>HIGHLY RELIABLE AND MAINTENANCE FREE PRODUCTS</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={StandardImg} alt="" className="w-20" />
            </div>
            <p>STANDARD QUALITY OF THE PRODUCTS</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={OperateImg} alt="" className="w-20" />
            </div>
            <p>VERY SIMPLE AND EASY OPERATE TO USE OUR PRODUCTS</p>
          </div>

          <div className="border-2 w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer hover:text-[#0074de] hover:border-[#0074de]">
            <div className="border-b w-fit">
              <img src={DeliveryImg} alt="" className="w-20" />
            </div>
            <p>QUALITY WITH TIME, SYSTEMATIC WORKING AND DELIVERY</p>
          </div>
        </div>
      </div>
      <Quatation />
      {/* <Footer/> */}
    </div>
  );
}

export default About;
