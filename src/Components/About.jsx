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
    <div className="grid px-[15px] mt-[70px] md:px-[40px] lg:px-[60px]">
      <div className="grid grid-cols-1">
        <div className="grid place-items-center border-2 border-b-1 border-dotted border-collapse py-3">
          <h2 className="text-2xl text-black font-medium w-fit md:text-4xl md:font-semibold">
            Safe. Healthy. Quality
          </h2>
        </div>

        <br />
        <p>Welcome to Omkar Engineering</p>
        <br />
        <p>
          <span className="text-[#0074de]"> Nitin M. Rathod</span>, the
          visionary behind Omkar Engineering, brings over 2 years of invaluable
          experience in the field. Hailing from Ahmedabad, Nitin passion and
          expertise have driven the foundation of Omkar Engineering, dedicated
          to providing top-quality machinery solutions.
        </p>
        <br />
        <p>
          <span className="text-[#0074de]">
            Our Current Products At Omkar Engineering
          </span>
          , we take pride in our current product offerings, including
          <span className="text-[#0074de]">
            {" "}
            the Milk Mawa (Khova) Machine and the Milk / Basundi Boiling
            Machine.
          </span>
          These machines are a testament to our commitment to delivering
          excellence in the food processing industry.
        </p>
        <br />
        <p>
          <span className="text-[#0074de]">Future Expansion </span>
          Our journey is not limited to where we are today. We have ambitious
          plans for future expansion, aiming to introduce innovative and
          cutting-edge products to cater to a wider range of needs in the food
          processing and machinery sector.
        </p>
        <br />

        <p>
          <span className="text-[#0074de]"> Why Choose Us? </span>
          Experience: With over 2 years of hands-on experience, we have a deep
          understanding of the industry demands and challenges. Quality: We
          prioritize quality in everything we do, ensuring that our products
          meet the highest standards. Innovation: Our commitment to innovation
          drives us to continuously improve and expand our product line.
        </p>
        <br />
        <p>
          Join us in our quest to revolutionize the food processing industry. We
          look forward to serving your needs with the best machinery solutions
          available in the market.
        </p>
        <br />
      </div>

      {/* team */}
      <div className="grid grid-cols-1 place-items-center bg-gray-300 py-5">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Meet Company Owner
        </h2>
        <div className="border-2 w-fit py-4 px-8 rounded-md mt-5 cursor-pointer  hover:border-black">
          <p className="text-xl">Nitin M. Rathod</p>
          <p>Director</p>
          <p>+91 9909291593</p>
        </div>
      </div>

      {/* why us? */}
      <div className="grid grid-cols-1 place-items-center mt-10 bg-gray-300 py-5">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Why Our Products?
        </h2>
        <div className="grid grid-cols-1 px-5 gap-5 sm:grid-cols-2 sm:px-0">
          <div className="border w-fit py-4 px-8 max-w-[300px] flex justify-center items-center flex-col gap-y-3 rounded-md mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={ExperienceImg} alt="" className="w-20" />
            </div>
            <p>WE HAVE 2 YEARS OF EXPERIENCE IN THIS FIELD</p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={ServiceImg} alt="" className="w-20" />
            </div>
            <p>SATISFIED AFTER SALES & SERVICES</p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={SalesImg} alt="" className="w-20" />
            </div>
            <p>NUMBERS OF PRODUCTS SALES ACROSS THE INDIA</p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={InfraImg} alt="" className="w-20" />
            </div>
            <p>
              WELL INFRASTRUCTURE WITH STATE-OF-THE-ART EQUIPMENTS AND LATEST
              TECHNOLOGY
            </p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={TimeImg} alt="" className="w-20" />
            </div>
            <p>HIGHLY RELIABLE AND MAINTENANCE FREE PRODUCTS</p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={StandardImg} alt="" className="w-20" />
            </div>
            <p>STANDARD QUALITY OF THE PRODUCTS</p>
          </div>

          <div className="border w-fit py-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer  hover:border-black">
            <div className="border-b w-fit">
              <img src={OperateImg} alt="" className="w-20" />
            </div>
            <p>VERY SIMPLE AND EASY OPERATE TO USE OUR PRODUCTS</p>
          </div>

          <div className="border w-fit p-4 px-8 rounded-md max-w-[300px]  flex justify-center items-center flex-col gap-y-3 mt-5 cursor-pointer hover:border-black">
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
