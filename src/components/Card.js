import { imageID } from "../config.js";

const Card = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = props;
  //destructuring
  return (
    <div className="card-container">
      <img src={imageID + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default Card;
