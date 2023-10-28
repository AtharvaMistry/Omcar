import LocationImg from "../assets/location.png";
import MailImg from "../assets/mail.png";
import CallImg from "../assets/phone-call.png";

function Contact() {
  return (
    <div className="grid px-[15px] mt-[60px] md:px-[40px] lg:px-[60px]">
      <div className="grid gap-y-3">
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Head Office
        </h2>
        <div className="flex justify-start items-center gap-2">
          <img src={LocationImg} alt="" className="w-6" />
          <p>
            Industrial Plot No.6, Mahuva Road, Talaja – 364140, Dist. Bhavnagar,
            Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center gap-2">
            <img src={MailImg} alt="" className="w-6" />
            <p>info@ambicaeng.com</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={MailImg} alt="" className="w-6" />
            <p>sales@ambicaeng.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center gap-2">
            <img src={CallImg} alt="" className="w-6" />
            <p>Office: 9723407151</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={CallImg} alt="" className="w-6" />
            <p>Sales: 9978902353</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <iframe
          title="Industry Location"
          width="100%"
          height="400"
          frameBorder="0"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d72.87235626051775!3d21.214801736123814!4m15!4m14!1m5!1m1!1s0x0:0x0!2m2!1d72.87235626051775!2d21.214801736123814!1m6!1m2!1i0!2i0!1m1!1e2!2m1!1e2!2m1!1e3!3s0x0:0x0`}
          allowFullScreen
        ></iframe>
      </div>

      <div className=" h-fit  mt-10">
        <div className="grid p-5 ">
          <div className="bg-[#0074de] text-center py-3 text-white text-xl">
            <p>Request Your Quote</p>
          </div>
          <div className="grid grid-cols-1 border py-5 gap-x-10 gap-y-3 px-10 sm:grid-cols-2">
            <div>
              <label htmlFor="">FIRST NAME:</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div>
              <label htmlFor="">LAST NAME:</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div>
              <label htmlFor="">EMAIL ADDRESS:</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div>
              <label htmlFor="">PHONE NUMBER:</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="">SUBJECT:</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="">HOW CAN WE HELP:</label>
              <br />
              <textarea
                type="text"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="col-span-2 place-items-center">
              <button className="w-fit py-2 px-3 bg-[#0074de] text-white border hover:text-[#0074de] hover:bg-white">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
