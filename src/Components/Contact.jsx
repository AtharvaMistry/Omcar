import LocationImg from "../assets/location.png";
import MailImg from "../assets/mail.png";
import CallImg from "../assets/phone-call.png";

function Contact() {
  return (
    <div className="grid px-[15px] mt-[60px] md:px-[40px] lg:px-[60px]">
      <div className="grid gap-y-3">
        <div className="mt-5 text-center py-2 border-2 mb-5 border-dotted">
          <p className="text-2xl font-semibold"> Head Office</p>
        </div>

        <div className="flex justify-start items-center gap-2 border border-dashed p-2">
          <img src={LocationImg} alt="" className="w-6" />
          <p>
            Industrial Plot No.6, Mahuva Road, Talaja – 364140, Dist. Bhavnagar,
            Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-2">
          <div className="flex justify-start items-center gap-2 border border-dashed p-2">
            <img src={MailImg} alt="" className="w-6" />
            <p>info@ambicaeng.com</p>
          </div>
          <div className="flex justify-start items-center gap-2 border border-dashed p-2">
            <img src={MailImg} alt="" className="w-6" />
            <p>sales@ambicaeng.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-2">
          <div className="flex justify-start items-center gap-2 border border-dashed p-2">
            <img src={CallImg} alt="" className="w-6" />
            <p>Office: 9723407151</p>
          </div>
          <div className="flex justify-start items-center gap-2 border border-dashed p-2">
            <img src={CallImg} alt="" className="w-6" />
            <p>Sales: 9978902353</p>
          </div>
        </div>
      </div>

      {/* <div className="mt-10">
        <iframe
          title="Industry Location"
          width="100%"
          height="400"
          frameBorder="0"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d72.87235626051775!3d21.214801736123814!4m15!4m14!1m5!1m1!1s0x0:0x0!2m2!1d72.87235626051775!2d21.214801736123814!1m6!1m2!1i0!2i0!1m1!1e2!2m1!1e2!2m1!1e3!3s0x0:0x0`}
          allowFullScreen
        ></iframe>
      </div> */}

      <div className=" h-fit  mt-10">
        <div className="grid p-5 ">
          <div className="mt-5 text-center py-2 border-2 mb-5 border-dotted rounded-md">
            <p className="text-2xl font-semibold">Request Your Quote</p>
          </div>
         
          <div className="grid grid-cols-1 border  border-dashed rounded-md shadow-md  gap-y-3 p-5 sm:grid-cols-2 gap-5">
            <div className="">
              <label htmlFor="" className="hidden md:block">
                FIRST NAME:
              </label>
           
              <input
                type="text"
                placeholder="First Name:"
                className="border p-2 rounded-md min-w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>
            <div className="">
              <label htmlFor="" className="hidden md:block">
                LAST NAME:
              </label>

              <input
                type="text"
                placeholder="Last Name:"
                className="border p-2 rounded-md min-w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="">
              <label htmlFor="" className="hidden md:block">
                EMAIL ADDRESS:
              </label>

              <input
                type="text"
                placeholder="Email Address:"
                className="border p-2 rounded-md min-w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="">
              <label htmlFor="" className="hidden md:block">
                PHONE NUMBER:
              </label>

              <input
                type="text"
                placeholder="Phone Number:"
                className="border p-2 rounded-md min-w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="">
              <label htmlFor="" className="hidden md:block">
                SUBJECT:
              </label>

              <input
                type="text"
                placeholder="Subject:"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className="">
              <label htmlFor="" className="hidden md:block">
                HOW CAN WE HELP:
              </label>

              <textarea
                type="text"
                placeholder="How can we help?"
                className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]"
              />
            </div>

            <div className=" place-items-center">
              <button className="w-fit py-1 px-3 bg-black rounded-md text-white border">
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
