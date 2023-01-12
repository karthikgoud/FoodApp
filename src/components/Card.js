const Card = (props) => {
  const { image, name, rating, place } = props;
  //destructuring
  return (
    <div className="card-container">
      <img src={image} />
      <h2>{name}</h2>
      <p>{rating}</p>
      <p>{place}</p>
    </div>
  );
};

export default Card;
