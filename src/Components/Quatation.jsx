import "./Header.css";

function Quatation() {
  return (
    <div className="bg-gray-300 h-fit px-20 mt-10">
      <div className="grid p-5 ">
        <div className="bg-[#0074de] text-center py-3 text-white text-xl ">
          <p>Request Your Quote</p>
        </div>
        <div className="grid grid-cols-1  py-5 gap-x-10 gap-y-3 px-10 sm:grid-cols-2">
          <div>
            <label htmlFor="">FIRST NAME:</label><br />
            <input type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div>
            <label htmlFor="">LAST NAME:</label><br />
            <input type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div>
            <label htmlFor="">EMAIL ADDRESS:</label><br />
            <input type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div>
            <label htmlFor="">PHONE NUMBER:</label><br />
            <input type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div className="col-span-2">
            <label htmlFor="">SUBJECT:</label><br />
            <input type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div className="col-span-2">
            <label htmlFor="">HOW CAN WE HELP:</label><br />
            <textarea type="text" className="border p-2 rounded-md w-full hover:border-[#0074de] focus:outline-none focus:border-[#0074de]" />
          </div>

          <div className="col-span-2 place-items-center">
            <button className="w-fit py-2 px-3 bg-[#0074de] text-white border hover:text-[#0074de] hover:bg-white">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quatation;
