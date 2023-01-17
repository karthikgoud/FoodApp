const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(14)
        .fill("")
        .map((item, index) => {
          return <div key={index} className="shimmer"></div>;
        })}
    </div>
  );
};

export default Shimmer;
