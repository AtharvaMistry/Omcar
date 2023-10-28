import InstaImg from "../assets/instagram.png";
import EmailImg from "../assets/mail.png";
function Footer() {
  return (
    <div className="grid grid-cols-1 mt-10 pb-5 border-t pt-5  px-[15px] sm:grid-cols-2 gap-5  md:px-[40px] lg:px-[60px]">
      <div className="flex justify-start gap-5 items-center border-b pb-2 sm:border-b-0">
        <p>Omkar eng.</p>
        <div className="flex justify-end items-center gap-2">
          <div className="border rounded-full p-2 hover:border-[black]">
            <img src={InstaImg} alt="" className="w-4" />
          </div>
          <div className="w-[0.5px] h-[15px] bg-black"></div>
          <div className="border rounded-full p-2 hover:border-[black]">
            <img src={EmailImg} alt="" className="w-4" />
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="my-5 sm:my-0">
        <p className="">Contact person</p>

        <div className=" text-sm text-gray-400">
          <p>+91 9909291593</p>
          <p>abc@gmail.com</p>
        </div>
      </div>
      {/* more */}
      {/* <div>
        <p>More</p>
        <div className="text-gray-400 text-sm">
          <p>sbdje</p>
          <p>sbdje</p>
        </div>
      </div> */}

      <div className="grid place-items-center text-center col-span-1 sm:col-span-3 sm:mt-5">
        <p className="text-xs">@2023 Omkar eng.</p>
      </div>
    </div>
  );
}

export default Footer;
