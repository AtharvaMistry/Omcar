import PropTypes from "prop-types";

function BriefIntroCard({ imageCard, nameCard, numberCard }) {
  return (
    <>
      <div className="grid border rounded-md p-5 min-h-[180px] shadow-md cursor-pointer glassMorphismCard hover:-translate-y-[2px] hover:border-[#0074de] !hover:text-[#0074de]">
        <div className="flex flex-col justify-center items-center gap-y-5 text-center hover:text-[#0074de]">
          <div className="flex justify-center items-center gap-3">
            <img src={imageCard} alt="" className="w-12" />
            <p className="text-4xl text-white">{numberCard}</p>
          </div>
          <p className="text-2xl text-white ">{nameCard}</p>
        </div>
      </div>
    </>
  );
}

BriefIntroCard.propTypes = {
  imageCard: PropTypes.string.isRequired,
  nameCard: PropTypes.string.isRequired,
  numberCard: PropTypes.string.isRequired,

};

export default BriefIntroCard;
