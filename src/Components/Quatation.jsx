import "./Header.css";

function Quatation() {
  return (
    <div className="border rounded-md shadow-md border-dashed h-fit mt-10">
      <div className="grid p-5 ">
        <div className="grid place-items-center border-2 border-b-1 border-dotted border-collapse py-3">
          <h2 className="text-2xl text-black font-medium w-fit md:text-2xl md:font-semibold">
            Request Your Quote
          </h2>
        </div>
        {/* <div className="bg-[#0074de] text-center py-3 text-white text-xl ">
          <p>Request Your Quote</p>
        </div> */}
        <div className="grid grid-cols-1 py-5  gap-y-3  sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="" className="hidden sm:block">
              FIRST NAME:
            </label>
            
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-md min-w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="" className="hidden sm:block">
              LAST NAME:
            </label>
            
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-md min-w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="" className="hidden sm:block">
              EMAIL ADDRESS:
            </label>
            
            <input
              type="text"
              placeholder="Email address"
              className="border p-2 rounded-md min-w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="" className="hidden sm:block">
              PHONE NUMBER:
            </label>
          
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded-md min-w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div className="">
            <label htmlFor="" className="hidden sm:block">
              SUBJECT:
            </label>
          
            <input
              type="text"
              placeholder="Subject"
              className="border p-2 rounded-md min-w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div className="">
            <label htmlFor="" className="hidden sm:block">
              HOW CAN WE HELP:
            </label>
            
            <textarea
              type="text"
              placeholder="How can we help?"
              className="border p-2 rounded-md w-full hover:border-black focus:outline-none focus:border-black"
            />
          </div>

          <div className=" place-items-center">
            <button className="w-fit py-1 px-3 bg-[black] text-white rounded-md border  hover:bg-gray-700">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quatation;
