import { Drawer } from "antd";
import HamMenu from "../assets/menu (1).png";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  // drawer opening
  const [open, setOpen] = useState(false);
  const showHeaderDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //   functionality for selecting menu
  const [HorizontalMenu, setHorizontalMenu] = useState("Home");

  return (
    <>
      <div className="grid grid-cols-2 z-[999] px-[15px] py-[10px] border-b  fixed top-0 right-0 left-0 glassMorphismHeader md:grid-cols-4 md:px-[40px] lg:px-[60px]">
        <div className="flex justify-start items-center md:col-span-1">
          <p className="text-xl font-medium md:text-3xl">OMCAR ENG.</p>
        </div>
        <div
          className="flex justify-end items-center md:hidden"
          onClick={showHeaderDrawer}
        >
          <img src={HamMenu} alt="" className="w-8 cursor-pointer" />
        </div>

        {/* horizontal menu */}
        <div className="hidden md:col-span-3 md:flex justify-end items-center gap-4">
          <Link to="/">
            <p
              className={`w-fit px-3 cursor-pointer  font-medium ${
                HorizontalMenu === "Home" ? "text-[#0074de]" : "text-gray-500"
              } hover:text-black md:text-lg`}
              onClick={() => setHorizontalMenu("Home")}
            >
              Home
            </p>
          </Link>

          <Link to="/about">
            <p
              className={`w-fit px-3 cursor-pointer  font-medium ${
                HorizontalMenu === "About" ? "text-[#0074de]" : "text-gray-500"
              } hover:text-black md:text-lg`}
              onClick={() => setHorizontalMenu("About")}
            >
              About Us
            </p>
          </Link>

          <Link to="/product">
            <p
              className={`w-fit px-3 cursor-pointer  font-medium ${
                HorizontalMenu === "Product"
                  ? "text-[#0074de]"
                  : "text-gray-500"
              } hover:text-black md:text-lg`}
              onClick={() => setHorizontalMenu("Product")}
            >
              Our Products
            </p>
          </Link>

          <Link to="/contact">
            <p
              className={`w-fit px-3 cursor-pointer  font-medium ${
                HorizontalMenu === "Contact"
                  ? "text-[#0074de]"
                  : "text-gray-500"
              } hover:text-black md:text-lg`}
              onClick={() => setHorizontalMenu("Contact")}
            >
              Contact us
            </p>
          </Link>
        </div>

        {/* vertical menu */}
        <Drawer placement="right" onClose={onClose} open={open}>
          <div className="grid gap-y-5 text-[18px]">
            <Link to="/" onClick={() => setOpen(false)}>
              <p className="w-fit px-3 cursor-pointer  ">Home</p>
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              <p className="w-fit px-3 cursor-pointer  ">About Us</p>
            </Link>
            <Link to="/product" onClick={() => setOpen(false)}>
              <p className="w-fit px-3 cursor-pointer  ">Our Products</p>
            </Link>
            {/* <Link to="/download" onClick={() => setOpen(false)}>
              <p className="w-fit px-3 cursor-pointer  ">Download</p>
            </Link> */}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <p className="w-fit px-3 cursor-pointer  ">Contact us</p>
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
