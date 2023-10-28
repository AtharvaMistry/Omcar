// import Machine from "../../assets/settings.png";
import PropTypes from "prop-types";

function ProductCard({ productImg, productMachine }) {
  return (
    <>
      <div className="grid gap-y-3 border rounded-md p-5 place-items-center shadow-md">
        <div className="w-fit border-b-[0.5px] border-[#0074de]">
          <img src={productImg} alt="" className="p-1 w-52" />
        </div>
        <p className="text-2xl font-medium">{productMachine}</p>
        <button className="text-white w-fit border bg-[#0074de] px-3 py-2 rounded-md hover:text-[#0074de] hover:bg-white">
          KNOW MORE
        </button>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  productImg: PropTypes.string.isRequired,
  productMachine: PropTypes.string.isRequired,
};

export default ProductCard;
