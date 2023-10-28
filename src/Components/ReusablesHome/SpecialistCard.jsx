import { useState } from "react";
import "../Header.css";
import PropTypes from "prop-types";
function SpecialistCard({ imageCard, nameCard, descriptionCard }) {
  const [SpecialistHover, setSpecialistHover] = useState(false);
  return (
    <>
      <div className="grid border rounded-md p-5 min-h-[180px] shadow-md cursor-pointer hover:-translate-y-[2px]">
        <div
          className="flex flex-col justify-center items-center gap-y-5 text-center"
          onMouseEnter={() => setSpecialistHover(!SpecialistHover)}
          onMouseLeave={() => setSpecialistHover(!SpecialistHover)}
        >
          {!SpecialistHover ? (
            <>
              <img src={imageCard} alt="" className="w-12" />
              <p className="text-2xl">{nameCard}</p>
            </>
          ) : (
            <div>
              <p className="text-[#0074de] text-lg">{descriptionCard}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

SpecialistCard.propTypes = {
  imageCard: PropTypes.string.isRequired, // Example prop validation for a string
  nameCard: PropTypes.string.isRequired,
  descriptionCard: PropTypes.string.isRequired,
};


export default SpecialistCard;
