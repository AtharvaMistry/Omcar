import { Drawer, Dropdown, Space } from "antd";
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

  //   dropdown for product
  const items = [
    {
      key: "1",
      label: (<Link to="/machine">Milk Mawa (Khova) Machine</Link>),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Milk / Basundi Boiling Machine
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Flour Kneading Machine
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Namkeen Machine
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 z-[999] px-[15px] py-[5px] border-b  fixed top-0 right-0 left-0 glassMorphismHeader md:grid-cols-4 md:px-[40px] lg:px-[60px]">
        <div className="flex justify-start items-center md:col-span-1">
          <p className="text-xl md:text-3xl">Omcar eng.</p>
        </div>
        <div
          className="flex justify-end items-center md:hidden"
          onClick={showHeaderDrawer}
        >
          <img src={HamMenu} alt="" className="w-8 cursor-pointer" />
        </div>

        {/* horizontal menu */}
        <div className="hidden md:col-span-3 md:flex justify-around items-center">
          <Link to="/">
            <p
              className={`w-fit px-3 cursor-pointer text-gray-500 ${
                HorizontalMenu === "Home" && "text-black border-b border-black"
              }  hover:text-black`}
              onClick={() => setHorizontalMenu("Home")}
            >
              Home
            </p>
          </Link>

          <Link to="/about">
            <p
              className={`w-fit px-3 cursor-pointer text-gray-500 ${
                HorizontalMenu === "About" && "text-black border-b border-black"
              } hover:text-black`}
              onClick={() => setHorizontalMenu("About")}
            >
              About Us
            </p>
          </Link>

          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
              >
                <Link to="/product">
                  <p
                    className={`w-fit px-3 cursor-pointer text-gray-500 ${
                      HorizontalMenu === "Product" &&
                      "text-black border-b border-black"
                    } hover:text-black`}
                    onClick={() => setHorizontalMenu("Product")}
                  >
                    Our Products
                  </p>
                </Link>
              </Dropdown>
            </Space>
          </Space>
          <Link to="/download">
            <p
              className={`w-fit px-3 cursor-pointer text-gray-500 ${
                HorizontalMenu === "Download" &&
                "text-black border-b border-black"
              } hover:text-black`}
              onClick={() => setHorizontalMenu("Download")}
            >
              Download
            </p>
          </Link>

          <Link to="/contact">
            <p
              className={`w-fit px-3 cursor-pointer text-gray-500 ${
                HorizontalMenu === "Contact" &&
                "text-black border-b border-black"
              } hover:text-black`}
              onClick={() => setHorizontalMenu("Contact")}
            >
              Contact us
            </p>
          </Link>
        </div>

        {/* vertical menu */}
        <Drawer placement="right" onClose={onClose} open={open}>
          <div className="grid gap-y-5 text-[18px]">
            <p className="w-fit px-3 cursor-pointer hover:bg-slate-300">Home</p>
            <p className="w-fit px-3 cursor-pointer hover:bg-slate-300">
              About Us
            </p>
            <p className="w-fit px-3 cursor-pointer hover:bg-slate-300">
              Our Products
            </p>
            <p className="w-fit px-3 cursor-pointer hover:bg-slate-300">
              Download
            </p>
            <p className="w-fit px-3 cursor-pointer hover:bg-slate-300">
              Contact us
            </p>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
