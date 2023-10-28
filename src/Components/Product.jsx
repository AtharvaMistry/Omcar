import Khova1Img from "../assets/products2.png";
// import Khova2Img from "../assets/photo_2023-10-28_11-22-39.jpg";
// import Khova3Img from "../assets/photo_2023-10-28_11-22-38.jpg";

// import Khova2Img from "../assets/photo_2023-10-28_11-22-38.jpg";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

function Product() {
  return (
    <div className="grid px-[15px] mt-[70px] md:px-[40px] lg:px-[60px]">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 ">
        <div>
          <div className="border border-dashed px-3">
            <h2 className="text-2xl text-black font-medium w-fit ">
              Milk Mawa (Khova) Machine
            </h2>
          </div>
          <div className="grid mt-10 place-items-start">
            <Card
              style={{
                width: 300,
              }}
              cover={<img alt="example" src={Khova1Img} />}
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                avatar={<Avatar src={Khova1Img} />}
                title="Milk Mawa (Khova) Machine"
                description="55 SS DG"
              />
            </Card>
          </div>
        </div>

        {/*  */}
        <div className="mt-10 md:mt-0">
          <div className="border border-dashed px-3">
            <h2 className="text-2xl text-black font-medium w-fit ">
              Milk / Basundi Boiling Machine
            </h2>
          </div>
          <div className="grid   place-items-start  mt-10">
            <Card
              style={{
                width: 300,
              }}
              cover={<img alt="example" src={Khova1Img} />}
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                avatar={<Avatar src={Khova1Img} />}
                title="Milk / Basundi Boiling Machine"
                description="55 SS DG"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
