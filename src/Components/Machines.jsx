// import { useState } from "react";
// import Machine1Img from "../assets/110-SS-G-02-600x600.png";
// import LinkImg from "../assets/link.png";
// import SearchImg from "../assets/search-interface-symbol.png";

function Machines() {
//   const [firstMachine, setfirstMachine] = useState(false);
  return (
    <div className="grid px-[15px] mt-[60px] md:px-[40px] lg:px-[60px]">
      <div>
        <h2 className="text-2xl text-black font-medium w-fit border-b">
          Milk Mawa (Khova) Machine
        </h2>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="h-[300px] w-[300px] place-items-center ">
          {firstMachine ? (
            <div onMouseLeave={() => setfirstMachine(false)}>
              <div className="flex justify-start items-center gap-2">
                <img src={LinkImg} alt="" className="w-4" />
                <img src={SearchImg} alt="" className="w-4" />
              </div>
              <p>5S SS DG</p>
              <p>Milk Mawa (Khova) Machine</p>
            </div>
          ) : (
            <div onMouseEnter={() => setfirstMachine(true)}>
              <img src={Machine1Img} alt=" " />
            </div>
          )}
        </div>
        <div className="h-[300px] w-[300px] place-items-center ">
          {firstMachine ? (
            <div onMouseLeave={() => setfirstMachine(false)}>
              <div className="flex justify-start items-center gap-2">
                <img src={LinkImg} alt="" className="w-4" />
                <img src={SearchImg} alt="" className="w-4" />
              </div>
              <p>5S SS DG</p>
              <p>Milk Mawa (Khova) Machine</p>
            </div>
          ) : (
            <div onMouseEnter={() => setfirstMachine(true)}>
              <img src={Machine1Img} alt=" " />
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default Machines;
